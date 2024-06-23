import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <section className="divider-without-mobile">
        <section className="divider"></section>
      </section>
      <VideoUploadForm />
    </section>
  );
};

export default VideoUpload;
