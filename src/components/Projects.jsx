import React from 'react';

const Projects = () => {
  return (
<section id="projects">
  <div className="wrap">
    <div className="stag">04 — Projects</div>
    <h2 className="stitle">Things I've <em>Built</em></h2>
    <div className="proj-grid">

      <div className="proj-card feat rv">
        <div className="ptop">
          <div className="ptop-num">01</div>
          <div className="proj-ico">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.7)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </div>
          <div className="proj-name">Full-Stack Grocery E-Commerce Platform</div>
        </div>
        <div className="pbody">
          <p className="pdesc">A production-ready full-stack grocery e-commerce platform featuring user authentication, product management, order placement, and a fully responsive UI — built end-to-end with the MERN stack.</p>
          <div className="ppts">
            <div className="ppt"><span className="ppt-d">—</span><span>User authentication with protected routes and session handling</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Product management with search, filter, and category navigation</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Cart and order placement flow with full checkout experience</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Fully responsive UI with Bootstrap for mobile-first design</span></div>
          </div>
          <div className="plinks">
            <a href="https://github.com/Arvindlodhi2001/grocery-website" target="_blank" className="plink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
              GitHub Repo
            </a>
            <a href="https://grocery-website-demo.vercel.app" target="_blank" className="plink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          </div>
          <div className="pfoot"><span className="ptg">React.js</span><span className="ptg">Node.js</span><span className="ptg">Express.js</span><span className="ptg">MongoDB</span><span className="ptg">Bootstrap</span><span className="ptg">MERN</span></div>
        </div>
      </div>

      <div className="proj-card rv d1">
        <div className="ptop" style={{background:"linear-gradient(135deg,#1e1a17,#2a2018)"}}>
          <div className="ptop-num">02</div>
          <div className="proj-ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg></div>
          <div className="proj-name">Apple Website Clone</div>
        </div>
        <div className="pbody">
          <p className="pdesc">A high-fidelity clone of Apple's product website — pixel-perfect layouts, smooth animations, and clean component structure demonstrating advanced CSS craftsmanship.</p>
          <div className="ppts">
            <div className="ppt"><span className="ppt-d">—</span><span>Pixel-perfect responsive design across all breakpoints</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Smooth CSS scroll animations and hover interactions</span></div>
          </div>
          <div className="pfoot"><span className="ptg">HTML5</span><span className="ptg">CSS3</span><span className="ptg">JavaScript</span><span className="ptg">Responsive</span></div>
        </div>
      </div>

      <div className="proj-card rv d2">
        <div className="ptop" style={{background:"linear-gradient(135deg,#1a1818,#261c1c)"}}>
          <div className="ptop-num">03</div>
          <div className="proj-ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg></div>
          <div className="proj-name">Hotel Booking Website</div>
        </div>
        <div className="pbody">
          <p className="pdesc">A responsive hotel booking frontend with room listings, booking forms, and interactive gallery — showcasing clean UI design and real-world layout patterns.</p>
          <div className="ppts">
            <div className="ppt"><span className="ppt-d">—</span><span>Interactive booking and search interface with form validation</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Mobile-first responsive grid layouts for all devices</span></div>
          </div>
          <div className="pfoot"><span className="ptg">HTML5</span><span className="ptg">CSS3</span><span className="ptg">JavaScript</span></div>
        </div>
      </div>

      <div className="proj-card rv">
        <div className="ptop" style={{background:"linear-gradient(135deg,#1a1c14,#22201a)"}}>
          <div className="ptop-num">04</div>
          <div className="proj-ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg></div>
          <div className="proj-name">Christmas Gifts Website</div>
        </div>
        <div className="pbody">
          <p className="pdesc">A festive, animated gift-showcase website with seasonal styling, CSS keyframe animations, and a visually rich product listing layout.</p>
          <div className="ppts">
            <div className="ppt"><span className="ppt-d">—</span><span>CSS keyframe animations and festive seasonal theme</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Responsive product grid with animated card reveals</span></div>
          </div>
          <div className="plinks">
            <a href="https://christmas-website-demo.vercel.app" target="_blank" className="plink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          </div>
          <div className="pfoot"><span className="ptg">HTML5</span><span className="ptg">CSS3</span><span className="ptg">JavaScript</span><span className="ptg">Animations</span></div>
        </div>
      </div>

      <div className="proj-card rv d1">
        <div className="ptop" style={{background:"linear-gradient(135deg,#14181e,#1c2030)"}}>
          <div className="ptop-num">05</div>
          <div className="proj-ico"><svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.65)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg></div>
          <div className="proj-name">Naresh IT Website Clone</div>
        </div>
        <div className="pbody">
          <p className="pdesc">A fully responsive clone of the Naresh IT Technologies website — demonstrating layout precision, multi-section structure, and clean navigation patterns.</p>
          <div className="ppts">
            <div className="ppt"><span className="ppt-d">—</span><span>Multi-section layout with smooth scroll navigation</span></div>
            <div className="ppt"><span className="ppt-d">—</span><span>Mobile-first responsive design using Bootstrap grid</span></div>
          </div>
          <div className="plinks">
            <a href="https://nareshit-clone-demo.vercel.app" target="_blank" className="plink">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
              Live Demo
            </a>
          </div>
          <div className="pfoot"><span className="ptg">HTML5</span><span className="ptg">CSS3</span><span className="ptg">Bootstrap</span></div>
        </div>
      </div>

    </div>
  </div>
</section>
  );
};

export default Projects;
