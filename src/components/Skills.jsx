import React from 'react';

const Skills = () => {
  return (
<section id="skills">
  <div className="wrap">
    <div className="stag">03 — Technical Skills</div>
    <h2 className="stitle">My Full <em>Toolkit</em></h2>
    <div className="sk-grid">
      <div className="sk-cell rv">
        <div className="sk-cell-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef6868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
        </div>
        <div className="sk-cell-cat">Languages</div>
        <div className="sk-cell-title">Programming Languages</div>
        <div className="sk-pills"><span className="sk-pill spr">JavaScript ES6+</span><span className="sk-pill spg">Go (Golang)</span></div>
      </div>
      <div className="sk-cell rv d1">
        <div className="sk-cell-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef6868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>
        </div>
        <div className="sk-cell-cat">Frontend</div>
        <div className="sk-cell-title">Web Development</div>
        <div className="sk-pills">
          <span className="sk-pill spr">React.js</span><span className="sk-pill spy">Redux Toolkit</span>
          <span className="sk-pill spg">Node.js</span><span className="sk-pill spg">Express.js</span>
          <span className="sk-pill spg">HTML5 / CSS3</span><span className="sk-pill spg">Bootstrap</span>
          <span className="sk-pill spg">Material UI</span><span className="sk-pill spg">REST APIs</span>
        </div>
      </div>
      <div className="sk-cell rv d2">
        <div className="sk-cell-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef6868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>
        </div>
        <div className="sk-cell-cat">Database</div>
        <div className="sk-cell-title">Data Storage</div>
        <div className="sk-pills"><span className="sk-pill spy">PostgreSQL</span><span className="sk-pill spg">MongoDB</span></div>
      </div>
      <div className="sk-cell wide rv d1">
        <div className="sk-cell-icon">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ef6868" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <div className="sk-cell-cat">Tools, Platforms &amp; Concepts</div>
        <div className="sk-cell-title">Dev Tools &amp; Core Concepts</div>
        <div className="sk-pills">
          <span className="sk-pill spr">GitLab</span><span className="sk-pill spr">GitHub</span>
          <span className="sk-pill spb">Postman</span><span className="sk-pill spb">VS Code</span>
          <span className="sk-pill spg">Responsive Web Design</span><span className="sk-pill spg">API Integration</span>
          <span className="sk-pill spg">Debugging</span><span className="sk-pill spg">Clean Code Practices</span>
          <span className="sk-pill spg">Problem Solving</span>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Skills;
