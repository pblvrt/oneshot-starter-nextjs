import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { SignOutButton } from "./sign-out-button";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/sign-in");
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b px-6 py-4">
        <h1 className="text-xl font-semibold">Dashboard</h1>
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground text-sm">
            {session.user.email}
          </span>
          <SignOutButton />
        </div>
      </header>
      <main className="flex flex-1 items-center justify-center p-8">
        <div className="text-center">
          <h2 className="text-2xl font-bold">
            Welcome, {session.user.name}
          </h2>
          <p className="text-muted-foreground mt-2">
            This is your protected dashboard. Build something great.
          </p>
        </div>
      </main>
    </div>
  );
}
