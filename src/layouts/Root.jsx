import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Root() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <div className="bg-[url('https://i.postimg.cc/3RDM05gB/pxfuel.jpg')] bg-cover bg-fixed bg-sky-200 bg-center bg-no-repeat">
      <div className="max-w-6xl relative mx-auto bg-white">
        <Navbar />
        <div className="min-h-[calc(100vh-40px)]">
          <Outlet></Outlet>
        </div>
        <button
          onClick={scrollToTop}
          className="absolute h-16 bg-no-repeat bg-center bg-cover w-10 bg-[url('https://i.postimg.cc/6QRN7fsd/top-button.png')] z-50   right-4  bottom-0"
        ></button>
      </div>
    </div>
  );
}

export default Root;
