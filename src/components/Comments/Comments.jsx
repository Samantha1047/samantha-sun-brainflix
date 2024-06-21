import React from "react";
import CommentForm from "../CommentForm/CommentForm";
import Divider from "../Divider/Divider";
import CommentEntry from "../CommentEntry/CommentEntry";
import "./Comments.scss";

const Comments = ({ currentVideo }) => {
  return (
    <section className="comment">
      <span className="comment__title">{currentVideo.comments.length} Comments</span>
      <CommentForm />
      <Divider />
      <div className="comment__entryList">
        {currentVideo.comments.map((entry) => (
          <CommentEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
