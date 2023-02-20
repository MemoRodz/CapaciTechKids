import React from "react";
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"

const Estrella = (props)=>{
    
    const stars = [1, 2, 3, 4, 5];
    const score = props.Score;
  
    const starIcons = stars.map((star) => {
      if(!score){
          return <BsStar key={star} size="2rem" color='#f74634'/>;
      }
      if (star <= Math.floor(score)|| star == 1){
        return <BsStarFill key={star} size="2rem" color='#f74634'/>;
      } 
      if (star === Math.ceil(score)) {
        return <BsStarHalf key={star} size="2rem" color='#f74634'/>;
      } else{
        return <BsStar key={star} size="2rem" color='#f74634'/>;
      }
     
    })
   
    return(
        <div >{starIcons}</div>
    )
}

export default Estrella;