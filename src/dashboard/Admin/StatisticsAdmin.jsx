

const StatisticsAdmin = () => {
  return (
    <div className="py-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2">
        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max bg-gradient-to-b from-[#fadcee] to-[#fbd5eb8c]   border-red-300  border-b-4 h-fit p-4 justify-between items-center gap-4 border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#f3a6d2]">
            <img src="https://i.postimg.cc/3Rrgn1Tf/group.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Happy Users :</p>
            <p className="font-semibold text-2xl">20</p>
          </div>
        </div>
        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max gap-4 bg-gradient-to-b from-[#5bedf8] to-[#5beef86a] border-sky-300  border-b-4 h-fit p-4 justify-between items-center border-2 rounded-md">
          <div className="h-16 w-16 mx-auto p-3 rounded-full bg-[#3fbec7]">
            <img src="https://i.postimg.cc/vmKPjDYd/package.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Total Products :</p>
            <p className="font-semibold text-2xl">300</p>
          </div>
        </div>
        {/* 
        statistics:
        */}

        {/* 
        statistics:
        */}
        <div className="flex-col flex  min-w-max  border-teal-300  bg-gradient-to-b from-[#99e0f4] to-[#99e1f471]  border-b-4 p-4 justify-between items-center gap-4 border-2 rounded-md">
          <div className="h-16 w-16 p-3 mx-auto rounded-full bg-[#4ec4e4]">
            <img src="https://i.postimg.cc/bNTH2d29/employee.png" alt="" />
          </div>
          <div className="flex flex-col items-center">
            <p className="font-semibold text-2xl">Total Seller :</p>
            <p className="font-semibold text-2xl">20</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatisticsAdmin;
