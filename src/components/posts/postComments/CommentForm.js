import React from "react";

const CommentForm = ({setComment,comment}) => {
  return (
    <form>
      <textarea
        className="focus:ring-primary p-4 rounded my-4 w-full border-none ringt-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-purple-800 dark:focus-whithin:ring-blue-500"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="نظرت روبرام بنویس"
      />
      
       
      <button className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-600 rounded-xl text-white px-3 md:tetx-lg">
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
