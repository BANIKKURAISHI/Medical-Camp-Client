import useOrganizer from "../A5(Dashboard)/useOrganizer";


const ParticipantProfile = () => {
    const [userPost]=useOrganizer()
    console.log(userPost)
    return (
        
        <div>
            
           { userPost.post==="Participants"? <>
         {userPost.name?<h1 className="text-4xl  text-white md:mx-20 my-4">Welcome {userPost.name}</h1>:<h1 className="text-4xl md:mx-20 my-4 text-white">Welcome Back</h1> }
           <div className="flex flex-row justify-between   md:mx-20 my-4">
           <img src={userPost.photo} className="rounded-full" alt="" />
           <div className="flex-1 lg:ml-32">
            <p className="text-3xl text-white my-4">My Profile</p>
           <h1 className="text-2xl text-white">Name : {userPost.name}</h1>
           <h1 className="text-2xl text-white">Email : {userPost.email}</h1>
           <h1 className="text-2xl text-white">Role :{userPost.post}</h1>
           </div>

           </div>
           <div>
            <div className="flex flex-row">
              <h1 className="text-2xl text-white md:mx-20 my-4">Hello  {userPost.name} Do You Want Update Or Add More <br />
               Information In Your profile</h1> 
              <button className="bg-white text-black h-10 my-8 w-20 rounded-lg shadow-xl">Update</button> 
            </div>
           </div>
           
          
          
      
      </> :<h1>You are not a Participants</h1>}
    </div>
  
    );
};

export default ParticipantProfile;