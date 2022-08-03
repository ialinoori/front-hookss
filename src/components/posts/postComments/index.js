import React, { useState } from 'react';
import CommentForm from './commentForm';
import ReplyComment from './ReplyComment';
import SingleComments from './SingleComments';

const PostComments = ({post}) => {
    const [commentValue , setCommentValue] = useState("");
    return (
        <div>
            <h2 className='mb-5 font-bold t'>نظرات</h2>
            {post.comments.map((comment,index)=>{
                return !comment.responseTo && comment.status ===2 && 
                <React.Fragment key={comment._id}>
                    <SingleComments comment={comment}/>
                    <ReplyComment comments={post.comments} parentCommentId={comment._id}/>
                 
                
                </React.Fragment>
            })}

            {/*base comment form */}
            <div className='mt-8'>
                <span className='font-bold md:text-lg'>ارسال دیدگاه جدید</span>
                <CommentForm comment={commentValue} setComment={setCommentValue}/>
            </div>
        </div>
    );
};

export default PostComments;