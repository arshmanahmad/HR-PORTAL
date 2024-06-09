import React, { useEffect, useState, ChangeEvent } from "react";
import arrow_right from "./arrow_right.png";

interface PaginationProps {
  noOfTotalRecords: number;
  noOfRecordsPerPage: number;
  setNoOfRecordsPerPage: (num: number) => void;
  setCurrentPage: (page: number) => void;
  currentPage: number;
}

const Pagination: React.FC<PaginationProps> = ({
  noOfTotalRecords = 0,
  noOfRecordsPerPage,
  setNoOfRecordsPerPage,
  setCurrentPage,
  currentPage,
}) => {
  const [pagination, setPagination] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState<number>(0);

  useEffect(() => {
    const noOfPages = Math.ceil(noOfTotalRecords / noOfRecordsPerPage) || 1;

    const tempPagination: number[] = [];
    for (let i = 1; i <= noOfPages; i++) {
      tempPagination.push(i);
    }

    setTotalPages(noOfPages);
    setPagination(tempPagination);
  }, [noOfRecordsPerPage, noOfTotalRecords]);

  const onPrevious = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const onNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="flex gap-5 justify-between px-5 py-3 items-center ">
      <div className="flex text-[#6B7280] font-[500] text-[16px]">
        <p className="">Show </p>
        <select
          name=""
          id=""
          className="flex justify-between px-[5px] border border-[#DCDCDC] rounded-md mx-3 bg-[#f5f5f5] text-[#717171]"
          onChange={(e: ChangeEvent<HTMLSelectElement>) =>
            setNoOfRecordsPerPage(parseInt(e.target.value))
          }
          value={noOfRecordsPerPage}
        >
          <option value="10">10</option>
          <option value="20">20</option>
          <option value="30">30</option>
          <option value="40">40</option>
          <option value="50">50</option>
        </select>
        <p className="text-[#717171] ">{` of  ${noOfTotalRecords} entries`}</p>
      </div>
      <div className="flex items-center justify-center">
        <div
          onClick={onPrevious}
          className="flex items-center justify-center p-[10px]  h-[40px] w-[40px] bg-[white] border border-[#E6E6E6] cursor-pointer rounded-tl-[9px] rounded-bl-[9px] "
        >
          <img
            className={`transform rotate-180 ${currentPage === 1 ? "opacity-40 " : ""
              }`}
            src={arrow_right}
            alt=""
          />
        </div>
        {pagination.map((item, index) => (
          <span
            key={index}
            onClick={() => {
              setCurrentPage(item);
            }}
            className={`flex items-center justify-center p-[10px]  h-[40px] w-[40px] bg-[white] border border-[#E6E6E6] cursor-pointer border-l-0 ${currentPage === index + 1 ? "bg-secondary" : ""
              }`}
          >
            {item}
          </span>
        ))}
        <div
          onClick={onNext}
          className="flex items-center justify-center p-[10px]  h-[40px] w-[40px] bg-[white] border border-[#E6E6E6] cursor-pointer rounded-tr-[9px] rounded-br-[9px] border-l-0"
        >
          <img
            className={`cursor-pointer  ${currentPage === totalPages ? "opacity-40 " : ""
              }`}
            src={arrow_right}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Pagination;
