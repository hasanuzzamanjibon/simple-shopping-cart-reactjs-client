import useGetAllUsers from "../../customHook/useGetAllUsers";
import Fade from "react-reveal/Fade";
const UserManagement = () => {
  const [users, countDocuments] = useGetAllUsers();

  const tableStyle = {
    borderSpacing: "10px",
    padding: "20px",
    // Adjust the value as needed
  };
  let pageNumbers = [...Array(10).keys()].map((num) => num + 1);

  return (
    <div className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max bg-gradient-to-b from-[#fadcee] to-[#fbd5eb8c]   border-red-300  border-b-4 h-fit p-4 justify-between items-center gap-2 border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#f3a6d2]">
            <img src="https://i.postimg.cc/3Rrgn1Tf/group.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Admins:</p>
            <p className="font-semibold text-2xl">20</p>
          </div>
        </div>
        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max gap-2 bg-gradient-to-b from-[#5bedf8] to-[#5beef86a] border-sky-300  border-b-4 h-fit p-4 justify-between items-center border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#3fbec7]">
            <img src="https://i.postimg.cc/vmKPjDYd/package.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Customers:</p>
            <p className="font-semibold text-2xl">300</p>
          </div>
        </div>
        {/* 
        statistics:
        */}

        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max  border-yellow-600  bg-gradient-to-b from-[#eee7a5] to-[#eee7a56e]  border-b-4 p-4 justify-between items-center gap-2 border-2 rounded-md">
          <div className="h-16 w-16 p-3 mx-auto rounded-full bg-[#c0b450]">
            <img src="https://i.postimg.cc/bNTH2d29/employee.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Sellers:</p>
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
              <tr className="">
                <th>Sl.</th>
                <th>Name</th>
                <th>Email</th>
                <th className="hidden md:table-cell">City</th>
                <th className="hidden md:table-cell">Street</th>
                <th className="hidden md:table-cell">Contact Number</th>
                <th className="hidden md:table-cell">Website</th>
                <th className="hidden md:table-cell">Company Name</th>
              </tr>
            </thead>
            <tbody className="">
              {/* {users &&
                users?.slice(0, 10).map((user, i) => (
                  <Fade bottom key={i}>
                    <tr className="px-10 hover:!bg-gray-300 transition duration-300 cursor-pointer [&:nth-child(odd)]:bg-gray-100">
                      <td className="px-4 py-1">{i + 1}.</td>
                      <td className="px-4 py-1">{user?.name}</td>
                      <td className="px-4 py-1">{user?.email}</td>
                      <td className="px-4 py-1 ">{user?.address?.street}</td>
                      <td className="px-4 py-1 ">{user?.address?.city}</td>
                      <td className="px-4 py-1 ">{user?.phone}</td>
                      <td className="px-4 py-1 ">{user?.website}</td>
                      <td className="px-4 py-1 ">{user?.company?.name}</td>
                    </tr>
                  </Fade>
                ))} */}
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
    </div>
  );
};
export default UserManagement;
