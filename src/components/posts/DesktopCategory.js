import React from 'react';
import {
    AdjustmentsIcon,
    ChevronDownIcon,
    BookmarkIcon,
    HeartIcon,
    ChatIcon,
    AnnotationIcon,
    ClockIcon,
  } from "@heroicons/react/outline";
  import { useState } from "react";
  import Link from "next/link";
import { useRouter } from 'next/router';

const DesktopCategory = ({postCategories}) => {
    const [isOpen, setIsOpen] = useState(true);
    const {query} = useRouter();
    console.log(query);
    return (
        <div className="bg-white rounded-3xl overflow-hidden">
        {/* accoirdion header */}
        <div
          className="flex items-center justify-between py-4 px-4 cursor-pointer bg-purple-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>دسته بندی مقالات</span>
          <ChevronDownIcon
            className={`w-6 h-6 stroke-purple-400 transition-all duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {/* accordion content */}
        <div className={`${isOpen ? "block" : "hidden"}`}>
          <Link href="/blogs">
            <a className={`block pr-4 py-2 hover:bg-purple-50 mb-1 ${!query.categorySlug ?"bg-purple-700  text-white":""}`}>
              همه مقالات
            </a>
          </Link>

          {postCategories.map((category) => {
            return (
              <Link href={`/blogs/${category.englishTitle}`}>
                <a
                  className={`block pr-4 py-2 hover:bg-purple-200 mb-1 ${query.categorySlug === category.englishTitle ? "bg-purple-700  text-white" : ""}`}
                  key={category._id}
                >
                  {category.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    );
};

export default DesktopCategory;