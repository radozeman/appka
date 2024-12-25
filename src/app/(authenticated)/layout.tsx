import BottomBar from "@/components/navigation/bottombar";
import Topbar from "@/components/navigation/topbar";
import PageTitle from "@/components/page-title";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full h-svh flex flex-col justify-between">
      <Topbar />
      <PageTitle />
      <div className="grow p-8 overflow-y-scroll">{children}</div>
      <BottomBar />
    </main>
  );
}
