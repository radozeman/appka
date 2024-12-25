import DesktopNavigation from "@/components/navigation/desktop-navigation";
import { ThemeToggle } from "@/components/theme-toggle";
import LogoutForm from "@/features/auth/components/logout-form";

const Topbar = () => {
  return (
    <>
      <div className="hidden md:flex w-full justify-between items-center p-4 pb-0">
        <DesktopNavigation />
        <div className="flex items-center gap-1">
          <ThemeToggle />
          <LogoutForm />
        </div>
      </div>
    </>
  );
};

export default Topbar;
