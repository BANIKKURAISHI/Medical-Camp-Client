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
       
        <Navbar></Navbar>
        
          <Banner></Banner>
          <div className="min-h-screen">
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