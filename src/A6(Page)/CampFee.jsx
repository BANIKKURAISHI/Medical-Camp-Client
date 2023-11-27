
import { HiCurrencyDollar } from "react-icons/hi2";
import useJoint from "../A4(Hooks)/useJoint";


const CampFee = () => {
    const [registration]=useJoint()
    const registrationFee =parseFloat(registration.reduce((total,item)=>total+parseFloat(item.price) ,0))
    return (
        <div>
        <div className="grid grid-cols-2 ">
            <h1 className="text-3xl mx-20 text-white my-3">Total Camp :{registration.length}</h1>
            <h1 className="text-3xl flex flex-row  text-white my-3">Total Registration Fee :{registrationFee} <HiCurrencyDollar className="text-3xl ml-2 my-1" /></h1>
        
             
           
        </div>   
        </div>
    );
};

export default CampFee;