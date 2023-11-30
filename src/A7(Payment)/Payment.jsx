import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
    const data=useLoaderData()
    return (
        <div>
           <Helmet>
        <title>Medical-Camp | Payment </title>
        </Helmet> 
           <div className='ml-5 mr-20'>
           <Elements stripe={stripePromise}  >
             <CheckoutForm value={data} />
             </Elements>
        </div>  
        </div>
    );
};

export default Payment;