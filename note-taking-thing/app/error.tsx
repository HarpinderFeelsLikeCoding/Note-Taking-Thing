"use client";

import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const Error = () => {
  return (
    <div className="flex h-full flex-col items-center justify-center space-y-4 dark:bg-[#1F1F1F]">
      <Image
        src="note-taking-thing/app/img.icons8.com.png"
        height="300"
        width="300"
        alt="error"
        className="dark:hidden"
      />
      <h2 className="text-xl font-medium">Something went wrong!</h2>
      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </div>
  );
};
export default Error;