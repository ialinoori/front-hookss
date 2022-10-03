import React, { useState } from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const sortOptions = [
  {
    label: "پر بازدید ترین",
    id: "most",
  },
  {
    label: "محبوب ترین",
    id: "popular",
  },
  {
    label: "جدید ترین  ",
    id: "newest",
  },
];

const SorBar = () => {
  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    router.push(router);
  };
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center text-gray-700  ">
      <div className="flex gap-x-2 items-center ml-4 ">
        <AdjustmentsIcon className="w-6 h-6" />
        <span className="text-gray-700">مرتب سازی:</span>
      </div>
      <ul className="flex items-center gap-x-4">
        {sortOptions.map(({ id, label }) => {
          return (
            <>
              <li
                onClick={() => sortHandler(id)}
                className={`cursor-pointer  text-gray-700 py-4 ${
                  id === sort ? "text-purple-800 font-bold" : ""
                } `}
                key={id}
              >
                {label}
              </li>
            
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default SorBar;
