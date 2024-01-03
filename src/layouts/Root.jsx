import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Root() {
  return (
    <div className="bg-[url('https://i.postimg.cc/kMbqXh18/7788653.jpg')] bg-cover bg-sky-200 bg-center bg-no-repeat h-screen">
      <div className="max-w-6xl mx-auto bg-white">
        <Navbar/>
        <Outlet></Outlet>
      </div>
    </div>
  );
}

export default Root;
