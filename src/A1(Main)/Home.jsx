import Banner from "../A2(Share)/Banner";
import Footer from "../A2(Share)/Footer";
//import Nav from "../A2(Share)/Nav";
import Navbar from "../A2(Share)/Navbar";
import BestCamps from "../A6(Page)/BestCamps";


const Home = () => {
    return (
        <div>
        
        <Navbar></Navbar>
          {/* <Nav></Nav> */}
          <Banner></Banner>
          <div className="min-h-screen">
          <BestCamps></BestCamps>
           </div>
        <div className="mb-2">
        <Footer></Footer>
        </div>
         
        </div>
    );
};

export default Home;