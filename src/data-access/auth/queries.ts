import "server-only";
import { sql } from "@vercel/postgres";

export const createUser = async (email: string, passwordHash: string) => {
  const { rows } =
    await sql`INSERT into users(email, password_hash) VALUES (${email}, ${passwordHash}) RETURNING id`;
  return rows[0];
};

export const getUser = async (email: string) => {
  const { rows } = await sql`SELECT * from users where email = ${email}`;
  return rows[0];
};

export const createNewSession = async (
  sessionToken: string,
  userId: string,
  expiresAt: string
) => {
  const { rows } =
    await sql`INSERT into sessions(id, user_id, expires_at) VALUES (${sessionToken}, ${userId}, ${expiresAt}) RETURNING expires_at`;
  return rows[0];
};

export const getSession = async (sessionId: string) => {
  const { rows } =
    await sql`SELECT sessions.*, users.email FROM sessions JOIN users ON sessions.user_id = users.id WHERE sessions.id = ${sessionId};`;
  return rows[0];
};

export const deleteSession = async (sessionId: string) => {
  const { rows } = await sql`DELETE from sessions WHERE id = ${sessionId}`;
  return rows[0];
};

export const updateSession = async (sessionId: string, expiresAt: string) => {
  const { rows } =
    await sql`UPDATE sessions SET expires_at = ${expiresAt} WHERE id = ${sessionId}`;
  return rows[0];
};
