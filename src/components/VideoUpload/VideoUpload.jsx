import React from "react";
import VideoUploadForm from "../VideoUploadForm/VideoUploadForm";
import DividerNoPadding from "../DividerNoPadding/DividerNoPadding";
import "./VideoUpload.scss";

const VideoUpload = () => {
  return (
    <section className="video-upload">
      <h1 className="video-upload__title">Upload Video</h1>
      <section className="divider-without-mobile">
        <DividerNoPadding />
      </section>
      <VideoUploadForm />
    </section>
  );
};

export default VideoUpload;
