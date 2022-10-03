import React from 'react';
import Link from "next/link";
import { useRouter } from 'next/router';

const MobileCateory = ({postCategories}) => {
  const {query} = useRouter();
    return (
        <div className="flex md:hidden gap-x-4 overflow-auto pb-5 mb-4 ">
           <Link href={`/blogs`}>
              <a
                className={`block pr-4 py-2 hover:bg-purple-50 mb-1 ${!query.categorySlug ?"bg-purple-700  text-white":""}`}
                
              >
               همه مقالات
              </a>
            </Link>
        {postCategories.map((category) => {
          return (
            <Link href={`/blogs/${category.englishTitle}`}>
              <a
                className={`block text-xs border-black-400 whitespace-nowrap bg-white rounded-3xl px-3 py-1 text-gray-400 ${query.categorySlug === category.englishTitle ? "bg-purple-700  text-white" : ""}`}
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