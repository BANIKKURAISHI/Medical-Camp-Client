import useOrganizer from "../A5(Dashboard)/useOrganizer";


const Profile = () => {
  const [userPost]=useOrganizer()
  console.log(userPost)
  return (
    <div>

    { userPost.post==="Organizers"? <><img src={userPost.photo} alt="" />
      <h1>{userPost.name}</h1>
      
      </> :<h1>You are not a Organizers</h1>}
    </div>
  );
};

export default Profile;