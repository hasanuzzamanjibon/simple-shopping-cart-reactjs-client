import { MdOutlineDeleteForever } from "react-icons/md";
import useGetDataByEmail from "../../customHook/useGetDataByEmail";
import Fade from "react-reveal/Fade";
const MyProducts = () => {
  const [myProducts, refetch] = useGetDataByEmail();
  console.log(myProducts);
  const tableStyle = {
    borderSpacing: "10px",
    padding: "20px",
    // Adjust the value as needed
  };

  let pageNumbers = [...Array(10).keys()].map((num) => num + 1);

  return (
    <div className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        <div className="flex-col flex  min-w-max bg-gradient-to-b from-[#fadcee] to-[#fbd5eb8c]   border-red-300  border-b-4 h-fit p-4 justify-between items-center gap-4 border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#f3a6d2]">
            <img src="https://i.postimg.cc/3Rrgn1Tf/group.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Total Products :</p>
            <p className="font-semibold text-2xl">20</p>
          </div>
        </div>

        <div className="flex-col flex  min-w-max gap-4 bg-gradient-to-b from-[#5bedf8] to-[#5beef86a] border-sky-300  border-b-4 h-fit p-4 justify-between items-center border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#3fbec7]">
            <img src="https://i.postimg.cc/vmKPjDYd/package.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Accepted Products :</p>
            <p className="font-semibold text-2xl">300</p>
          </div>
        </div>

        <div className="flex-col flex  min-w-max  border-teal-300  bg-gradient-to-b from-[#99e0f4] to-[#99e1f471]  border-b-4 p-4 justify-between items-center gap-4 border-2 rounded-md">
          <div className="h-16 w-16 p-3 mx-auto rounded-full bg-[#4ec4e4]">
            <img src="https://i.postimg.cc/bNTH2d29/employee.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Deny Products:</p>
            <p className="font-semibold text-2xl">20</p>
          </div>
        </div>
      </div>
      <div className="py-4 mt-8 ">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 px-4">
          <div className="space-x-1 min-w-max ">
            <span>Show </span>
            <select className="bg-gray-200 rounded-sm focus:outline-0" name="items" id="items">
              <option value="15">10</option>
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            <span>entries</span>
          </div>
          <div className="space-x-1 min-w-max ">
            <span>Search:</span>
            <input type="search" className="bg-gray-200 focus:outline-0 px-3 py-1 rounded-sm" />
          </div>
        </div>
        <div className=" overflow-x-auto mt-10  h-fit  w-full relative rounded-md ">
          <table style={tableStyle} className="w-full  whitespace-nowrap px-4 ">
            <thead>
              <tr>
                <th>Sl.</th>
                <th>Image</th>
                <th>Title</th>
                <th>Category</th>
                <th>Price - {"$"}</th>
                <th>Available for Sales</th>
                <th>Total Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody className="">
              {myProducts &&
                myProducts?.map((product, i) => (
                  <Fade bottom key={i}>
                    <tr className="px-10 text-center hover:!bg-gray-300 transition duration-300 cursor-pointer [&:nth-child(odd)]:bg-gray-100">
                      <td className="px-4 py-1">{i + 1}.</td>
                      <td className="px-4 py-1">
                        <img className="h-8 w-8 mx-auto rounded-lg" src={product?.image} alt="" />
                      </td>
                      <td className="px-4 py-1">{product?.title.slice(0, 20)}...</td>
                      <td className="px-4 py-1">{product?.category}</td>
                      <td className="px-4 py-1">{product?.price}</td>
                      <td className="px-4 py-1">{product?.rating.count}</td>
                      <td className="px-4 py-1">0</td>
                      <td className="px-4 py-1">
                        <MdOutlineDeleteForever className="mx-auto cursor-pointer text-red-800 text-2xl font-bold" />
                      </td>
                    </tr>
                  </Fade>
                ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex flex-col xl:flex-row items-center justify-between gap-4 px-4">
          <div>
            <span>Showing 1 to 10 of 57 entries</span>
          </div>
          <div className=" flex flex-wrap items-center justify-center gap-2">
            <button className="btn btn-sm ">&lt;&lt; Prev</button>
            {pageNumbers?.map((number, i) => (
              <button className="btn btn-sm " key={i}>
                {number}
              </button>
            ))}
            <button className="btn btn-sm ">Next &gt;&gt;</button>
          </div>
        </div>
      </div>

      {/* 
    
    
    
    
    
    
    
    
    
    */}
    </div>
  );
};

export default MyProducts;
