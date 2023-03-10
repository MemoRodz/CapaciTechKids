import { useState, useEffect } from 'react';
import { FaLock, FaLockOpen } from 'react-icons/fa';
import styles from "../Player/Player.module.css"
import ReactPlayer from 'react-player/youtube'
import { baseUrl } from '../../../models/baseUrl'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import ReviewForm from "../Review's form/review"
import { useSelector } from 'react-redux';
import Button from '../../../component/Buttons/Button/Button'

function Player() {
  const { id } = useParams();
  const [actives, setActives] = useState([])
  const [index, setIndex] = useState(1)
  const [allViewed, setAllViewed] = useState(false) // controla si llego al ultimo video
  const [isSend, setIsSend] = useState(false) // controla si se a enviado una review
  const userInfo = useSelector(state => state.user)

  const userLecture = async (id) => {
    console.log("me ejecuté? ")
    const res = await axios.post(`${baseUrl}/users/userslectures?lecture=${id}&student=${userInfo.ID}`)
    console.log(res)
  }
  const handleNext = () => {
    setIndex(index + 1)
    if (index === actives.length - 1) setAllViewed(true)
  }

  const handlePrev = () => {
    setIndex(index - 1)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}/courses/lectures/${id}`);
        const module2 = response.data.map(m => ({ ...m, isActive: false }));
        let newArr = module2.map(m => {
          if (m.NoVideo <= index) {
            return {
              ...m,
              isActive: true
            }
          }
          return m
        })
        setActives(newArr)
        userLecture(actives[0].PK_Lecture)
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [index])

  // console.log("Holaaaa", actives)

  return (
    <div className={styles.conten}>
      <div className={styles.sidebar}>
        <div className={styles.contenido}>
          <h1>Contenido del modulo</h1>
        </div>

        {actives && actives.map((m, i) => (
          <>
            <h3 key={`${i}-video-title`}>{m.Title} {m.isActive || allViewed ?
              <FaLockOpen key={`${i}-video-candado-abierto`} /> :
              < FaLock key={`${i}-video-candado-cerrado`} />}</h3>
          </>
        ))}
        <div className={styles.botenera}>
          <button onClick={handlePrev} disabled={index < 2}>Anterior</button>
          <button onClick={() => {
            handleNext();
          }} disabled={index > actives.length}>Siguiente</button>
        </div>
      </div>
      <div className={styles.repro}>
        {actives && actives.map(m => (
          <div >
            {index === m.NoVideo ? (
              <div className={styles.playerWrapper}>
                <ReactPlayer controls url={m.Video} />
              </div>
            ) : null}
          </div>
        ))}
        {index > actives.length && !isSend ? (
          <ReviewForm id={id} setIsSend={setIsSend} />
        ) : null}
      </div>
    </div>
  );
};

export default Player;