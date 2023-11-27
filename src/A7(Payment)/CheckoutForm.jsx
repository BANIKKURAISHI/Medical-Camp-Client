import {CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import useJoint from "../A4(Hooks)/useJoint";
import useAuth from "../A4(Hooks)/useAuth";
import Swal from "sweetalert2";

import PropTypes from 'prop-types';

const CheckoutForm = ({value}) => {
   const {date,campName,venue,time,price,_id}=value
    console.log(price)
    const stripe = useStripe();
  const elements= useElements();
  const [clientSecret, setClientSecret] = useState("");
  const [error,setError]=useState()
   const [id,setId]=useState()
  const axiosSecure=useAxiosSecure()
  const [registration,refetch]=useJoint()
  const {user}=useAuth()
  
  





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

const updateStatus={
    paymentStatus:"Paid",
    confirmStatus:"Confirmed"
}
const resUp=await axiosSecure.patch(`/updateCamp/${_id}`,updateStatus)
console.log(resUp)
//console.log(payment)
const res=await axiosSecure.post('/payment',payment)
console.log('payment save ',res.data)
refetch()
if(res?.data?.paymentResult?.insertedId){
  Swal.fire({
    title: "Success!",
    text: "Your order has been successful.",
    icon: "success"
  });
 
}

}



    return (
        <div className='m-32  border-2 border-white  h-60'>
            <p className="mx-9 my-3 text-2xl text-white">Make a safe payment</p>
        <form className="my-7 px-10 py-7" onSubmit={handleSubmit}>
        <CardElement
    options={{
      style: {
        base: {
          fontSize: '16px',
          color: '#fff',
          '::placeholder': {
            color: '#fff',
           
          },
        },
        invalid: {
          color: '#FF0000',
        },
      },
    }}
  />
   
   

  <button className="text-2xl text-white my-5" disabled={!stripe ||!elements}  >
  Payment
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