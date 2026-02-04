import Image from "next/image";
import { ButtonAsChild } from "@/components/ButtonAsChild";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main>
        <h1>Operator Mesh is a all in one mesh of your communication channels into a single UI.</h1>
        <div className="mt-4 items-center justify-center flex">
          <ButtonAsChild />
        </div>
      </main>
    </div>
  );
}
