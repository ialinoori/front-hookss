import React from 'react';
import Link from "next/link";

const MobileCateory = ({postCategories}) => {
    return (
        <div className="flex md:hidden gap-x-4 overflow-auto pb-5 ">
        {postCategories.map((category) => {
          return (
            <Link href={`/blogs/${category.englishTitle}`}>
              <a
                className="block text-xs border-black-400 whitespace-nowrap bg-white rounded-3xl px-3 py-1 text-gray-400 "
                key={category._id}
              >
                {category.title}
              </a>
            </Link>
          );
        })}
      </div>
    );
};

export default MobileCateory;