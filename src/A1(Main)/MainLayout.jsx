import { Outlet } from "react-router-dom";
import { Helmet } from "react-helmet-async";
const MainLayout = () => {
    return (
        <div>
             <Helmet>
                <title>Medical Camp | Home</title>
            </Helmet>
        <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;