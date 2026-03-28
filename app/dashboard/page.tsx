import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";
import { redirect } from "next/navigation";
import UploadZoneClient from "@/components/UploadZoneClient";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // 🔐 PROTECT ROUTE
  if (!session) {
    redirect("/unauthorized");
  }

  return <UploadZoneClient />;
}