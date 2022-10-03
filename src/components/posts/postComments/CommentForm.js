import http from "@/services/httpsService";
import { useRouter } from "next/router";
import React, { useState } from "react";
import toast from "react-hot-toast";

const CommentForm = ({ postId, responseTo,setOnreply }) => {
  const [commentValue, setCommentValue] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
  

    const data = {
      content: commentValue,
      postId,
      responseTo,
    };
    console.log(data);
    
  
    http.post("/post-comment/save-comment",data).then(
      (res) => {
        setCommentValue("");
        if(setOnreply){
          setOnreply((open)=>!open);
        }
        toast.success(res.data.message)
        router.push(router);
        
        console.log(res.data);
      }
    ).catch(
      (err) => {
        console.log(err);
        toast.error(err?.response?.data?.message)
      }
    );

  };
  return (
    <form>
      <textarea
        className="focus:ring-primary p-4 rounded my-4 w-full border-none ringt-2 ring-slate-300 shadow-sm focus:outline-none focus:ring-purple-800 dark:focus-whithin:ring-blue-500"
        value={commentValue}
        onChange={(e) => setCommentValue(e.target.value)}
        placeholder="نظرت روبرام بنویس"
      />

      <button
        onClick={submitHandler}
        type="submit"
        className="mt-4 mx-auto py-3 w-full sm:w-56 bg-violet-600 rounded-xl text-white px-3 md:tetx-lg"
      >
        ارسال نظر
      </button>
    </form>
  );
};

export default CommentForm;
