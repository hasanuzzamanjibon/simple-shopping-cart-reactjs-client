import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Root() {
  const location = useLocation();
  const isNavbarShowed =
    location.pathname.includes("/log-in") || location.pathname.includes("/sign-up");

  return (
    <div className="bg-[url('https://cdn.pixabay.com/photo/2021/09/23/19/08/background-6650672_1280.jpg')] bg-cover bg-fixed bg-gray-950 bg-center bg-no-repeat">
      <div className="max-w-6xl relative mx-auto bg-white">
        {!isNavbarShowed && <Navbar />}
        <div className="min-h-[calc(100vh-40px)] w-full">
          <Outlet></Outlet>
        </div>
        {!isNavbarShowed && (
          <a
            href="#"
            className="absolute h-10 bg-no-repeat bg-center bg-cover w-6 bg-[url('https://i.postimg.cc/6QRN7fsd/top-button.png')] z-50   right-4  bottom-0"
          ></a>
        )}
      </div>
    </div>
  );
}

export default Root;
