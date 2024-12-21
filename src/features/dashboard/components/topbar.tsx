import { ModeToggle } from "@/components/theme-toggle";
import { SidebarTrigger } from "@/components/ui/sidebar";

const Topbar = () => {
  return (
    <div>
      <SidebarTrigger />
      <ModeToggle />
    </div>
  );
};

export default Topbar;
