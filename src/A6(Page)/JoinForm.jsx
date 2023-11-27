import { useForm } from "react-hook-form";
import { useLoaderData } from "react-router-dom";
import useAxiosPublic from './../A4(Hooks)/useAxiosPublic';
import Swal from "sweetalert2";
import useAuth from "../A4(Hooks)/useAuth";
import useAxiosSecure from './../A4(Hooks)/useAxiosSecure';


const JoinForm = () => {
  const {_id,campFees,campName,time, venue, scheduledDate,
    attendance}=useLoaderData()
    console.log(scheduledDate)
  const axiosPublic=useAxiosPublic()
  const axiosSecure=useAxiosSecure()

 //console.log(campFees)
 const {user}=useAuth()
 const email=user?.email
  const {
    register,
    handleSubmit,

    formState:{ errors },
  } = useForm();
  
 
  //console.log("apple");
  const onSubmit =async(data) => {
    const userInfo={
      name:data.name,
      age:data.age,
      PhnNumber:data.PhnNumber,
      gender:data.gender,
      address:data.address,
      healthInfo:data.healthInfo,
      emergencyNumber:data.emergencyNumber,
      campName:campName,
      price:campFees,
      date:scheduledDate,
      time:time,
      venue:venue,
      email:email,
      paymentStatus:"Unpaid",
      confirmStatus:"Pending",

    }
    console.log(userInfo)
   const result=await  axiosPublic.post('/registration',userInfo)
   if(result.data.insertedId){
     Swal.fire({
       position: "top-end",
       icon: "success",
       title: `${campName} has been Joined`,
       showConfirmButton: false,
       timer: 1500
     });
   }
   
   const number=parseFloat(attendance)+1
 
  
   const change={
    attendance:number.toString()
   }
   axiosSecure.patch(`update/${_id}`,
  change)
    .then(res=>console.log(res.data))
    .catch(error=>console.log(error))
   


   }
    
 

 
  return (
    <div className="max-w-7xl mx-auto ">
      <section className="bg-gray-50 dark:bg-gray-900 ">
        <div className="flex flex-col py-4 mx-auto md:h-screen  lg:px-44 ">
          <div className="w-[1000px]  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6  space-y-4 md:space-y-6 sm:p-8">
              <h1 className="px-4 text-2xl font-bold">Give your information</h1>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-[800px] text-2xl space-x-5 md:space-y-2"
                action="#"
              >
                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    {...register("name", { required: true })}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your name"
                    required=""
                  />
                  {errors.name && (
                    <span className="text-red-400"> Name is required</span>
                  )}
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your Age
                  </label>
                  <input
                    type="number"
                    name="age"
                    {...register("age", { required: true })}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your age"
                    required=""
                  />
                  {errors.age && (
                    <span className="text-red-400">Age is required</span>
                  )}
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Phone number
                  </label>
                  <input
                    type="number"
                    name="PhnNumber"
                    {...register("PhnNumber", { required: true })}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Phone-number"
                    required=""
                  />
                  {errors.PhnNumber && (
                    <span className="text-red-400">
                      Address is required
                    </span>
                  )}
                </div>
               
                <div>
                  <label
                    htmlFor="countries"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Select  your gender
                  </label>
                  <select
                    required  {...register("gender",{required: true})} 
                    id="gender"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option value="" disabled>Choose a Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                  
                   
                  </select>
                  {errors.gender && (
                    <span className="text-red-400">
                     Gender is required
                    </span>
                  )}
                </div>

                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    {...register("address", { required: true })}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Phone-number"
                    required=""
                  />
                  {errors.address && (
                    <span className="text-red-400">
                      Address is required
                    </span>
                  )}
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="healthInfo"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                 Health-related information
                  </label>
                  <input
                    type="text"
                    name="healthInfo"
                    {...register("healthInfo", { required: true })}
                    id="healthInfo"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Phone-number"
                    required=""
                  />
                  {errors.healthInfo && (
                    <span className="text-red-400">
                    Health-related information is required
                    </span>
                  )}
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Emergency contact
                  </label>
                  <input
                    type="number"
                    name="emergencyNumber"
                    {...register("emergencyNumber", { required: true })}
                    id="emergencyNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Enter your Emergency contact number"
                    required=""
                  />
                  {errors.emergencyNumber && (
                    <span className="text-red-400">
                      Emergency Number is required
                    </span>
                  )}
                </div>
                <div className="ml-4">
                  <label
                    htmlFor="price"
                    className="block text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Camp Price
                  </label>
                  <input
                    type="number"
                    name='price'
                    
                    {...register("price")}
                    id="price"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={campFees}
                    disabled
                  />
                 
                </div>







                <button>Add </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default JoinForm;
