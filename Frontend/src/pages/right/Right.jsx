import React from "react";
import ChatUser from "./ChatUser";
import Messages from "./Messages";
import Type from "./Type";

function Right() {
  return (
    <div className=" w-[70%]   text-white bg-slate-800">
      <ChatUser />
      <div
        className="py-2 flex-scrollbar overflow-y-auto"
        style={{ maxHeight: "calc(92vh - 12vh" }}
      >
        <Messages />
      </div>
      <Type />
    </div>
  );
}

export default Right;
