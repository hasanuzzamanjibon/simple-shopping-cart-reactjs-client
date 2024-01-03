import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar";

function Root() {
  return (
    <div className="bg-[url('https://i.postimg.cc/kMbqXh18/7788653.jpg')] bg-cover bg-fixed bg-sky-200 bg-center bg-no-repeat">
      <div className="max-w-6xl mx-auto bg-white">
        <Navbar />
        <div className="min-h-[calc(100vh-40px)]">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
}

export default Root;
