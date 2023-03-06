import React, { useState, useEffect } from "react";
import styles from "./EditCourse.module.css";
import { useParams, Link } from "react-router-dom";
import { FaBahai, FaCamera, FaFileAlt, FaChartBar, FaTwitter, FaFacebookF, FaYoutube, FaInstagram, FaTelegramPlane, FaWhatsapp, FaRegClock, FaThLarge } from "react-icons/fa";
import axios from "axios";
import Estrella from '../../component/Estrella/Estrella'
import {baseUrl} from '../../models/baseUrl'

export default function EditCourse() {
  
    const { id } = useParams();
    const [course, setCourse] = useState([]);
    const [review, setReview] = useState([]);
    const [related, setRelated] = useState([])
    const [relatedLoaded, setRelatedLoaded] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const curso = await axios.get(`${baseUrl}/courses/detail/${id}`)
            const reviews = await axios.get(`${baseUrl}/reviews/related/${id}`)
            const rela = await axios.get(`${baseUrl}/categories/co/${id}`)
            setCourse(curso.data);
            setReview(reviews.data);
            setRelated(rela.data)
            setRelatedLoaded(true);
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

    
      function Score() {

        const score = course.Score / 2
    
        console.log("---> SCORE", score)
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


  return (
    

        <div className={styles.container}>
            
      <div className={styles.heard}>
        <img src="https://res.cloudinary.com/dbbmgnhqf/image/upload/v1677262061/CAPACITECHKIDS/images/project/ca3_ixldy5.jpg" alt="{course.Title}" />
      </div>
      <div className={styles.detail}>
        <img src={course.Image} alt="{course.Title}" />
        
        <form>
  <label for="title">Title:</label>
  <textarea id="title" name="title" rows="1" cols="50" defaultValue={course.Title}></textarea>
  <label for="description">Description:</label>
  <textarea id="description" name="description" rows="10" cols="50" defaultValue={course.Description}></textarea>
    <hr />
    <button>EDITAR CURSO</button>
</form>


      </div>
      
    </div>
    
   ) 
}