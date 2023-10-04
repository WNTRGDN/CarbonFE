import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/CFE_main_logo.png"
          alt="Carbon Fire Engineering"
          width={510}
          height={110}
          priority
        />
      </div>
    </main>
  )
}
