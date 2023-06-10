"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
const Loin = () => {
  let router = useRouter();
  return (
    <div>
      <h1 className="heading">hello i am login page</h1>
      <ul>
        <li>
          <Link href={"/"}>go to home page</Link>
          <br />
        </li>
        <li>
          <Link href="/login/loginStudent">go to loginStudent</Link>
          <br />
        </li>
        <li>
          <Link href={"/login/loginTeacher"}>go to loginTeacher</Link>
          <br />
        </li>
      </ul>
      <button onClick={() => router.push("/")}>home</button>
      <br />
      <button onClick={() => router.push("/login/loginStudent")}>
        go to student
      </button>
      <br />
      <button onClick={() => router.push("/login/loginTeacher")}>
        go to teacher
      </button>
      <br />
    </div>
  );
};
export default Loin;
