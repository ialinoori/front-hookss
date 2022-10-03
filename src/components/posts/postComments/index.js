import React, { useState } from 'react';
import CommentForm from './commentForm';
import ReplyComment from './ReplyComment';
import SingleComments from './SingleComments';

const PostComments = ({post}) => {
   
    return (
        <div>
            <h2 className='mb-5 font-bold mt-4'>نظرات</h2>
            {post.comments.map((comment,index)=>{
                return !comment.responseTo && comment.status ===2 && 
                <React.Fragment key={comment._id}>
                    <SingleComments comment={comment} postId={post._id}/>
                    <ReplyComment comments={post.comments} postId={post._id} parentCommentId={comment._id}/>
                 
                
                </React.Fragment>
            })}

            {/*base comment form */}
            <div className='mt-8'>
                <span className='font-bold md:text-lg'>ارسال دیدگاه جدید</span>
                <CommentForm postId={post._id} responseTo={null} />
            </div>
        </div>
    );
};

export default PostComments;