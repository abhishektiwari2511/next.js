'use client'
import styles from './page.module.css'
import { useState } from 'react'

export default function Home() {
  const [data,setData]=useState('Home Page')
  const abhi=()=>{
    setData('i changed Home Page in page with help of useState')
  }
  
  const InnerComp= ()=>{
   return( 
    <h1>InnerComponent</h1>
   )

  }
  return (
    <main className={styles.main}>
     <h1> {data}</h1>
     <button onClick={abhi} onDoubleClick={()=>{setData('home page')}}>click me</button>
    <InnerComp/>
    </main>
  )
}

