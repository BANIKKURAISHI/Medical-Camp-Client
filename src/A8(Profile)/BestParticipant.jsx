import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from './../A4(Hooks)/useAxiosSecure';


const BestParticipant = () => {
    const axiosSecure=useAxiosSecure()
    const {data:participants=[]}=useQuery({
        queryKey:['participant'],
        queryFn:async()=>{
            const res=await  axiosSecure.get('/participant')
            return res.data
        }
    })
    return (
        <div>
            <div className="grid grid-cols-1 gap-4">
                <h1>Our previous Best participants</h1>
                {
                    participants.map(participant=>
                        <div key={participant._id} className="py-1">
                             <div>
                        <img className="w-40 h-40 rounded-full lg:ml-20" src={participant.image} alt="" />
                        </div>
                        <h1 className="text-2xl font-bold my-1">{participant.name} </h1>
                        <h1 className="fond-bold">Age : {participant.age} </h1>
                        <h1 className="fond-bold">{participant.address} </h1>
                        </div>
                       
                        )
                }
            </div>
        </div>
    );
};

export default BestParticipant;


// [
//     {
//       "name": "John Doe",
//       "image": "https://i.ibb.co/YXFj3Rg/istockphoto-685132245-612x612.jpg",
//       "age": 30,
//       "address": "123 Main Street, Cityville"
//     },
//     {
//       "name": "Jane Smith",
//       "image": "https://i.ibb.co/BGsNzk2/istockphoto-1310209956-612x612.jpg",
//       "age": 35,
//       "address": "456 Elm Avenue, Townsville"
//     },
//     {
//       "name": "Johnson",
//       "image": "https://i.ibb.co/m6p2Tgc/istockphoto-495827884-612x612.jpg",
//       "age": 27,
//       "address": "789 Oak Lane, Villagetown"
//     },
//     {
//       "name": "Alice Brown",
//       "image": "https://i.ibb.co/Fw5X2gF/mens-club-outfits-1.jpg",
//       "age": 28,
//       "address": "987 Pine Road, Hamletsville"
//     },
//     {
//       "name": "David Wilson",
//       "image": "https://i.ibb.co/kX4f1QB/360-F-377301660-Clhy-VNc3-Thq-Sh-Ljkfk7zq0-Se-Cenc4xb7.jpg",
//       "age": 35,
//       "address": "654 Birch Street, Countryside"
//     },
//     {
//       "name": "Eva Garcia",
//       "image": "https://i.ibb.co/2YKcfr4/Chloe-Grace-Moretz.jpg",
//       "age": 32,
//       "address": "321 Cedar Court, Riverside"
//     }
//   ]