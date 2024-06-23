import CommentForm from "../CommentForm/CommentForm";
import CommentEntry from "../CommentEntry/CommentEntry";
import "./Comments.scss";

const Comments = ({ currentVideo }) => {
  return (
    <section className="comment">
      <span className="comment__title">{currentVideo.comments.length} Comments</span>
      <CommentForm />
      <section className="divider"></section>
      <div className="comment__entryList">
        {currentVideo.comments.map((entry) => (
          <CommentEntry key={entry.id} entry={entry} />
        ))}
      </div>
    </section>
  );
};

export default Comments;
