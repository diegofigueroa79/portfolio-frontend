import styles from '../../pages/home/home.module.scss'
import profilepic from '../../resources/profilepic.jpg'


export default function About() {
  return (
    <div id='about' className={styles.aboutContainer}>

      <div className={styles.imageContainer}>
        <div className={styles.profileContainer}>
          <img className={styles.profile} src={profilepic} alt="about" />
        </div>
      </div>

      <div className={styles.textContainer}>
        <h1>About Me</h1>
        <p>Hi, my name's Diego Figueroa, and I am a Full Stack Software
          Developer living in Gilroy, California. I've worked many years
          professionally with Web Development and continue to love working
          with fantastic development teams to tackle exciting new projects!
        </p>
        <p>
          My primary languages are Python and Javascript. I mainly use Python
          to build backend applications and REST APIs. Then I use modern
          Javascript frameworks such as React, to build beautiful responsive UIs.
        </p>
      </div>

    </div>
  )
}