import React from "react";
import { saveAs } from "file-saver";

const ResumeDownloader = () => {
  const handleDownload = () => {
    const resumeUrl = "/resume.pdf";
    saveAs(resumeUrl, "My_Resume.pdf");
  };

  return (
    <button className="pushable" onClick={handleDownload}>
      <span className="front">Resume</span>
    </button>
  );
};

export default ResumeDownloader;
