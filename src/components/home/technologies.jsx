import styles from '../../pages/home/home.module.scss'
import awsLogo from '../../resources/aws.svg'
import djangoLogo from '../../resources/django.svg'
import pythonLogo from '../../resources/python.png'
import reactLogo from '../../resources/react.png'


export default function Technologies() {
  return (
    <div id='technologies' className={styles.technologyContainer}>
      <div className={styles.technologyTitle}>
        <h1>Technologies</h1>
        <span></span>
      </div>
      <div className={styles.technologyList}>
        <div className={styles.technologyItem}>
          <img src={pythonLogo} alt="python" />
        </div>
        <div className={styles.technologyItem}>
          <img src={djangoLogo} alt="django" />
        </div>
        <div className={styles.technologyItem}>
          <img src={reactLogo} alt="react" />
        </div>
        <div className={styles.technologyItem}>
          <img src={awsLogo} alt="aws" />
        </div>
      </div>
    </div>
  )
}