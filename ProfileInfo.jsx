import React from "react";

const ProfileInfo = () => {
  return (
    <>
      <body className="bg-[#F3F2F0]">
        <div className=" w-[100%]  flex flex-col justify-center px-6 gap-2 sm:px-20 lg:px-40 py-6 sm:py-10">
          <img
            src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"
            className="w-[160px]"
            alt=""
          />
          <div className="lg:w-[100%]  flex flex-col gap-1 bg-white p-4 rounded-md">
            <p className="font-semibold text-2xl">SAHIL KAMBLE</p>
            <p className="text-base ">
              Indian institute of technology, Roorkee
            </p>
            <p className="text-stone-600 text-xm font-thin">
              Kolhapur, Maharashtra
            </p>
          </div>
          <div className=" bg-white p-4 lg:w-[100%] h-fit rounded-md w-[100%]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestiae,
            quae. Laborum vero facilis ad illum unde consectetur praesentium
            reprehenderit similique dolorum, pariatur maiores cumque quam aut
            laboriosam, ipsam sint quos a vel eius officia labore itaque
            impedit. Impedit consequuntur quod ducimus saepe iusto minus dicta
            dignissimos unde architecto nisi doloremque, soluta iste iure quis
            aliquid expedita fugit reprehenderit sint. Natus architecto dolores
            molestiae ullam, beatae voluptas sunt eius harum, dignissimos alias
            quos ratione amet. Architecto facilis praesentium odit quas
            expedita?
          </div>
          <div className="p-4 rounded-md bg-white lg:w-[100%] h-fit w-[100%]">
            <p>Total uploaded files: 12</p>
            <p>Rating: 4.5</p>
          </div>
          <button className="mt-10 h-[40px] w-[30%] sm:w-[20%] lg:w-[15%] lg:text- bg-[#0a66c2] lg:text-sm sm:text-sm text-white text-xs rounded-sm px-2 py-1">
            Log Out
          </button>
        </div>
      </body>
    </>
  );
};

export default ProfileInfo;
