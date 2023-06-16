import styles from '../../pages/home/home.module.scss'

export default function Footer() {
    return (
        <footer>
            <span>Diego Figueroa 2023</span>
            <span>|</span>
            <span><a className={styles.nostyle} href="https://www.linkedin.com/in/diegofigueroa79/">www.linkedin.com/in/diegofigueroa79/</a></span>
        </footer>
    )
}