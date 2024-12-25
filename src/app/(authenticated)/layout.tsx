import BottomBar from "@/components/navigation/bottombar";
import Topbar from "@/components/navigation/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-svh flex flex-col justify-between">
      <Topbar />
      <div className="grow px-6">{children}</div>
      <BottomBar />
    </main>
  );
}
