"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function About() {
  const router = useRouter();
  return (
    <>
      <h1>i am about page</h1>
      <Link href={"/"}>go to home page</Link>
      <button onClick={() => router.push("/")}>home</button>
    </>
  );
}
