import React from "react";
import notFoundImage from "../../assets/images/notFound.svg";

const PageNotFound: React.FC = () => {
  return (
    <div className="min-h-screen w-[100%] flex flex-col justify-center px-0  items-center text-center py-20 dark:bg-slate-900">
      <div className="w-full h-full flex items-center flex-col">
        <div
          className="bg-contain bg-center bg-no-repeat  w-[60%] h-[400px] m-0"
          style={{ backgroundImage: `url(${notFoundImage})` }}
        ></div>
        <div className="max-w-[546px] mx-auto w-full mt-12">
          <h4 className="text-slate-900 text-[2rem] mb-4">Page not found</h4>
          <div className="dark:text-white text-base font-normal mb-10">
            The page you are looking for might have been removed had its name
            changed or is temporarily unavailable.
          </div>
        </div>
        <div className="max-w-[300px] mx-auto w-full">
          <div
            style={{ cursor: "pointer" }}
            className=" text-[1rem] font-[500] btn bg-white hover:bg-opacity-75 transition-all duration-150 block text-center"
          >
            Go to homepage
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageNotFound;
