import { ModeToggle } from "@/components/shared/ThemeToggle";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Context API</h1>

      <p>Dark mode toggle implemented</p>
      <p>Search Mode toggle to be implemented</p>
    </main>
  );
}
