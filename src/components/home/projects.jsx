import styles from '../../pages/home/home.module.scss'


export default function Projects() {
    return (
        <div id='projects' className={styles.projectContainer}>
            <div className={styles.projectTitle}>
                <span></span>
                <h1>Projects</h1>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>Project</div>
                <div className={styles.module}></div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>Project</div>
                <div className={styles.module}></div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>Project</div>
                <div className={styles.module}></div>
            </div>
        </div>
    )
}