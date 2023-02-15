import { Link } from 'react-router-dom'
import styles from './Home.module.css'

function Home() {
  return (
    <>
      <div className={styles.home}>
        <h1>
          Welcome to<br />
          CapaciTechKids
        </h1>
        <h3>
          CapaciTechKids is an interesting<br />
          platform that will teach you in the<br />
          most interactive way
        </h3>
        <Link to={'/login'}>Join for free</Link>

        <h2>Our success</h2>
        <p>Thousands of students are already learning from our platform, which includes<br />
          hundreds of courses that will prepare you for your future.</p>

        <h2>All-In-One Learning Platform</h2>
        <p>CapaciTechKids offers the best learning solution for students, while<br />
          giving instructors and teachers an easy way of sharing their knowledge.
        </p>

        <div className={styles.homecards}>
          <div className={styles.homecard}>
            <img src="" alt="" width={100} height={100} />
            <h3>Courses, Lectures and<br />
              Exams.</h3>
            <p>Simple and effective way of<br />
              teaching. Each course is divided<br />
              in lectures, and includes unique<br />
              exams in order to benchmark the
              student.</p>
          </div>
          <div className={styles.homecard}>
            <img src="" alt="" width={100} height={100} />
            <h3>Easy Scheduling &<br />
              Attendance Tracking</h3>
            <p>Study from everywhere, everytime.<br />
              You create your own schedule,<br />
              managing your classes depending<br />
              on your time and preferences.</p>
          </div>
          <div className={styles.homecard}>
            <img src="" alt="" width={100} height={100} />
            <h3>Student Tracking</h3>
            <p>Automated emails for<br />
              instructors and students.<br />
              Keeping both parts informed<br />
              about its progress.</p>
          </div>
        </div>

        <div className="">
          <div className="">
            <h2>Study new technologies, be a<br />
              CapaciTechKid!</h2>
            <p>We have the most updated courses, including most<br />
              modern technologies such as web development,online<br />
              business, marketing, interface design and more.
            </p>

          </div>
          <img src="" alt="" />
        </div>
        <Link to={'/about'}>Learn more</Link>
      </div>
    </>
  )
}

export default Home