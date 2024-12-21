import { ModeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";
import LogoutForm from "@/features/auth/components/logout-form";

const Topbar = () => {
  return (
    <div>
      <SidebarTrigger />
      <ModeToggle />
      <LogoutForm />
    </div>
  );
};

export default Topbar;
