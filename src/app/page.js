'use client'
import styles from './page.module.css'
import { useState } from 'react'
import Link from 'next/link'
export default function Home() {
 
 
  return (
    <main className={styles.main}>
     <h1> hello world</h1>
     <Link href={"/about"}>go to about</Link>
     <Link href={'/login'}>go to login</Link>
    </main>
  )
}

