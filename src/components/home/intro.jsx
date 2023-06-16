import styles from "../../pages/home/home.module.scss"
import Lottie from "lottie-react";
import developerBlueAnimation from "../../resources/developer-blue.json"
import resume from "../../resources/diego-figueroa-resume.pdf"


export default function Intro() {
  return (
    <div className={styles.introContainer}>

      <div className={styles.greetingContainer}>
        <span>Hello World! My name is</span>
        <span className={styles.name}>Diego Figueroa</span>
        <span>I am a Python and Javscript Developer</span>
        <div className={styles.buttonContainer}>
          <a href={resume} rel="noreferrer" target="_blank"><button>View Resume</button></a>
          <span>
            <a className={styles.nostyle} href="https://github.com/diegofigueroa79" rel="noreferrer" target="_blank"><i class="devicon-github-original"></i></a>
          </span>
          <span>
            <a className={styles.nostyle} href="https://www.linkedin.com/in/diegofigueroa79/" rel="noreferrer" target="_blank"><i class="devicon-linkedin-plain"></i></a>
          </span>
        </div>
      </div>

      <div className={styles.animationContainer}>
        <Lottie animationData={developerBlueAnimation} loop={true} />
      </div>

    </div>
  )
}