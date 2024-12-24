import { Button } from "../ui/button";
import Link from "next/link";

type NavigationItemProps = {
  href: string;
  title: string;
  Icon: React.ComponentType;
};

const NavigationItem = ({ href, title, Icon }: NavigationItemProps) => {
  return (
    <Button asChild variant="ghost">
      <Link href={href}>
        <Icon />
        <span className="hidden md:block">{title}</span>
      </Link>
    </Button>
  );
};

export default NavigationItem;
