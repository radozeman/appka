"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { singInSchema } from "../formSchemas";
import { z } from "zod";
import { useFormState } from "react-dom";
import { signIn } from "../actions";
import { useRef } from "react";
import SubmitButton from "@/components/ui/submit-button";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [formState, action] = useFormState(signIn, { message: "" });
  const formRef = useRef<HTMLFormElement>(null);
  const form = useForm<z.infer<typeof singInSchema>>({
    resolver: zodResolver(singInSchema),
    defaultValues: {
      email: "",
      password: "",
      ...(formState?.fields ?? {}),
    },
  });

  console.log(formState);
  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Prihláste sa</CardTitle>
          <CardDescription>
            Zadajte svoj e-mail nižšie a prihláste sa do svojho účtu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              ref={formRef}
              action={action}
              onSubmit={form.handleSubmit(() => formRef.current?.submit())}
            >
              <div className="flex flex-col gap-4">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Heslo</FormLabel>
                      <FormControl>
                        <Input type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {formState?.message !== "" && !formState.issues && (
                  <p className="text-red-500 text-sm">{formState.message}</p>
                )}
                {formState?.issues && (
                  <div className="text-red-500 text-sm">
                    <ul>
                      {formState.issues.map((issue, index) => (
                        <li key={index} className="flex gap-1">
                          {issue}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <SubmitButton title="Prihlásiť sa" />
                <div className="mt-4 text-center text-sm">
                  Nemáte zaregistrovaný účet?{" "}
                  <Link
                    href="/register"
                    className="underline underline-offset-4"
                  >
                    Zaregistrujte sa
                  </Link>
                </div>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
