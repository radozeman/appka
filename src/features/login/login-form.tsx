import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function LoginForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"div">) {
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
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Heslo</Label>
                </div>
                <Input id="password" type="password" required />
              </div>
              <Button type="submit" className="w-full mb-2">
                Prihlásiť sa
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Nemáte účet?{" "}
              <Link href="/register" className="underline underline-offset-4">
                Zaregistrujte sa
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
