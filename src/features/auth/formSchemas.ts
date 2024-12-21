import { z } from "zod";

export const signUpSchema = z
  .object({
    email: z.string().email(),
    password: z.string().min(4).max(25),
    confirmPassword: z.string().min(4).max(25),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The passwords did not match",
        path: ["confirmPassword"],
      });
    }
  });

export const singInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4).max(25),
});
