import { useState, useEffect } from 'react';
import { FaLock,FaLockOpen } from 'react-icons/fa';
import styles from "../Player/Player.module.css"
import ReactPlayer from 'react-player/youtube'
import {baseUrl} from '../../../models/baseUrl'
import {useParams} from 'react-router-dom'
import axios from 'axios';

function Player() {

  const { id } = useParams();  
  const [actives, setActives] = useState([])
  const [index, setIndex] = useState(1)
 
  // const modules = [
  //   { id: 1, title: 'Module 1', videoUrl: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' },
  //   { id: 2, title: 'Module 2', videoUrl: 'https://www.youtube.com/watch?v=2Z4m4lnjxkY' },
  //   { id: 3, title: 'Module 3', videoUrl: 'https://www.youtube.com/watch?v=9Deg7VrpHbM' },
  // ];
  // const module2 = modules.map(m => ({ ...m, isActive: false }))
 
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
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, [id,index])
  
  

  return (  
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      
      <div >
      {actives && actives.map(m => (
        <>

          <h3>{m.Title} {m.isActive ? <FaLockOpen/>: <FaLock/>}</h3>
        
        </>
      ))}       
      <button onClick={handleNext} disabled={index > actives.length-1}>Siguiente</button>
    </div>
    <div >
        {actives && actives.map(m => (
          <div>
            {index===m.NoVideo?(
              <ReactPlayer controls url={m.Video}/>
            ) : null}
       
          </div>
        ))}      
      </div>
    </div>
  );
};

export default Player;