import { getAuth } from "@/auth/cookie";
import { redirect } from "next/navigation";

const Page = async () => {
  const { session } = await getAuth();
  if (!session) redirect("/login");
  return <div>page</div>;
};

export default Page;
