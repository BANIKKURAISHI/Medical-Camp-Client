import useOrganizer from "../A5(Dashboard)/useOrganizer";


const ProfessionalsProfile = () => {
    const [userPost]=useOrganizer()
    console.log(userPost)
    return (
        <div>
        { userPost.post==="Healthcare Professionals"? <><img src={userPost.photo} alt="" />
        <h1>{userPost.name}</h1>
        </> :<h1>You are not a Healthcare Professionals</h1>}
        </div>
    );
};

export default ProfessionalsProfile;