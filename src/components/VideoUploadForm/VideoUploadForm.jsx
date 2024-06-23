import { useNavigate } from "react-router-dom";
import videoThumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import "./VideoUploadForm.scss";

const VideoUploadForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Video Upload Successful!");
    navigate("/");
    window.scrollTo(0, 0);
  };

  return (
    <form className="video-upload-form" onSubmit={handleSubmit}>
      <div className="video-upload-form__desktop-container">
        <div className="video-upload-form__thembnail-container">
          <label>VIDEO THUMBNAIL</label>
          <img className="video-upload-form__thumbnail-img" src={videoThumbnailImg} alt="video-thumbnail-preview-img" />
        </div>
        <div className="video-upload-form__input-container">
          <label>TITLE YOUR VIDEO</label>
          <input type="text" name="upload-video-title" placeholder="Add a title to your video" />
          <label>ADD A VIDEO DESCRIPTION</label>
          <textarea name="upload-video-description" placeholder="Add a description to your video" />
        </div>
      </div>
      <section className="divider-without-mobile-style">
        <section className="divider"></section>
      </section>
      <div className="video-upload-form__button-container">
        <button type="submit" className="video-upload-form__button video-upload-form__button--publish">
          <img src={publishIcon} alt="publish-icon" className="video-upload-form__button-icon" />
          PUBLISH
        </button>
        <button type="button" className="video-upload-form__button video-upload-form__button--cancel">
          CANCEL
        </button>
      </div>
    </form>
  );
};

export default VideoUploadForm;
