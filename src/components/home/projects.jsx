import styles from '../../pages/home/home.module.scss'
import goKartPhoto from '../../resources/go-kart-crazy.png'


export default function Projects() {
    return (
        <div id='projects' className={styles.projectContainer}>
            <div className={styles.projectTitle}>
                <span></span>
                <h1>Projects</h1>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>
                    <div className={styles.projectPhoto}>
                        <img src={goKartPhoto} alt="gokart" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Fun simple go kart game! Built with Unity game engine.</span>
                        <span>Integrated with React via the react-unity-webgl library!</span>
                        <span></span>
                        <span>Frontend: React, SCSS, react-unity-webgl library</span>
                        <span>Game Engine: Unity 3D</span>
                    </div>
                </div>
                <div className={styles.module}></div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>
                    <div className={styles.projectPhoto}>
                        <img src={goKartPhoto} alt="gokart" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Fun simple go kart game! Built with Unity game engine.</span>
                        <span>Integrated with React via the react-unity-webgl library!</span>
                        <span></span>
                        <span>Frontend: React, SCSS, react-unity-webgl library</span>
                        <span>Game Engine: Unity 3D</span>
                    </div>
                </div>
                <div className={styles.module}></div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>
                    <div className={styles.projectPhoto}>
                        <img src={goKartPhoto} alt="gokart" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Fun simple go kart game! Built with Unity game engine.</span>
                        <span>Integrated with React via the react-unity-webgl library!</span>
                        <span></span>
                        <span>Frontend: React, SCSS, react-unity-webgl library</span>
                        <span>Game Engine: Unity 3D</span>
                    </div>
                </div>
                <div className={styles.module}></div>
            </div>
        </div>
    )
}