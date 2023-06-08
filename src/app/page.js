'use client'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
export default function Home() {
const router=useRouter() 
 function ram (abhi){
  router.push(abhi)
 }
  return (
    <main className={styles.main}>
     <h1> hello world</h1>
     <Link href={"/about"}>go to about</Link>
     <button onClick={()=>ram('/about')}>about</button>
     <Link href={'/login'}>go to login</Link>
     <button onClick={()=>ram('login')}>login</button>

    </main>
  )
}

