"use client";
import { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import LoginForm from "@/app/login/page";

export default function Home() {
  // useEffect(() => {
  //   // If the user is authenticated, redirect them to the chat page
  //   if (session) {
  //     router.push("/chat");
  //   }
  //   // If not authenticated, keep them on the Home (or login) page
  // }, [session, router]);
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <LoginForm />
    </main>
  );
}
