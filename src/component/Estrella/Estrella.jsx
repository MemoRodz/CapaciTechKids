import React from "react";
import {BsStarFill,BsStarHalf,BsStar} from "react-icons/bs"

const Estrella = (props)=>{
    
    const stars = [1, 2, 3, 4, 5];
    const score = props.Score;
   
    const starIcons = stars.map((star) => {
      if(!score){
          return <BsStar key={star} size="1.5rem" color="#F2B705"/>;
      }
      if (star === Math.ceil(score)) {
        return <BsStarHalf key={star} size="1.5rem" color="#F2B705"/>;
      } 
      if (star <= Math.floor(score)|| star == 1){
        return <BsStarFill key={star} size="1.5rem" color="#F2B705"/>;
      } 
else{
        return <BsStar key={star} size="1.5rem" color="#F2B705"/>;
      }
     
    })
   
    return(
        <div >{starIcons}</div>
    )
}

export default Estrella;