import { navigationConfig } from "@/lib/config";
import NavigationItem from "./navigation-item";

const DesktopNavigation = () => {
  return (
    <div className="flex gap-1 items-center">
      {navigationConfig.map(({ href, title, Icon }, index) => (
        <NavigationItem key={index} href={href} title={title} Icon={Icon} />
      ))}
    </div>
  );
};

export default DesktopNavigation;
