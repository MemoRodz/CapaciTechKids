import { Link } from 'react-router-dom'
import styles from './Home.module.css'
import { HiOutlineDocumentText } from 'react-icons/hi'
import { FaCalendarAlt, FaUsers } from 'react-icons/fa'
import { useAuth0 } from '@auth0/auth0-react';
import { LoginButton, LogoutButton, Profile } from '../../component'
import { Fragment } from 'react';


function Home() {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <div className={styles.home}>
        <div className={styles.welcomecard}>
          <h1 className={styles.welcome}>
            Welcome to<br />
          </h1>
          <h1 className={styles.capaci}>
            CapaciTechKids
          </h1>
          <h3 className={styles.text}>
            CapaciTechKids is an interesting<br />
            platform that will teach you in the<br />
            most interactive way
          </h3>
          <div className={styles.login}>
            {isAuthenticated ? <>
              <Profile />
              <LogoutButton />
            </>
              :
              <>
                <LoginButton />
              </>
            }
          </div>
        </div>

        <h2 className={styles.our}>Our success</h2>
        <p>Thousands of students are already learning from our platform, which includes<br />
          hundreds of courses that will prepare you for your future.</p>

        <div className={styles.stats}>
          <div className={styles.stat}>
            <h2>15k+</h2> <br />
            <p>Students</p>
          </div>
          <div className={styles.stat}>
            <h2>75%</h2><br />
            <p>Total success</p>
          </div>
          <div className={styles.stat}>
            <h2>570</h2><br />
            <p>Exam questions</p>
          </div>
          <div className={styles.stat}>
            <h2> 68 </h2><br />
            <p>Professors</p>
          </div>
          <div className={styles.stat}>
            <h2>16</h2><br />
            <p>Modern categories</p>
          </div>
        </div>

        <h2 className={styles.all}>All-In-One <span>Learning Platform</span></h2>
        <p>CapaciTechKids offers the best learning solution for students, while<br />
          giving instructors and teachers an easy way of sharing their knowledge.
        </p>

        <div className={styles.homecards}>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <HiOutlineDocumentText size="3rem" color='white' />
            </div>
            <h3>Courses, Lectures and<br />
              Exams.</h3>
            <p>Simple and effective way of<br />
              teaching. Each course is divided<br />
              in lectures, and includes unique<br />
              exams in order to benchmark the
              student.</p>
          </div>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <FaCalendarAlt size="3rem" color="white" />
            </div>
            <h3>Easy Scheduling &<br />
              Attendance Tracking</h3>
            <p>Study from everywhere, everytime.<br />
              You create your own schedule,<br />
              managing your classes depending<br />
              on your time and preferences.</p>
          </div>
          <div className={styles.homecard}>
            <div className={styles.iconcardbg}>
              <FaUsers size="3rem" color='white' />
            </div>
            <h3>Student Tracking</h3>
            <p>Automated emails for<br />
              instructors and students.<br />
              Keeping both parts informed<br />
              about its progress.</p>
          </div>
        </div>

        <div>
          <h2 className={styles.study}>Study new technologies, be a<br />
            <span>CapaciTechKid!</span></h2>
          <p>We have the most updated courses, including most<br />
            modern technologies such as web development,online<br />
            business, marketing, interface design and more.
          </p>

        </div>
        <img src="" alt="" />
      </div>

      <div className={styles.ult}>
        <Link to={'/course'}>Learn more</Link>
      </div>

    </>
  )
}

export default Home