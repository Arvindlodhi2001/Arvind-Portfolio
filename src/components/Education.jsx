import React from 'react';

const Education = () => {
  return (
<section id="education">
  <div className="wrap">
    <div className="stag">05 — Education</div>
    <h2 className="stitle">Academic <em>Background</em></h2>
    <div className="edu-row rv">
      <div className="edu-ico">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.75)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
      </div>
      <div className="edu-mid">
        <div className="edu-deg">Bachelor of Technology in Computer Science Engineering</div>
        <div className="edu-school">Radharaman Engineering College, Bhopal &nbsp;·&nbsp; 2020 – 2024</div>
        <div className="edu-tags">
          <span className="edu-tag">Data Structures &amp; Algorithms</span>
          <span className="edu-tag">DBMS</span>
          <span className="edu-tag">Web Development</span>
          <span className="edu-tag">Operating Systems</span>
          <span className="edu-tag">Software Engineering</span>
          <span className="edu-tag">Computer Networks</span>
        </div>
      </div>
      <div className="edu-right">
        <div className="edu-grade">7.92</div>
        <div className="edu-gsub">CGPA / 10</div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Education;
