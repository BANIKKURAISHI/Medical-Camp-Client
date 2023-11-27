import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { useLoaderData } from "react-router-dom";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY);
const Payment = () => {
    const data=useLoaderData()
    return (
        <div>
            <div>
                <h1 className="text-4xl">Confirm Your Join </h1>
            </div>
           <div className='ml-5 mr-20'>
             <Elements stripe={stripePromise}  >
             <CheckoutForm value={data} />
             </Elements>
        </div>  
        </div>
    );
};

export default Payment;