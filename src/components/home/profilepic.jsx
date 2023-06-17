import styles from '../../pages/home/home.module.scss'
import profilepic from '../../resources/profilepic.jpg'

export default function ProfilePic() {
  return (
    <div className={styles.profileOuterContainer}>
      <div></div>
      <div className={styles.profilepicContainer}>
        <img className={styles.profilepic} src={profilepic} alt="profile" />
      </div>
      <div></div>
    </div>
  )
}