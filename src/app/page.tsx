import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 p-8">
      <h1 className="text-4xl font-bold tracking-tight">Welcome</h1>
      <p className="text-muted-foreground text-lg">
        Your app starts here. Replace this page with your landing page.
      </p>
      <div className="flex gap-4">
        <Link
          href="/sign-in"
          className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-6 py-2.5 text-sm font-medium transition-colors"
        >
          Sign In
        </Link>
        <Link
          href="/sign-up"
          className="bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-md px-6 py-2.5 text-sm font-medium transition-colors"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
}
