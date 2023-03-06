import React from "react";
import { InlineWidget } from "react-calendly";
import BuyButtonComponent from "./BuyButtonComponent";
import styles from "./Donate.module.css";


const donateLink = "https://donate.stripe.com/test_00g7tO8Sxf6J5iMbIK"
function Donate() {
  return (
          
      <div className={styles.general_container} >
        <div className={styles.cont}>
          <div className={styles.left_container}>
            <h1>¿Quieres ser parte del cambio?</h1>          
           <h2>Con tu aporte generas una contribución para brindar educación de calidad con gran impacto en la futura salida laboral de niños y jóvenes que se encuentran en condición de vulnerabilidad en todo Latinoamérica.</h2>
           <br/>          
           <br />
           <div className={styles.donar}>
            <BuyButtonComponent />            
            </div>        
            <br />
            <br />
            <h2>Ayuda a mejorar las habilidades de las futuras generaciones</h2>
          </div>        

          <div className={styles.right_container}>
            <h1> Si deseas comentarnos tu caso, agenda una cita con nosotros</h1>
            
          <InlineWidget url="https://calendly.com/capacitechkids/30min" style="min-width:320px;height:750px;overflow:hidden;"/>
         </div>
        </div>
      </div>
    
  );
}

export default Donate;