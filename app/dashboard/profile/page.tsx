import { auth } from "@/app/lib/auth";
import { headers } from "next/headers";
import ProfileCard from "@/components/ProfileCard";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if(!session){
    redirect('/unauthorized');
  }

  return <ProfileCard user={session.user} />;
}