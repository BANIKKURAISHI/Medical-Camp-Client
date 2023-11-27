import useJoint from "../A4(Hooks)/useJoint";


const CampFee = () => {
    const [registration]=useJoint()
    const registrationFee =parseFloat(registration.reduce((total,camp)=>total+camp.price,0))
    return (
        <div>
        <div>
            <h1>{registration.length}</h1>
            <h1>{registrationFee}</h1>
        
           {registration.length?"":"This is "} 
           
        </div>   
        </div>
    );
};

export default CampFee;