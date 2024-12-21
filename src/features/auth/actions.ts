"use server";

import { hashPassword, verifyPasswordHash } from "@/auth/password";
import { signUpSchema, singInSchema } from "./formSchemas";
import { createUser, getUser } from "@/data-access/auth/queries";
import {
  createSession,
  generateRandomSessionToken,
  invalidateSession,
} from "@/auth/session";
import { deleteSessionCookie, setSessionCookie } from "@/auth/cookie";
import { redirect } from "next/navigation";
import { getAuth } from "@/auth/cookie";

type FormState = {
  message: string;
  fields?: Record<string, string>;
  issues?: string[];
};

export const signIn = async (formState: FormState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  const parsed = singInSchema.safeParse(rawFormData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};
    for (const key of Object.keys(rawFormData)) {
      fields[key] = rawFormData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const user = await getUser(parsed.data.email);

    if (!user) {
      return {
        message: "Zadali ste zlý Email alebo Heslo",
      };
    }

    const validPassword = await verifyPasswordHash(
      user.password_hash.toString(),
      parsed.data.password
    );

    if (!validPassword) {
      return {
        message: "Zadali ste zlý Email alebo Heslo",
      };
    }

    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, user.id);

    await setSessionCookie(sessionToken, session.expiresAt);
  } catch (error) {
    console.log(error);
    return {
      message: "Niečo sa pokazilo, skúste neskôr prosím",
    };
  }

  redirect("/dashboard");
};

export const signUp = async (formState: FormState, formData: FormData) => {
  const rawFormData = Object.fromEntries(formData);
  const parsed = signUpSchema.safeParse(rawFormData);

  if (!parsed.success) {
    const fields: Record<string, string> = {};

    for (const key of Object.keys(rawFormData)) {
      fields[key] = rawFormData[key].toString();
    }
    return {
      message: "Invalid form data",
      fields,
      issues: parsed.error.issues.map((issue) => issue.message),
    };
  }

  try {
    const passwordHash = await hashPassword(parsed.data.password);
    const user = await createUser(parsed.data.email, passwordHash);
    const sessionToken = generateRandomSessionToken();
    const session = await createSession(sessionToken, user.id);
    await setSessionCookie(sessionToken, session.expires_at);
  } catch (error) {
    console.log(error);
    return {
      message: "Niečo sa pokazilo, skúste neskôr prosím",
    };
  }

  redirect("/dashboard");
};

export const signOut = async () => {
  const { session } = await getAuth();
  if (!session) {
    redirect("/login");
  }
  await invalidateSession(session.id);
  await deleteSessionCookie();
  redirect("/login");
};
