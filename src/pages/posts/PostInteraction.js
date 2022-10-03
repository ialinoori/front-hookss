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
import { useAuth } from "@/context/AuthContext";
import http from "@/services/httpsService";
import { useRouter } from "next/router";
import toast from "react-hot-toast";

const PostInteraction = ({ post, isSmall, className }) => {
  const { user } = useAuth();
  const iconSize = `${isSmall ? "h-4 w-4" : "h-6 w-6"} `;
  const router = useRouter();

  const likedHandler = (postId) => {
    http
      .put(`/posts/like/${postId}`)
      .then(({data}) => {
        router.push({
          pathname:router.pathname,
          query: router.query,
        },undefined,{ scroll: false });
        toast.success(data.message)
      })
      .catch(
        (err) => {
          toast.error(err?.response?.data?.message)
        }

      );
  };
 
  const bookmarkHandler = (postId) => {
    http
      .put(`/posts/bookmark/${postId}`)
      .then(({data}) => {
        router.push({
          pathname:router.pathname,
          query: router.query,
        },undefined,{ scroll: false });
        toast.success(data.message)
      })
      .catch(
        (err) => {
          toast.error(err?.response?.data?.message)
        }
      );
  };

  return (
    <div
      className={`flex items-center ${
        isSmall ? "gap-x-2" : "gap-x-4"
      } ${className} `}
    >
      <button className="bg-gray-200 p-0.5 rounded flex items-center gap-x-1 text-red-500">
        <AnnotationIcon className={`${iconSize} stroke-gray-500`} />
        <span className="text-xs text-gray-500 font-bold leading-3">
          {toPersianDigits(post.commentsCount)}
        </span>
      </button>
      <button
        onClick={() => likedHandler(post._id)}
        className="bg-red-100 p-0.5 rounded flex items-center gap-x-1 hover:bg-red-500 hover:text-red-100 transition-all "
      >
        {post.isLiked ? (
          <SolidHeartIcon className={`${iconSize} fill-current`} />
        ) : (
          <HeartIcon className={`${iconSize} stroke-current`} />
        )}
        <span className="text-xs  font-bold leading-3">
          {toPersianDigits(post.likesCount)}
        </span>
      </button>
      <button
      onClick={()=>bookmarkHandler(post._id)}
       className="bg-blue-100 text-blue-500 p-0.5 rounded flex items-center gap-x-1  hover:bg-blue-500 hover:text-white transition-all ">
        {post.isBookmarked ? (
          <SolidBookmarkIcon className={`${iconSize} fill-current`} />
        ) : (
          <BookmarkIcon className={`${iconSize} stroke-current`} />
        )}

        <span className="text-xs text-gray-500 font-bold leading-3">
          {/* {blog.readingTime} */}
        </span>
      </button>
    </div>
  );
};

export default PostInteraction;
