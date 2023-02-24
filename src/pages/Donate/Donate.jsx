import React from "react";
import { InlineWidget } from "react-calendly";
import styles from "./Donate.module.css";

function Donate() {
  return (
          
      <div className={styles.general_container} >
        <div className={styles.cont}>
          <div className={styles.left_container}>           
           <h2>¿Quieres ser parte del cambio? Con tu aporte generas una contribución para brindar educación de calidad con gran impacto en el la futura salida laboral de las niñas, niños y jóvenes que se encuentran en condición de vulnerabilidad en todo Latinoamerica.</h2>
           <br/>
           <form action="https://www.sandbox.paypal.com/donate" method="post" target="_top">
              <input type="hidden" name="hosted_button_id" value="8SK456HG7DS6E" />
              <input type="image" src="https://static.wixstatic.com/media/fc8b62_fcf3ab6295a1433b9a3598c641b8c8c3~mv2.png/v1/fill/w_500,h_500,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Donar.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
              <img alt="" border="0" src="https://www.sandbox.paypal.com/en_PE/i/scr/pixel.gif" width="1" height="1" />
           </form>

            <h2>Ayuda a mejorar las habilidades de las futuras generaciones</h2>
          </div>        

          <div className={styles.right_container}>
            <h2> Si deseas comentarnos tu caso, agenda una cita con nosotros</h2>
            <div >              
              <InlineWidget url="https://calendly.com/capacitechkids/30min" style="min-width:320px;height:750px;"/>
            </div>
         </div>
        </div>
      </div>
    
  );
}

export default Donate;


// import { loadStripe } from "@stripe/stripe-js";
// import {
//   Elements,
//   CardElement,
//   useStripe,
//   useElements,
// } from "@stripe/react-stripe-js";

// import axios from "axios";

// const stripePromise = loadStripe("pk_test_51Me5d3JNDCh84PbthDWekjpKBRvqxc6DhwDZQnzgVM0NiGseIxWgIfoFlGjGcAzfgXhHViOBsaN2ZQnuL6kERigc0008WwkbSo");

// const CheckoutForm = () => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [loading, setLoading] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: "card",
//       card: elements.getElement(CardElement),
//     });
//     setLoading(true);

//     if (!error) {
//       // console.log(paymentMethod)
//       const { id } = paymentMethod;
//       try {
//         const { data } = await axios.post(
//           "http://localhost:3001/api/checkout",
//           {
//             id,
//             amount: 10000, //cents
//           }
//         );
//         console.log(data);

//         elements.getElement(CardElement).clear();
        
//       } catch (error) {
//         console.log(error);
//       }
//       setLoading(false);
//     }
//   };

//   console.log(!stripe || loading);

//   return (
//     <form onSubmit={handleSubmit}>
//       {/* Product Information */}
//       <img
//         src="https://png.pngtree.com/element_our/png_detail/20181228/donation-vector-icon-png_296045.jpg"
//         alt="Donate"
//       />

//       <h3 className="" >Donate: 1$</h3>

//       {/* User Card Input */}
//       <div className="form-group">
//         <CardElement />
//       </div>

//       <button disabled={!stripe} >
//         {loading ? (
//           <div  role="status">
//             <span >Loading...</span>
//           </div>
//         ) : (
//           "Buy"
//         )}
//       </button>
//     </form>
//   );
// };



// function Donate() {
//   return (
   
//     <h1>Donation page</h1>
//     <h3>Thanks for your donations.</h3>
//     <p>Donations are used to pay for the server costs and to keep the site running.</p>

//     <div> SIGNIFICATIVO </div>

//     <button>DONATE</button>
//     <Elements stripe={stripePromise}>
//       <div className="container p-4">
//         <div className="row h-100">
//           <div className="col-md-4 offset-md-4 h-100">
//             <CheckoutForm />
//           </div>
//         </div>
//       </div>
//     </Elements>
    
//   );
// }

// export default Donate