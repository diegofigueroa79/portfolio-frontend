import styles from '../../pages/home/home.module.scss'
import goKartPhoto from '../../resources/go-kart-crazy.png'
import vuejs from '../../resources/vuejs.png'


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
                        <span>Frontend: React, Sass, react-unity-webgl library</span>
                        <span>Game Engine: Unity 3D</span>
                        <div className={styles.buttonContainer}>
                            <a href="https://diegofigueroa79.github.io/go-kart-krazy/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="https://github.com/diegofigueroa79/go-kart-krazy" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
                    </div>
                </div>
                <div className={styles.module}></div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}></div>
                <div className={styles.mainModule}>
                    <div className={styles.projectPhoto}>
                        <img src={vuejs} alt="vue js" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Small page application showcasing the front-end framework Vue JS.</span>
                        <span>Utilizes Vue's built in component framework Vuetify</span>
                        <span>Frontend: Vue CLI, Vuetify, Vuex</span>
                        <div className={styles.buttonContainer}>
                            <a href="https://diegofigueroa79.github.io/vue-portfolio/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="https://github.com/diegofigueroa79/vue-portfolio/tree/master/portfolio" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
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
                        <div className={styles.buttonContainer}>
                            <a href="/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="/" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
                    </div>
                </div>
                <div className={styles.module}></div>
            </div>
        </div>
    )
}