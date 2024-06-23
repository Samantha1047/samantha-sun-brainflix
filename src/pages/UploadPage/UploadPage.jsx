import VideoUpload from "../../components/VideoUpload/VideoUpload";
import "./UploadPage.scss";

const UploadPage = () => {
  return (
    <article className="upload-page">
      <main>
        <section className="divider"></section>
        <VideoUpload />
      </main>
    </article>
  );
};

export default UploadPage;
