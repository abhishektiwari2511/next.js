"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Loin = () => {
  let router =  useRouter();
  return (
    <div>
      <h1>hello i am login page</h1>
      <Link href={"/"}>go to home page</Link>
      <button onClick={() => router.push("/")}>home</button>
    </div>
  );
};
export default Loin;




