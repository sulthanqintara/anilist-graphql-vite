import React from "react";
import ReactPaginate from "react-paginate";

interface Props {
  page: number;
  totalPage: number;
  handlePageClick: (e: { selected: number }) => void;
}

const Pagination: React.FC<Props> = ({ page, totalPage, handlePageClick }) => {
  return (
    <ReactPaginate
      containerClassName="flex items-center gap-2 mt-4"
      nextLabel=">"
      nextClassName="w-9 h-9 flex border rounded border-primary-700 text-primary-700 duration-200"
      nextLinkClassName="flex-1 flex items-center justify-center text-center h-full"
      previousLabel="<"
      previousClassName="w-9 h-9 flex border rounded border-primary-700 text-primary-700 duration-200"
      previousLinkClassName="flex-1 flex items-center justify-center text-center h-full"
      disabledClassName="!text-newtral-500 !border-newtral-300"
      marginPagesDisplayed={1}
      pageClassName="w-9 h-9 flex text-newtral-500 hover:text-black"
      pageLinkClassName="flex-1 flex items-center justify-center text-center h-full duration-200"
      activeLinkClassName="text-black"
      activeClassName="border rounded border-newtral-300"
      breakLabel="..."
      breakClassName=""
      breakLinkClassName=""
      pageRangeDisplayed={5}
      pageCount={totalPage}
      onPageChange={handlePageClick}
      forcePage={page - 1}
    />
  );
};

export default Pagination;
