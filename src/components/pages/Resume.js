// import package and local style sheet
import React from 'react';
import '../../styles/Resume.css';
// import resume pdf from assets
import ResumePdf from '../../assets/images/Resume.pdf';

export default function Resume() {
  return (
    <div className="resume">
      {/* use iframe to display pdf preview and download option */}
      <iframe src={`${ResumePdf}`} target="_blank" title="resume"></iframe>
    </div>
  );
}
