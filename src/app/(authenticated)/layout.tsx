import BottomBar from "@/components/navigation/bottombar";
import Topbar from "@/components/navigation/topbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full p-2.5 h-screen flex flex-col justify-between">
      <Topbar />
      <div className="grow">{children}</div>
      <BottomBar />
    </main>
  );
}
