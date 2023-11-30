import { Helmet } from "react-helmet-async";

import Swal from "sweetalert2";
import useParticipant from "../A4(Hooks)/useParticipant";
import useAxiosSecure from "../A4(Hooks)/useAxiosSecure";




const UpdatePage = () => {

  const [participant]=useParticipant()

 
  
  const axiosSecure=useAxiosSecure()
 
  const handleSubmit=async(e)=>{
 e.preventDefault()

 const form = e.target;
 const name=form.name.value
 const number=form.number.value
 const image=form.image.value
 const preference=form.preference.value
 const area=form.area.value
 const moreEmail=form.moreEmail.value
 
  const  userInfo={name,number,image,preference,area,moreEmail}
  
   console.log(userInfo)
    
  
 



    axiosSecure.patch(`/participant/${participant.email}`, userInfo)
    .then(res=>{
      console.log(res.data)
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
            <title>Medical-Camp | Update participant Profile</title>
            </Helmet>
            <div className="w-[1000px] ">
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col px-6 py-8 mx-auto md:h-screen  lg:py-0">
      
          <div className="w-[1000px]  rounded-lg  dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Update Your Profile
              </h1>
              <form onSubmit={handleSubmit}  className="w-[800px] text-2xl space-x-5 md:space-y-2" action="#">
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
                  
                    defaultValue={participant.name}
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    
                  
                  />
                
                </div>
                <div>
                  <label
                    htmlFor="Fees"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   Phone number
                  </label>
                  <input
                    type="number"
                    name="number"
                 
                    id="number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  
                    defaultValue={participant.number}
                  />
                
                </div>
               
                <div>
                  <label
                    htmlFor="Preference"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Preference
                  </label>
                  <input
                    type="text"
                    name="preference"
                    
                    id="Preference"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                   
                    defaultValue={participant.preference}
                  />
                  
                </div>
    
                <div>
                  <label
                    htmlFor="text"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                   SPECIFIC MEDICAL AREAS
                  </label>
                  <input
                    type="text"
                    name="area"
                    id="area"
                   
                   
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    defaultValue={participant.area}
                  />
                
                </div>
               

           
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  More email
                  </label>
                  <input
                    type="text"
                    name="moreEmail"
                    
                    id="moreEmail"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                    defaultValue={participant.moreEmail}
                  />
                 </div>
                <div>
                  <label
                    htmlFor="time"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Image
                  </label>
                  <input
                    type="url"
                    name="image"
                    
                    id="image"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                
                    defaultValue={participant.photo}
                  />
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

export default UpdatePage;