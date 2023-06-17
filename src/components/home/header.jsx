import styles from '../../pages/home/home.module.scss'

export default function Header() {
    return (
      <header>
        <nav>
          <span></span>
          <span className={styles.home}><a href='/portfolio-frontend/' className={styles.nostyle}>Home</a></span>
          <span><a href='#about' className={styles.nostyle}>About</a></span>
          <span><a href='#technologies' className={styles.nostyle}>Technologies</a></span>
          <span><a href='#projects' className={styles.nostyle}>Projects</a></span>
          <span></span>
        </nav>
      </header>
    )
}