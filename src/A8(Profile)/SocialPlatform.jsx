import { Link } from "react-router-dom";
import { BsFacebook, BsYoutube } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BiLogoInstagram } from "react-icons/bi";



const SocialPlatform = () => {
    return (
        <div className="flex flex-col lg:flex-row">
      {/* <div className="w-2/3 ">
        <div className="grid mx-5 grid-cols-1 lg:grid-cols-2">
          {loads.map((load) => (
            <RecentBlog key={load._id} load={load}>
             
            </RecentBlog>
          ))}
        </div>
        <div className="h-[254px]  bg-slate-700 mx-6 my-2 -mr-20 lg:mr-10">
          <FramerMotion></FramerMotion>
        </div>
      </div> */}
      
      {/* right site */}
      <div className="w-96  flex flex-col lg:my-10">
        <div className="mx-2 p-4  lg:mx-0">
        <div className="card shadow-2xl  rounded-sm ">
          <div className="mx-center">
            <h1 className="text-2xl ml-20   font-bold lg:ml-24">FOLLOW US</h1>
          </div>
          <div className="grid grid-cols-1 py-10 ml-16 mb-10 lg:grid-cols-1 gap-1 my-3">
            <Link
              to="https://www.facebook.com"
              className="w-56 text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2"
            >
              <span className="mr-4">
                <BsFacebook></BsFacebook>
              </span>
              Facebook
            </Link>
            <Link
              to="https://www.twitter.com"
              className="w-56 text-white bg-[#1da1f2] hover:bg-[#1da1f2]/90 focus:ring-4 focus:outline-none focus:ring-[#1da1f2]/50 font-medium rounded-lg text-xl px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#1da1f2]/55 me-2 mb-2 "
            >
              <span  className="mr-4">
                <AiFillTwitterCircle></AiFillTwitterCircle>
              </span>
              Twitter
            </Link>
            <Link
              to="https://www.youtube.com"
              className="w-56 text-white bg-[#050708] hover:bg-[#050708]/90 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30 me-2 mb-2"
            >
              <span  className="mr-4">
                <BsYoutube></BsYoutube>
              </span>
              Youtube
            </Link>
            <Link
              to="https://www.instagram.com "
              className="w-56 text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
            >
              <span  className="mr-4">
                <BiLogoInstagram></BiLogoInstagram>
              </span>
              Instagram
            </Link>
          </div>
        </div>
        </div>
        <div className="w-[350px] flex flex-col my-8  mx-3  lg:flex-col shadow-2xl text-center">
          {/* <h1 className="text-3xl mt-4 lg:text-4xl my-4 ">Lets Start Make A Good World </h1>
          <div className="my-5 mx-1 ml-1 mr-1 text-justify  lg:mx-16 ">
         {loads.slice(0,3).map((load) => (
            <div className="card gap-5" key={load._id} >
              <div >
              <h1>{load.title}</h1>
              <p>{load.full_description}</p>
              </div>
            
           
            </div>
            
          ))}
          <h1 className="text-end">-Mr.Rahman</h1>
          </div> */}
        </div>
        
      </div>
    

      </div>
    );
};

export default SocialPlatform;
