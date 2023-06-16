import styles from '../../pages/home/home.module.scss'

export default function Header() {
    return (
      <header>
        <nav>
          <span></span>
          <span className={styles.home}><a href='/' className={styles.nostyle}>Home</a></span>
          <span><a href='#about' className={styles.nostyle}>About Me</a></span>
          <span><a href='#technologies' className={styles.nostyle}>Technologies</a></span>
          <span><a href='#projects' className={styles.nostyle}>Projects</a></span>
          <span></span>
        </nav>
      </header>
    )
}