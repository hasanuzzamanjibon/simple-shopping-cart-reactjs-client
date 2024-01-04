import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Root() {
  return (
    <div className="bg-[url('https://i.postimg.cc/3RDM05gB/pxfuel.jpg')] bg-cover bg-fixed bg-sky-200 bg-center bg-no-repeat">
      <div className="max-w-6xl relative mx-auto bg-white">
        <Navbar />
        <div className="min-h-[calc(100vh-40px)]">
          <Outlet></Outlet>
        </div>
        <a
          href="#"
          className="absolute h-10 bg-no-repeat bg-center bg-cover w-6 bg-[url('https://i.postimg.cc/6QRN7fsd/top-button.png')] z-50   right-4  bottom-0"
        ></a>
      </div>
    </div>
  );
}

export default Root;
