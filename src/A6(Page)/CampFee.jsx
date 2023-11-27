
import useJoint from "../A4(Hooks)/useJoint";


const CampFee = () => {
    const [registration]=useJoint()
    const registrationFee =parseFloat(registration.reduce((total,item)=>total+parseFloat(item.price) ,0))
    return (
        <div>
        <div className="grid grid-cols-3 justify-evenly">
            <h1 className="text-3xl text-white my-3">Total Camp :{registration.length}</h1>
            <h1 className="text-3xl text-white my-3">Registration Fee :{registrationFee}</h1>
        
             
           
        </div>   
        </div>
    );
};

export default CampFee;