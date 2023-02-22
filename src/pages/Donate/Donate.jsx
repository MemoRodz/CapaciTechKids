import React from "react";
import {IoCafeSharp} from 'react-icons/io5'

function Donate() {
  return (
          
      <div >
        <div className="cont">
          <div className="left_container">           
           <h2>¿Quieres ser parte del cambio? Con tu aporte contribuye a brindar educación de calidad con gran impacto en el mercado laboral a las niñas, niños y jóvenes que se encuentran en condición de vulnerabilidad en todo Latinoamerica.</h2>
           <br/>
           
            <div action="https://www.sandbox.paypal.com/donate" method="post" target="_top" >
              <input type="hidden" name="hosted_button_id" value="TDUZZP2HVFPSG" />
              <input type="image" src="https://www.pngall.com/wp-content/uploads/11/Donate-Button-PNG-Image.png" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button"/>
              <img alt="" border="0" src="https://www.sandbox.paypal.com/en_PE/i/scr/pixel.gif" width="1" height="1" />
            </div>
            <h2>Mejore las habilidades de las futuras generaciones</h2>
          </div>        

          <div className="right_container">
            <h1> Si deseas comentanos tu caso, agendando una cita con nosotros</h1>
            <IoCafeSharp size="2rem" color="#36b37e"/>  
            <a href="">Agenda una Cita</a>   
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