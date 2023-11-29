import { useForm } from "react-hook-form";

import { useLoaderData } from "react-router-dom";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import useAxiosPublic from "../A4(Hooks)/useAxiosPublic";
import Swal from "sweetalert2";




const ReviewForm = () => {
    const {_id,price,campName,campDate}=useLoaderData()
    console.log(price,campName,_id,campDate)
    const { register,handleSubmit,formState: { errors },} = useForm();
    const axiosSecure=useAxiosSecure()
   
    const axiosPublic=useAxiosPublic()
    const imageHosting =import.meta.env.VITE_IMAGE_HOSTING
    const imageHostingApi =`https://api.imgbb.com/1/upload?key=${imageHosting}`
    const onSubmit=async(data)=>{
        const imageFile ={image:data.image[0]}
        const res =await axiosPublic.post(imageHostingApi,imageFile,{
          headers: {
            "content-type": "multipart/form-data",
          }
        })
        if(res.data.success){
          const Review={
            campName:campName,
            image :res.data.data.display_url,
            price:price,
            Date:campDate,
            rating:data.rating,
            feedback:data.feedBack,
          }
          const result=await  axiosSecure.post('/feedback-and-ratings',Review)
          if(result.data.insertedId){
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Thank you for your feed back",
            showConfirmButton: false,
            timer: 1500
          });
        }
        }
        
     
    }
    return (
        <div className="bg-purple-300 min-h-screen rounded-lg shadow-2xl m-5">
         
          <section className=" dark:bg-gray-900">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Send Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-white dark:text-gray-400 sm:text-xl">Thanks !!! to send feedback about a our camp ? Need details about our camp plan? Let us know.</p>
      <form onSubmit={handleSubmit(onSubmit)}  action="#" className="space-y-8">
        <div> 
       <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" htmlFor="file_input">Upload file</label>
       <input {...register("image", { required: true })} className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" id="file_input" type="file"/>
       {errors.image && (
                    <span className="text-red-400">Image is required</span>
        )}</div>  
          <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Rating</label>
              <input {...register("rating", { required: true,max:5  })} type="number" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Give us a rating 5/5" required/>
              {errors.rating && (
                    <span className="text-red-400">Rating is required</span>
                  )}</div>  
          
        
          <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea {...register("feedBack", { required: true })} id="message" rows="6" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          
              {errors.feedBack && (
                    <span className="text-red-400">FeedBack is required</span>
                  )}
          </div>
          <button type="submit" className="py-3 px-5 bg-white shadow-xl text-sm font-medium text-center text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>  

        </div>
    );
};

export default ReviewForm;