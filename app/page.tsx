"use client"

import styles from './page.module.css'
import { useState, useEffect } from "react"
import {
  fetchIpv4,
  fetchIpv6
} from "./ipify"

export default function Home() {
  const [ipFour, setIpFour] = useState<string>('IPv4 Loading...')
  const [ipSix, setIpSix] = useState<string>('IPv6 Loading...')

  useEffect(() => {
    fetchIpv4().then((data: any) => setIpFour(data))
    fetchIpv6().then((data: any) => setIpSix(data))
  }, [])

  return (
    <>
      <main className={styles.container}>
        <h1 className={styles.appname}>FindMyIP</h1>
        <p>{ipFour}</p>
        <p>{ipSix}</p>
      </main>
      <footer className={styles.footer}>
        Powered by <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">Next.js</a> + <a href="https://www.ipify.org/" target="_blank" rel="noopener noreferrer">ipify</a>&nbsp;&copy; {new Date().getFullYear()} Javier Martinez &#91;<a href="https://github.com/hoogmin/findmyip">GitHub</a>&#93; MIT License
      </footer>
    </>
  )
}
