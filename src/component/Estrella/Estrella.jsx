import React from "react";
import {AiOutlineStar,AiFillStar} from "react-icons/ai"

const Estrella = (props)=>{
    return(
        <div >
            {
                [...new Array(5)].map((star,index)=>{
                    return index < props.score ? <AiFillStar size='2rem'  color='#f74634' /> : <AiOutlineStar size='2rem'  color='#f74634'/>
                })
            }
        </div>
    )
}

export default Estrella;