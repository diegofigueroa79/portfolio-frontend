import styles from '../../pages/home/home.module.scss'

export default function Header() {
    return (
      <header>
        <nav>
          <span className={styles.spacer}></span>
          <span className={styles.home}><a href='/portfolio-frontend/' className={styles.nostyle}>Home</a></span>
          <span><a href='#about' className={styles.nostyle}>About</a></span>
          <span className={styles.technology}><a href='#technologies' className={styles.nostyle}>Technologies</a></span>
          <span className={styles.tech}><a href='#technologies' className={styles.nostyle}>Tech</a></span>
          <span className={styles.last}><a href='#projects' className={styles.nostyle}>Projects</a></span>
          <span className={styles.spacer}></span>
        </nav>
      </header>
    )
}