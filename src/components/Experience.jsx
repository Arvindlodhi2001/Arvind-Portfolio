import React from 'react';

const Experience = () => {
  return (
<section id="experience">
  <div className="wrap">
    <div className="stag">02 — Experience</div>
    <h2 className="stitle">Where I've<br/><em>Delivered</em> Results</h2>
    <div className="exp-layout">
      <div className="exp-sidebar">
        <div className="exp-sidebar-year">2025</div>
        <div className="exp-sidebar-note">Joined Wolvestride India Pvt. Ltd. as a Junior Software Engineer, contributing to production-grade enterprise platform modules with React.js, Go, and PostgreSQL.</div>
      </div>
      <div>
        <div className="exp-card rv">
          <div className="exp-top">
            <div className="exp-role">Junior Software Engineer</div>
            <span className="exp-badge badge-cur">Current</span>
          </div>
          <div className="exp-company">Wolvestride India Pvt. Ltd.</div>
          <div className="exp-period">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            Feb 2025 – Present &nbsp;·&nbsp; Full Time
          </div>
          <ul className="exp-buls">
            <li><span className="da">—</span><span className="dt">Engineered scalable web applications using <strong>React.js, Go (Golang), and PostgreSQL</strong> for enterprise clients at production scale.</span></li>
            <li><span className="da">—</span><span className="dt">Created reusable and responsive <strong>UI components</strong> using React.js, Material UI, HTML5, CSS3, and Vite — ensuring consistent cross-device compatibility.</span></li>
            <li><span className="da">—</span><span className="dt">Managed application state and API integration with <strong>Redux Toolkit</strong>, enabling predictable and maintainable data flows across complex modules.</span></li>
            <li><span className="da">—</span><span className="dt">Designed secure <strong>REST APIs</strong> for seamless frontend-backend communication, implementing robust error handling and input validation.</span></li>
            <li><span className="da">—</span><span className="dt">Enhanced <strong>PostgreSQL queries</strong>, improving API response performance and overall database efficiency across data-heavy modules.</span></li>
            <li><span className="da">—</span><span className="dt">Contributed to <strong>Form Builder, Workflow Builder, Dashboard Builder, and Report Builder</strong> — core modules of an enterprise low-code platform.</span></li>
            <li><span className="da">—</span><span className="dt">Collaborated using <strong>GitLab and GitHub</strong>, performing debugging, code optimisation, and iterative feature enhancements in an agile team.</span></li>
          </ul>
          <div className="exp-techs">
            <span className="et">React.js</span><span className="et">Go (Golang)</span><span className="et">PostgreSQL</span>
            <span className="et">Redux Toolkit</span><span className="et">Material UI</span><span className="et">Vite</span>
            <span className="et">REST APIs</span><span className="et">GitLab</span><span className="et">GitHub</span><span className="et">Postman</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default Experience;
