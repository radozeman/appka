import { getAuth } from "@/auth/cookie";
import { RegisterForm } from "@/features/auth/components/register-form";
import { redirect } from "next/navigation";

export default async function Page() {
  const { session } = await getAuth();
  if (session) redirect("/dashboard");
  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <RegisterForm />
      </div>
    </div>
  );
}
