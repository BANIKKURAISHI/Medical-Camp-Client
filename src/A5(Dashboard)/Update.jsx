import { useForm } from "react-hook-form";
import useAxiosPublic from "../A4(Hooks)/useAxiosPublic";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";
import { Helmet } from "react-helmet-async";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";




const Update = () => {
    const data=useLoaderData()
    const {_id,
    campName,
 
    campFees,
    scheduledDate,
    time,
    venue,
    services ,
    attendance,
    targetAudience,
    description}=data
  
    const { register, handleSubmit } = useForm();
    const axiosSecure=useAxiosSecure()
   
    const axiosPublic=useAxiosPublic()
    const imageHosting =import.meta.env.VITE_IMAGE_HOSTING
    const imageHostingApi =`https://api.imgbb.com/1/upload?key=${imageHosting}`
    const onSubmit=async(data)=>{
    //console.log(data)
   // console.log(data)
    const imageFile={image:data.image[0]}
    const MedicalCamp={
        campName:data.name,
       
        campFees:data.campFees,
        scheduledDate:data.date,
        time:data.time,
        venue:data.venue,
        services:data.services,
        attendance:data.attendance,
        targetAudience:data.audience,
        description:data.description
      }
      if(data.image.length > 0){
        const res =await axiosPublic.post(imageHostingApi,imageFile,{
            headers: {
              "content-type": "multipart/form-data",
            }
          })
          console.log(res)
          MedicalCamp.image=res.data.data.display_url
         
      }

      axiosSecure.patch(`/update-camp/${_id}`,MedicalCamp)
      .then(res=>{
        if(res.data.modifiedCount >0){
            Swal.fire({
              title: "Success!",
              text: "Your file has been updated.",
              icon: "success"
            });
          }
      })
      

    }
    return (
        <div>
            <Helmet>
            <title>Medical-Camp | Update</title>
            </Helmet>
            <div className="w-[1000px] ">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col px-6 py-8 mx-auto md:h-screen  lg:py-0">
      
          <div className="w-[1000px]  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                UPDATE YOUR CAMP
              </h1>
              <form onSubmit={handleSubmit(onSubmit)} className="w-[800px] text-2xl space-x-5 md:space-y-2" action="#">
                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Camp Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name")}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your camp name"
                    defaultValue={campName}
                  />
                
                </div>
                <div>
                  <label
                    htmlFor="Fees"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Camp Fees
                  </label>
                  <input
                    type="text"
                    name="fees"
                    {...register("campFees")}
                    id="fees"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your camp fees"
                   defaultValue={campFees}
                  />
                
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Scheduled Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    {...register("date")}
                    id="date"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your scheduled Date"
                    defaultValue={ scheduledDate}
                  />
               
                </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Scheduled Time
                  </label>
                  <input
                    type="time"
                    name="time"
                    {...register("time")}
                    id="time"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your scheduled time"
                    defaultValue={time}
                  />
                  
                </div>
    
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Specialized Services
                  </label>
                  <input
                    type="text"
                    name="services"
                    id="services"
                    {...register("services")}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={services}
                  />
                
                </div>
               

           
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Professionals in Attendance
                  </label>
                  <input
                    type="text"
                    name="attendance"
                    {...register("attendance")}
                    id="attendance"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your number"
                    defaultValue={attendance}
                  />
                 
                </div>

          
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Venue
                  </label>
                  <input
                    type="text"
                    name="venue"
                    id="venue"
                    {...register("venue")}
                    placeholder="Enter your venue"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={venue}
                  />
                 
                </div>
                
               
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Target Audience
                  </label>
                  <input
                    type="text"
                    name="audience"
                    id="audience"
                    {...register("audience")}
                   
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={targetAudience}
                  />
                  
                </div>
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                 Comprehensive Description
                  </label>
                  <input
                    type="text"
                    name="description"
                    id="description"
                    {...register("description")}
                 
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                    defaultValue={description}
                    
                  />
                 
                </div>
               

                <div className="my-3">
                <input   name="image" id="image" {...register('image')} type="file" className="file-input w-full max-w-xs" />
               
              </div>
                <button
                  type="submit"
                  className="w-full text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
                >
               Update
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div> 
        </div>
    );
};

export default Update;