import React from 'react';
import '../../styles/Resume.css';
import ResumePdf from '../../assets/images/Resume.pdf';

export default function Resume() {
  return (
    <div className="resume">
      <iframe src={`${ResumePdf}`} target="_blank" title="resume"></iframe>
    </div>
  );
}
