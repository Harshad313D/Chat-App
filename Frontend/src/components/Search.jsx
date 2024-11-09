import React from "react";
import { IoSearch } from "react-icons/io5";

function Search() {
  return (
    <div className=" h-[10vh]">
      <div className="px-6 py-4">
        <form action="">
          <div className="flex space-x-3 ">
            <label className=" w-[80%] p-3 border-[1px]  border-gray-700 bg-slate-900 rounded-lg flex items-center gap-2">
              <input
                type="text"
                className="grow outline-none bg-slate-900"
                placeholder="Search"
              />
            </label>
            <button>
              <IoSearch className=" text-5xl p-3 hover:bg-gray-500 rounded-full duration-300" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;