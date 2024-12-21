import "server-only";
import { cookies } from "next/headers";
import { validateSession } from "./session";
import { cache } from "react";

export const SESSION_COOKIE_NAME = "session";

export const setSessionCookie = async (
  sessionToken: string,
  expiresAt: Date
) => {
  const cookie = {
    name: SESSION_COOKIE_NAME,
    value: sessionToken,
    attributes: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      expires: expiresAt,
    },
  };
  cookies().set(cookie.name, cookie.value, cookie.attributes);
};

export const deleteSessionCookie = async () => {
  const cookie = {
    name: SESSION_COOKIE_NAME,
    value: "",
    attributes: {
      httpOnly: true,
      sameSite: "lax" as const,
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 0,
    },
  };
  await cookies().set(cookie.name, cookie.value, cookie.attributes);
};

export const getAuth = cache(() => {
  const sessionToken = cookies().get(SESSION_COOKIE_NAME)?.value ?? null;
  if (!sessionToken) {
    return { session: null };
  }
  return validateSession(sessionToken);
});
