import toLocalDate from "@/utils/toLocalDate";
import { UserCircleIcon, UserIcon } from "@heroicons/react/outline";
import React, { useState } from "react";
import CommentForm from "./CommentForm";

const SingleComments = ({ comment }) => {
  const [commentValue, setCommentValue] = useState("");
  const [onReplay, setOnReplay] = useState(false);
  return (
    <div className=" border rounded-xl border-gray-500  p-4  mb-8">
      <div className="flex items-center justify-start ">
        <UserCircleIcon className="h-12 w-12 stroke-gray-400 "strokeWidth={1} />
        <div className="flex flex-col justify-between mr-4">
          <span className="block text-sm test-gray-600">{comment.writer?.name}</span>
          <span className="block text-xs text-gray-500 mt-2 dark:text-slate-500">{toLocalDate(comment.createdAt)}</span>
        </div>
      </div>
      <div className="mt-4 leading-10">{comment.content}</div>
      <button className="text-sm p-4 cursor-pointer text-blue-600" onClick={() => setOnReplay(!onReplay)}>
        {!onReplay ? "پاسخ به" : "بیخیال"}
      </button>

      {onReplay ? (
        <div className="mt-4">
          <span className=" text-gray-500 tetx-sm ">
            درحال پاسخ به {comment.writer?.name}
          </span>
       <CommentForm comment={commentValue} setComment={setCommentValue}/>
        </div>
      ) : null}
    </div>
  );
};

export default SingleComments;
