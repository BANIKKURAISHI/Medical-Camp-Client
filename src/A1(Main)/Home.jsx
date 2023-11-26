import Banner from "../A2(Share)/Banner";
import Footer from "../A2(Share)/Footer";
import Navbar from "../A2(Share)/Navbar";
import Camp from "./Camp";

const Home = () => {
    return (
        <div>
        
          <Navbar></Navbar>
          <Banner></Banner>
          <div className="min-h-screen">
           <Camp></Camp>
           </div>
        <div className="mb-2">
        <Footer></Footer>
        </div>
         
        </div>
    );
};

export default Home;