import { getAuth } from "@/auth/cookie";
import NoData from "@/features/dashboard/components/no-data";
import { redirect } from "next/navigation";

const Page = async () => {
  const { session } = await getAuth();
  if (!session) redirect("/login");
  const data = true;
  return (
    <div className="w-full h-full flex items-center justify-center">
      {data && <NoData />}
    </div>
  );
};

export default Page;
