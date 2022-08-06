import React from "react";
import SingleComments from "./SingleComments";

const ReplyComment = ({ parentCommentId, comments }) => {
  return comments.map((comment) => {
    return (
      comment.responseTo === parentCommentId && (
        <div className="mr-4">
          <React.Fragment key={comment._id}>
            <SingleComments comment={comment} />
            <ReplyComment parentCommentId={comment._id} comments={comments} />
          </React.Fragment>
        </div>
      )
    );
  });
};

export default ReplyComment;
