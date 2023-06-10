import Link from "next/link";
import './login.css'

export default function Layout({children}){
    return(
        <div>
              
            <ul className="login-menu">
                <li>
                    <h4>Login Navbar</h4>
                </li>
            <li>
                <Link href="/login">Login Main</Link>
            </li>
            <li>
                <Link href="/login/loginStudent">Student Login </Link>
            </li>
            <li>
                <Link href="/login/loginTeacher">Teacher Login </Link>
            </li>
            </ul>
            <h1 className="heading">lg</h1>
            {children}
        </div>
    )
}
// children params