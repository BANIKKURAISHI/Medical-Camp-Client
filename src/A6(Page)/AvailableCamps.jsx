import { Helmet } from "react-helmet-async";
import Camp from "../A1(Main)/Camp";
import Footer from "../A2(Share)/Footer";
import Navbar from "../A2(Share)/Navbar";


const AvailableCamps = () => {
    
    return (
        <div className="max-w-7xl mx-auto">
            <Helmet>
    <title>Medical-Camp | AvailableCamps </title>
    </Helmet>
            <Navbar></Navbar>
            <Camp></Camp>
            <Footer></Footer>
        </div>
    );
};

export default AvailableCamps;