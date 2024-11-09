import React from "react";
import Search from "../../components/Search";
import User from "../../components/Users";

function Left() {
  return (
    <div className=" w-[30%]  text-white bg-slate-900 ">
      <h1 className="font-bold text-3xl p-2 px-6 ">Chats</h1>
      <Search />
      <hr />
      <User />
    </div>
  );
}

export default Left;
