import "./CommentEntry.scss";

const CommentEntry = ({ entry }) => {
  return (
    <section className="comment-entry">
      <article className="comment-entry__article">
        <img className="comment-entry__avatar" />
        <div className="comment-entry__container">
          <h4>{entry.name}</h4>
          <span className="comment-entry__date">{Intl.DateTimeFormat("en-US", { year: "numeric", month: "numeric", day: "numeric" }).format(entry.timestamp)}</span>
          <p className="comment-entry__content">{entry.comment}</p>
        </div>
      </article>

      <section className="divider"></section>
    </section>
  );
};

export default CommentEntry;
