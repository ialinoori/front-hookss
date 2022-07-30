import React from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";

const SorBar = () => {
  return (
    <div className="bg-white rounded-3xl px-4 flex items-center text-gray-700  ">
      <div className="flex gap-x-2 items-center ml-4 ">
        <AdjustmentsIcon className="w-6 h-6" />
        <span className="text-gray-700">مرتب سازی:</span>
      </div>
      <ul className="flex items-center gap-x-4">
        <li className="cursor-pointer text-gray-700 py-4">پر بازدید ترین</li>
        <li className="cursor-pointer text-gray-700 py-4">محبوب ترین</li>
        <li className="cursor-pointer text-gray-700 py-4">جدید ترین</li>
      </ul>
    </div>
  );
};

export default SorBar;
