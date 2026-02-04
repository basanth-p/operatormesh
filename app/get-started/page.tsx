import Image from "next/image";
import { CardDemo } from "@/components/CardDemo";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <CardDemo />
      </main>
    </div>
  );
}
