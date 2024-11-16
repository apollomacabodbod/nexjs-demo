
import Image from "next/image";
import StickyNavbar from "./_components/home-header-custom";
import Dashboard from "./_components/home-dashboard";
import Slider from "./_components/home-infinite.scroll";
import HomeFramer from "./_components/home-framer";


export default async function Home() {



  return (


    <>


      <div className="min-h-screen bg-slate-400 scroll-smooth">


        <p>awdwd</p>



      </div>


      <div className=" min-h-screen bg-red-300 scroll-smooth">

        <HomeFramer/>


      </div>




      <div className="min-h-screen bg-white scroll-smooth">

        <div className="flex flex-col">

          <div className="flex items-center justify-center">

            <Slider/>

          </div>

        </div>
      
      </div>
    
    
    </>
  );
}
