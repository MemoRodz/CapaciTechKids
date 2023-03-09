import {useState,useEffect} from 'react'
import { baseUrl } from '../../models/baseUrl'
import axios from "axios";
import styles from '../Detail/Descripcion.module.css'
import { useParams } from 'react-router-dom';

function Descripcion() {
    const [course, setCourse] = useState([]);
    const {id} = useParams();
    // console.log(id, "idddddddddd");
    useEffect(() => {
        const fetchData = async () => {
          try {
            const curso = await axios.get(`${baseUrl}/courses/detail/${id}`)          
            // console.log(curso.data,"CURSSSSOOO");
            setCourse(curso.data);
            
          } catch (error) {
            console.error(error);
          }
        };
        fetchData();
      }, []);

  return (
    <div className={styles.opinions}>      
          <h2>Aprenderás</h2>
          <h4>{course.Description}</h4>          
    </div>
  )
}

export default Descripcion