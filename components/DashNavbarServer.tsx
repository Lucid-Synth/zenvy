import { headers } from "next/headers";
import { auth } from "@/app/lib/auth";
import DashNavbar from "./DashNavbar";

export default async function DashNavbarServer() {
  try {
    const session = await auth.api.getSession({
      headers: await headers(),
    });

    if (!session) {
      return <DashNavbar session={null} />;
    }

    return <DashNavbar session={session} />;
  } catch (error) {
    console.error("Error fetching session:", error);

    return <DashNavbar session={null} />;
  }
}