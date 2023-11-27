import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import useJoint from "../A4(Hooks)/useJoint";
import useAuth from "../A4(Hooks)/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

const CheckoutForm = ({value}) => {
   const {date,campName,venue,time,price }=value
    console.log(price)
    const stripe = useStripe();
  const elements= useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error,setError]=useState()
   const [id,setId]=useState()
  const axiosSecure=useAxiosSecure()
  const [registration,refetch]=useJoint()
  const {user}=useAuth()
  const navigate=useNavigate()
  





  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    if(price > 0){
    axiosSecure.post("/create-payment-intent",{price:price} )
      .then((data) => {
        console.log(data.data.clientSecret)
        setClientSecret(data?.data?.clientSecret)
    
    });}
  }, [axiosSecure,price]);



  const handleSubmit=async(e)=>{
    e.preventDefault() 
    if(!stripe || !elements){
       return
    }
    const card =elements.getElement(CardElement)
    if(card===null){
       return
    }

    const {error, paymentMethod} = await stripe.createPaymentMethod({
       type:'card',
       card,
     });

     if(error){
        console.log('Bad signal very bad !!!!!!')
      setError(error.message)
     }
    else{
       console.log('Amazing Well done !!!!!',paymentMethod,registration)
       setError(' ')
    }

const {paymentIntent,error:confirmError}=await stripe.confirmCardPayment(clientSecret,{
    payment_method:{
        card:card,
        billing_details:{
            email:user?.email ||"anonyms",
            name:user?.displayName ||"anonyms"  
        }
    }
})

if(confirmError){
    console.log('confirm error :',confirmError)
   }
   else{
    console.log('paymentIntent',paymentIntent)
    if(paymentIntent?.status==='succeeded'){
        setId(paymentIntent?.id)
       }
   }
  

const payment={
    name:user?.displayName,
    email:user?.email,
    campName:campName,
    campDate:date,
    CampTime:time,
    venue:venue,
    price:price,
    transactionId:paymentIntent.id,
    time:new Date(),
    paymentStatus:"Paid",
    status:"Confirmed"


}
console.log(payment)
const res=await axiosSecure.post('/payment',payment)

refetch()
if(res?.data?.paymentResult?.insertedId){
  Swal.fire({
    title: "Success!",
    text: "Your order has been successful.",
    icon: "success"
  });
  navigate('/dashboard/paymentHistory')
}

}



    return (
        <div className='m-32'>
        <form onSubmit={handleSubmit}>
        <CardElement
    options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#424770',
          '::placeholder': {
            color: '#aab7c4',
           
          },
        },
        invalid: {
          color: '#9e2146',
        },
      },
    }}
  />
  <button  disabled={!stripe ||!elements} >
    Pay
  </button>
  <p className='text-red-500'>{error}</p>
  {
    id &&  <p className='text-green-500'>Your transaction id {id}</p> 
  }
 
        </form>
    </div>
    );
};

CheckoutForm.propTypes={
    value:PropTypes.object
}


export default CheckoutForm;