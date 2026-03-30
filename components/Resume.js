"use client";

import ResumeDocx from "./ResumeDocx";

const Resume = () => {
  return (
    <div className="flex h-screen w-screen flex-col items-start gap-4">
      <ResumeDocx />
      <div className="resume-actions" style={{ marginTop: 12 }}>
        <a href="/DHRUV%20SALOT.docx" download className="btn">
          Download Resume (DOCX)
        </a>
      </div>
    </div>
  );
};
export default Resume;
