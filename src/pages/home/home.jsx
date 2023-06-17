import Header from "../../components/home/header.jsx"
import Footer from "../../components/home/footer.jsx"
import Intro from "../../components/home/intro.jsx"
import ProfilePic from "../../components/home/profilepic.jsx"
import About from "../../components/home/about.jsx"
import Technologies from "../../components/home/technologies.jsx"
import Projects from "../../components/home/projects.jsx"
import styles from "./home.module.scss"


export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Intro />
      <ProfilePic />
      <About />
      <Technologies />
      <Projects />
      <Footer />
    </div>
  )
}