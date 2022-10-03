import React from "react";
import SingleComments from "./SingleComments";

const ReplyComment = ({ parentCommentId, comments,postId }) => {
  return comments.map((comment) => {
    return (
      comment.responseTo === parentCommentId && (
        <div className="mr-4">
          <React.Fragment key={comment._id}>
            <SingleComments comment={comment} postId={postId} />
            <ReplyComment parentCommentId={comment._id} comments={comments} postId={postId} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
