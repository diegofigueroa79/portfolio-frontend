import styles from '../../pages/home/home.module.scss'
import goKartPhoto from '../../resources/go-kart-crazy.png'
import vuejs from '../../resources/vuejs.png'
import topcryptocurrency from '../../resources/topcryptocurrency.png'


export default function Projects() {
    return (
        <div id='projects' className={styles.projectContainer}>
            <div className={styles.projectTitle}>
                <span></span>
                <h1>Projects</h1>
            </div>
            <div className={styles.project}>
                <div className={styles.module}>
                    <div className={styles.projectPhoto}>
                        <img src={topcryptocurrency} alt="topcryptocurrency" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Current price listing, charts and description of the top 10 largest cryptos!</span>
                        <span>Full Stack application with a React powered frontend and Django powered backend.</span>
                        <br />
                        <span>Frontend: React, SCSS, react-google-charts library</span>
                        <span>Backend: Python, Django, Django Rest Framework</span>
                        <br />
                        <div className={styles.buttonContainer}>
                            <a href="https://diegofigueroa79.github.io/top-cryptocurrency/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="https://github.com/diegofigueroa79/top-cryptocurrency" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}>
                    <div className={styles.projectPhoto}>
                        <img src={goKartPhoto} alt="gokart" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Fun simple go kart game! Built with Unity game engine.</span>
                        <span>Integrated with React via the react-unity-webgl library!</span>
                        <br />
                        <span>Frontend: React, Sass, react-unity-webgl library</span>
                        <span>Game Engine: Unity 3D</span>
                        <br />
                        <div className={styles.buttonContainer}>
                            <a href="https://diegofigueroa79.github.io/go-kart-krazy/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="https://github.com/diegofigueroa79/go-kart-krazy" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.project}>
                <div className={styles.module}>
                    <div className={styles.projectPhoto}>
                        <img src={vuejs} alt="vue js" />
                    </div>
                    <div className={styles.projectDescription}>
                        <span>Small page application showcasing the front-end framework Vue JS.</span>
                        <span>Utilizes Vue's built in component framework Vuetify</span>
                        <br />
                        <span>Frontend: Vue CLI, Vuetify, Vuex</span>
                        <br />
                        <div className={styles.buttonContainer}>
                            <a href="https://diegofigueroa79.github.io/vue-portfolio/" rel="noreferrer" target="_blank"><button>Live Site</button></a>
                            <a href="https://github.com/diegofigueroa79/vue-portfolio/tree/master/portfolio" rel="noreferrer" target="_blank"><button>View Code</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}