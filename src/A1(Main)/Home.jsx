import { Helmet } from "react-helmet-async";
import Banner from "../A2(Share)/Banner";
import Footer from "../A2(Share)/Footer";

import Navbar from "../A2(Share)/Navbar";
import Team from "../A6(Page)/Team";
import Feedback from "../A8(Profile)/Feedback";

//import Nav from "../A2(Share)/Nav";
import BestCamps from './../A6(Page)/BestCamps';




const Home = () => {
    return (
        <div>
           <Helmet>
        <title>Medical-Camp | Home </title>
        </Helmet>
       
        <Navbar></Navbar>
        
          <Banner></Banner>
          <div className="min-h-screen">
            <div className="max-w-7xl mx-auto mt-4">
            <h1 className="text-4xl ">Popular Camp </h1>  
            </div>
          
          <BestCamps></BestCamps>
           </div>
        <div className="mb-2">
        <Feedback></Feedback>
        <Team></Team>
        <Footer></Footer>
        </div>
         
        </div>
    );
};

export default Home;