import { Button } from "@/components/ui/button";
import { CaptionsOff, PlusIcon } from "lucide-react";
import Link from "next/link";

const NoData = () => {
  return (
    <div className="text-center max-w-72 py-20 md:my-44">
      <CaptionsOff className="text-muted-foreground stroke-[0.5px] size-32 mb-2.5 mx-auto" />
      <p className="text-muted-foreground mb-6">
        Zdá sa, že zatiaľ nemáte žiadne zaznamenané údaje.
      </p>
      <Button asChild>
        <Link href="/create">
          <PlusIcon />
          Vytvoriť záznam
        </Link>
      </Button>
    </div>
  );
};

export default NoData;
