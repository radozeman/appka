import "server-only";
import {
  createNewSession,
  deleteSession,
  getSession,
  updateSession,
} from "@/data-access/auth/queries";
import { sha256 } from "@oslojs/crypto/sha2";
import {
  encodeBase32LowerCaseNoPadding,
  encodeHexLowerCase,
} from "@oslojs/encoding";

const SESSION_REFRESH_INTERVAL_MS = 1000 * 60 * 60 * 24 * 15; // 15 days
const SESSION_MAX_DURATION_MS = SESSION_REFRESH_INTERVAL_MS * 2; // 30 days

export const generateRandomSessionToken = () => {
  const bytes = new Uint8Array(20);
  crypto.getRandomValues(bytes);
  return encodeBase32LowerCaseNoPadding(bytes);
};

const fromSessionTokenToSessionId = (sessionToken: string) => {
  return encodeHexLowerCase(sha256(new TextEncoder().encode(sessionToken)));
};

export const createSession = async (sessionToken: string, userId: string) => {
  const sessionId = fromSessionTokenToSessionId(sessionToken);
  const expiresAt = new Date(
    Date.now() + SESSION_MAX_DURATION_MS
  ).toISOString();
  const session = await createNewSession(sessionId, userId, expiresAt);
  return session;
};

export const validateSession = async (sessionToken: string) => {
  const sessionId = fromSessionTokenToSessionId(sessionToken);
  const session = await getSession(sessionId);

  if (!session) {
    return { session: null };
  }

  if (Date.now() >= session.expires_at.getTime()) {
    await deleteSession(sessionId);
    return { session: null };
  }

  if (
    Date.now() >=
    session.expires_at.getTime() - SESSION_REFRESH_INTERVAL_MS
  ) {
    session.expires_at = new Date(
      Date.now() + SESSION_MAX_DURATION_MS
    ).toISOString();

    await updateSession(sessionId, session.expires_at);
  }

  return { session };
};

export const invalidateSession = async (sessionId: string) => {
  await deleteSession(sessionId);
};
