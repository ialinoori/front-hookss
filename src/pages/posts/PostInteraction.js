import React from "react";
import {
  AdjustmentsIcon,
  ChevronDownIcon,
  BookmarkIcon,
  HeartIcon,
  ChatIcon,
  AnnotationIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import { toPersianDigits } from "@/utils/toPersianDigits";
import {
  HeartIcon as SolidHeartIcon,
  BookmarkIcon as SolidBookmarkIcon,
} from "@heroicons/react/solid";

const PostInteraction = ({ post, isSmall,className }) => {
    const iconSize = `${isSmall ? "h-4 w-4" : "h-6 w-6"} `;
  return (
    <div className={`flex items-center ${isSmall ? "gap-x-2":"gap-x-4"} ${className} `}>
      <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1 text-red-500">
        <AnnotationIcon className={`${iconSize} stroke-gray-500`} />
        <span className="text-xs text-gray-500 font-bold leading-3">
          {toPersianDigits(post.commentsCount)}
        </span>
      </button>
      <button className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 hover:bg-red-500 hover:text-red-100 transition-all ">
        {post.isLiked ? (
          <SolidHeartIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className="text-xs  font-bold leading-3">
          {toPersianDigits(post.likesCount)}
        </span>
      </button>
      <button className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1  hover:bg-blue-500 hover:text-white transition-all ">
        {post.isBookmarked ? (
          <SolidBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`}/>
        )}
        
        <span className="text-xs text-gray-500 font-bold leading-3">
          {/* {blog.readingTime} */}
        </span>
      </button>
    </div>
  );
};

export default PostInteraction;
