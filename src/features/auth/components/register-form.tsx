"use client";
import { cn } from "@/lib/utils";
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
import { signUpSchema } from "../formSchemas";
import { z } from "zod";
import { useFormState } from "react-dom";
import { signUp } from "../actions";
import SubmitButton from "@/components/ui/submit-button";

export function RegisterForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
  const [formState, action] = useFormState(signUp, { message: "" });
  const form = useForm<z.infer<typeof signUpSchema>>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
      ...(formState?.fields ?? {}),
    },
  });

  const handleSubmit = async (formData: FormData) => {
    form.trigger();
    await action(formData);
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Zaregistrujte sa</CardTitle>
          <CardDescription>
            Zadajte svoj e-mail a heslo pre vytvorenie nového účtu
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form action={handleSubmit}>
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
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Potvrďte heslo</FormLabel>
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
                <SubmitButton
                  title=" Zaregistrovať sa"
                  isSubmitting={form.formState.isSubmitting}
                />
                <div className="mt-4 text-center text-sm">
                  Máte zaregistrovaný účet?{" "}
                  <Link href="/login" className="underline underline-offset-4">
                    Prihláste sa
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
