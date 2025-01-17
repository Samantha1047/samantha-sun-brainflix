import "./VideoListEntry.scss";

const VideoEntry = ({ id, img, title, channel }) => {
  return (
    <section className="video-entry">
      <img className="video-entry__img" src={img} alt={`${title} Video Thumbnail`} />
      <div className="video-entry__info">
        <h4 className="video-entry__title">{title}</h4>
        <span className="video-entry__channel">{channel}</span>
      </div>
    </section>
  );
};

export default VideoEntry;
