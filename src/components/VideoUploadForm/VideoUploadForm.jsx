import { useNavigate } from "react-router-dom";
import axios from "axios";
import videoThumbnailImg from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import "./VideoUploadForm.scss";

const API_URL = import.meta.env.VITE_API_URL;

const VideoUploadForm = () => {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const randomImageIndex = Math.floor(Math.random() * 9); // 0 to 8
    const imagePath = `${API_URL}/images/image${randomImageIndex}.jpg`;

    const videoData = {
      title: e.target.elements["upload-video-title"].value,
      description: e.target.elements["upload-video-description"].value,
      image: imagePath,
    };

    try {
      await axios.post(`${API_URL}/videos`, videoData);
      alert("Video uploaded successfully!");
      navigate("/");
      window.scrollTo(0, 0);
    } catch (error) {
      console.error("Failed to upload video:", error);
      alert("Failed to upload video.");
    }
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
