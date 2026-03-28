// components/DashNavbarServer.tsx

import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";
import DashNavbar from "./DashNavbar";

export default async function DashNavbarServer() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  console.log(session)

  return <DashNavbar session={session} />;
}