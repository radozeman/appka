import { Button } from "@/components/ui/button";
import { signOut } from "../actions";
import { LogOutIcon } from "lucide-react";

const LogoutForm = () => {
  return (
    <form action={signOut}>
      <Button type="submit" variant="ghost" size="icon">
        <LogOutIcon />
      </Button>
    </form>
  );
};

export default LogoutForm;
