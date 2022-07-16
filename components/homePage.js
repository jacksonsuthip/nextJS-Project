import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GithubOutlined } from '@ant-design/icons'

export default function Homepage() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Next.js!
        </h1>
        <div className={styles.grid}>
          <Link href='/api-test' >
            <div className={styles.card}>
              <a>
                <h2>API Sample </h2>
                From "jsonplaceholder"
              </a>
            </div>
          </Link>
          <div className={styles.card}>
            <h2>API Sample </h2>
            <Link href='/'>
              LogIn Page
            </Link>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
        <a href='https://github.com/jacksonsuthip' target="_blank">
          GitHub&nbsp;&nbsp;<GithubOutlined />&nbsp;&nbsp;Link
        </a>
      </footer>
    </div>
  )
}
