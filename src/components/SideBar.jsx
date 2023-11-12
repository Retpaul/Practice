import React from "react";

const DUMMY_NAV = ["Students", "Teachers", "News", "Time Table"];
export default function SideBar({onClose}) {
  return (
    <aside className=" flex flex-col justify-between bg-stone-900 w-1/3 text-stone-50 px-8 py-16 md:w-72 rounded-r-xl">
      <div>
        {" "}
        <h2 className="mb-16 font-bold uppercase md:text-xl text-stone-20">
          Dashboard
        </h2>
        <ul className="">
          {DUMMY_NAV.map((item) => {
            return (
              <li key={item}>
                <button onClick={onClose} className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800">
                  {item}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="border-t-2 border-t-stone-200 pt-5 text-left">
        <button  className="w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-red-500">LogOut</button>
      </div>
    </aside>
  );
}
