import DesktopNavigation from "@/components/navigation/desktop-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import LogoutForm from "@/features/auth/components/logout-form";
import { Separator } from "../ui/separator";

const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center mb-2.5">
        <DesktopNavigation />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LogoutForm />
        </div>
      </div>
      <Separator className="hidden md:flex" />
    </>
  );
};

export default Topbar;
