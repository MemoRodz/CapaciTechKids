import { useState, useEffect } from 'react';
import { FaLock,FaLockOpen } from 'react-icons/fa';
import styles from "../Player/Player.module.css"
import ReactPlayer from 'react-player/youtube'
import {baseUrl} from '../../../models/baseUrl'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import ReviewForm from "../Review's form/review"

function Player() {

  const { id } = useParams();  
  const [actives, setActives] = useState([])
  const [index, setIndex] = useState(1)
  const [showReview, setShowReview] = useState(false);
  
    
  const handleNext = () => {
    setIndex(index + 1)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`${baseUrl}/courses/lectures/${id}`);
        const module2 = response.data.map(m => ({ ...m, isActive: false }));
        let newArr = module2.map(m => {
          if(m.NoVideo <= index){
            return {
              ...m,
              isActive: true
            }
          }
          return m
        })
        setActives(newArr)
        index === actives.length? setShowReview(true): null;
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [index])
  
  console.log(index,actives.length,showReview)  
  

  return (  
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div >
      {actives && actives.map(m => (
        <>

          <h3>{m.Title} {m.isActive ? <FaLockOpen/>: <FaLock/>}</h3>
        
        </>
      ))}       
      <button onClick={handleNext} disabled={index > actives.length}>Siguiente</button>
    </div>
    <div >
        {actives && actives.map(m => (
          <div>
            {index===m.NoVideo?(
              <ReactPlayer controls url={m.Video}/>
            ) : null}
          </div>
        ))}  
        {showReview ? (
        <ReviewForm id={id}/>
      ): null}    
      </div>
    </div>
  );
};

export default Player;