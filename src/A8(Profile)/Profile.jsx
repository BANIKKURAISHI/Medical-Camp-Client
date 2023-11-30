
import { Link } from "react-router-dom";
import useOrganizer from "../A5(Dashboard)/useOrganizer";
import useAuth from "../A4(Hooks)/useAuth";
import { Helmet } from "react-helmet-async";


const Profile = () => {
  const [userPost]=useOrganizer()
  const {user}=useAuth()

  console.log(userPost)
  return (
    <div>
       <Helmet>
        <title>Medical-Camp | Organizer Profile </title>
        </Helmet>

    { userPost.post==="Organizers"? <>

    {userPost.name?<h1 className="text-4xl  text-white md:mx-20 my-4">Welcome {userPost.name}</h1>:<h1 className="text-4xl md:mx-20 my-4 text-white">Welcome Back</h1> }
           <div className="flex flex-row justify-between   md:mx-20 my-4">
           <img src={user?.photoURL} className="w-72 h-72 my-5 rounded-full" alt="" />
           <div className="flex-1 lg:ml-32">
            <p className="text-3xl text-white my-4">My Profile</p>
           <h1 className="text-2xl text-white">Name : {userPost.name}</h1>
           <h1 className="text-2xl text-white">Email : {userPost.email}</h1>
           <h1 className="text-2xl text-white">Role : {userPost.post}</h1>
           <h1 className="text-2xl text-white">Contract : {userPost.number}</h1>
           <h1 className="text-2xl text-white">Extra email : {userPost.moreEmail}</h1>
           <h1 className="text-2xl text-white">Preference : {userPost.preference}</h1>
          
           </div>

           </div>
           <div>
            <div className="flex flex-row">
              <img src={userPost.img} alt="" />
              <h1 className="text-2xl text-white md:mx-20 my-4">Hello  {userPost.name} Do You Want Update Or Add More <br />
              Information In Your profile</h1> 
              <Link to={`/dashboard/UpdateProfileOrganize/${userPost._id}`}><button  className="bg-white text-black h-10 my-8 w-20 rounded-lg shadow-xl">Update</button></Link> 
     </div>
     <h1>Success full story</h1>
     <p >{userPost.story}</p>
     <img className="w-[750px] h-80 mb-5 mx-20"  src={userPost.photo} alt="" />

           </div>
           

      </> :<h1>You are not a Organizers</h1>}
    </div>
  );
};

export default Profile;