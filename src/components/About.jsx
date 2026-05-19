import React from 'react';

const About = () => {
  return (
<section id="about">
  <div className="wrap">
    <div className="stag">01 — About Me</div>
    <h2 className="stitle">Engineer with an Eye<br/>for <em>Clean Code</em></h2>
    <div className="about-grid">
      <div className="about-left">
        <p>I'm a <strong>Junior Software Engineer</strong> with 13+ months of experience in full-stack web development. I work at Wolvestride India, building scalable applications, designing REST APIs, and crafting responsive UI components that deliver real user value.</p>
        <p>My technical stack spans <strong>React.js, Go (Golang), and PostgreSQL</strong> — with a strong focus on clean code practices, state management with Redux Toolkit, API integration, and performance-optimised database queries.</p>
        <p>I've contributed to multiple production modules including <strong>Form Builder, Workflow Builder, Dashboard Builder, and Report Builder</strong> — gaining deep experience in enterprise-grade full-stack development.</p>
        <div className="pull-quote">
          <div className="pq-text">"I believe great software is built on clean architecture, thoughtful API design, and interfaces that feel intuitive from the very first click."</div>
          <div className="pq-src">— Arvind Lodhi, Full Stack Developer</div>
        </div>
      </div>
      <div>
        <div className="about-right-title rv">Proficiency Levels</div>
        <div className="skbars rv">
          <div className="skb"><div className="skb-row"><span className="skb-name">React.js + Redux Toolkit</span><span className="skb-pct">85%</span></div><div className="skb-track"><div className="skb-fill" data-w="85"></div></div></div>
          <div className="skb"><div className="skb-row"><span className="skb-name">JavaScript (ES6+)</span><span className="skb-pct">84%</span></div><div className="skb-track"><div className="skb-fill" data-w="84"></div></div></div>
          <div className="skb"><div className="skb-row"><span className="skb-name">Go (Golang)</span><span className="skb-pct">78%</span></div><div className="skb-track"><div className="skb-fill" data-w="78"></div></div></div>
          <div className="skb"><div className="skb-row"><span className="skb-name">PostgreSQL</span><span className="skb-pct">75%</span></div><div className="skb-track"><div className="skb-fill" data-w="75"></div></div></div>
          <div className="skb"><div className="skb-row"><span className="skb-name">REST API Design</span><span className="skb-pct">80%</span></div><div className="skb-track"><div className="skb-fill" data-w="80"></div></div></div>
          <div className="skb"><div className="skb-row"><span className="skb-name">Responsive UI / HTML &amp; CSS</span><span className="skb-pct">88%</span></div><div className="skb-track"><div className="skb-fill" data-w="88"></div></div></div>
        </div>
        <div className="fact-grid rv d1">
          <div className="fact-cell"><div className="fact-label">Location</div><div className="fact-val">Bhopal / Hyderabad</div></div>
          <div className="fact-cell"><div className="fact-label">Status</div><div className="fact-val">Open to Roles</div></div>
          <div className="fact-cell"><div className="fact-label">Degree</div><div className="fact-val">B.Tech CS, 2024</div></div>
          <div className="fact-cell"><div className="fact-label">Focus</div><div className="fact-val">Full Stack Web</div></div>
        </div>
      </div>
    </div>
  </div>
</section>
  );
};

export default About;
