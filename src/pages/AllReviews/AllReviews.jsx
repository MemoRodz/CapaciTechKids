import React, { useState, useEffect } from "react";
import styles from "./AllReviews.module.css";
import { useParams, Link, useLocation } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import axios from "axios";

import Estrella from '../../component/Estrella/Estrella'

import { baseUrl } from '../../models/baseUrl'
import { useSelector } from "react-redux";



export default function Reviews() {
    const [review, setReview] = useState([]);
    const { id } = useParams();
    const [average, setAverage] = useState([])
    
  const { pathname } = useLocation()

  const userInfo = useSelector(state => state.user)

  useEffect(() => {
    const fetchData = async () => {
      try {
       
        const reviews = await axios.get(`${baseUrl}/reviews/related/${id}`)
        const avg = await axios.get(`${baseUrl}/reviews/avg/related/${id}`)
        setAverage(avg.data.average_score);
        setReview(reviews.data);
        window.scrollTo(0, 0);

    
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [pathname]);

console.log(average,review)

  function Score() {
    let score = average
     score = Math.round(score * 10) / 10

    // console.log("---> SCORE", score)
    if (score === null) {
      return 0
    }
    if (Math.round(score) === 1) {
      return 1
    }
    if (score === Math.ceil(score)) {
      return score
    } else {
      return score
    }
  }

  return(
    <div className={styles.container}>
      <div className={styles.heard}>

      </div>

      <div className={styles.leftandringh}>
        <div className={styles.opinions}>
          <div className={styles.buttons}>

            <div className={styles.comments}>

              <div className={styles.startbox}>
                <div className={styles.point}>
                  <div className={styles.ranking}>
                    <div className={styles.top}>
                      <h1>{Score()} de 5</h1>
                      <Estrella Score={average} />
                      <h3>Average Score</h3>
                    </div>
                  </div>
                  {review.map((e,i) =>  
                    <div className={styles.comment}>
                      <div className={styles.commenttop}>
                        <div className={styles.userstart}>
                          <div className={styles.photo}>
                            <img src="..\img\image 12.png" alt="perfil" />
                          </div>
                          <div className={styles.namestart}>
                            <h1>{e.tblUser.Name}</h1>
                            <div className={styles.userstarts}>
                              <Estrella Score={e.Score} />
                            </div>
                          </div>
                        </div>
                        <div className={styles.time}>
                          <FaRegClock />
                          <h4>{e.Creation_Date}</h4>
                        </div>
                      </div>
                      <div className={styles.commentbotom}><h3>{e.Comment}</h3></div>
                      <div className={styles.hrcomment}><hr /></div>
                    </div>
                  )}
                </div>
              </div>

            </div>
        </div>
        </div>
      </div>
    </div>
  )
}