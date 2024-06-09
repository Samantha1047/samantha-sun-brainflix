import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import Divider from "../Divider/Divider";
import CommentEntry from "../CommentEntry/CommentEntry";
import "./Comments.scss";

const Comments = ({ videoData }) => {
  return (
    <div className="comment">
      <span className="comment__title">{videoData.comments.length} Comments</span>
      <CommentForm />
      <Divider />
      <div>
        {videoData.comments.map((entry) => (
          <CommentEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default Comments;
