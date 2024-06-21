import React from "react";
import "./CommentForm.scss";
import CommentIcon from "../../assets/images/add_comment.svg";

const CommentForm = () => {
  return (
    <form className="comment-form" id="comment-form">
      <section className="comment-form__avatar"></section>
      <div className="comment-form__container">
        <label>JOIN THE CONVERSATION</label>
        <textarea id="commentId" name="comment" placeholder="Add a new comment"></textarea>
        <div>
          <button type="submit" className="comment-form__button">
            <img src={CommentIcon} alt="comment-icon" className="comment-form__button-icon" />
            COMMENT
          </button>
        </div>
      </div>
    </form>
  );
};

export default CommentForm;
