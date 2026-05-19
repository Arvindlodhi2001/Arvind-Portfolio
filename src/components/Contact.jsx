import React from 'react';

const Contact = () => {
  return (
<section id="contact">
  <div className="contact-bg">HELLO</div>
  <div className="wrap" style={{position:"relative", zIndex:2}}>
    <div className="contact-head">
      <div className="stag">06 — Get In Touch</div>
      <h2 className="stitle">Open to <em>Opportunities</em></h2>
      <p>I'm actively looking for full-stack or frontend engineering roles where I can build meaningful products and grow alongside a strong team. If you're hiring or want to connect — I'd love to hear from you.</p>
    </div>

    <div className="c-row">
      <a href="mailto:arvindlodhi850@gmail.com" className="c-card rv">
        <div className="c-ico">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        </div>
        <div className="c-lbl">Email — Best Way</div>
        <div className="c-val">arvindlodhi850@gmail.com</div>
        <div className="c-act">Send Email →</div>
      </a>
      <a href="https://www.linkedin.com/in/arvindlodhi?utm_source=share_via&utm_content=profile&utm_medium=member_android" target="_blank" className="c-card rv d1">
        <div className="c-ico">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        </div>
        <div className="c-lbl">LinkedIn — Connect</div>
        <div className="c-val">linkedin.com/in/arvindlodhi</div>
        <div className="c-act">View Profile →</div>
      </a>
      <a href="https://github.com/Arvindlodhi2001" target="_blank" className="c-card rv d2">
        <div className="c-ico">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.85)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        </div>
        <div className="c-lbl">GitHub — See My Code</div>
        <div className="c-val">github.com/Arvindlodhi2001</div>
        <div className="c-act">View Repos →</div>
      </a>
    </div>

    <div className="c-lower">
      <div className="c-info">
        <div className="c-info-title">More Contact Details</div>
        <a href="tel:+919827805086" className="clink rv">
          <div className="cl-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg></div>
          <div><div className="cl-lbl">Phone</div><div className="cl-val">+91 98278 05086</div></div>
          <div className="cl-arr">→</div>
        </a>
        <div className="clink rv d1" style={{cursor:"default"}}>
          <div className="cl-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg></div>
          <div><div className="cl-lbl">Location</div><div className="cl-val">Bhopal / Hyderabad, India</div></div>
        </div>
        <div className="clink rv d2" style={{cursor:"default"}}>
          <div className="cl-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
          <div><div className="cl-lbl">Response Time</div><div className="cl-val">Within 24 hours</div></div>
        </div>
        <div className="clink rv d3" style={{cursor:"default"}}>
          <div className="cl-ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(245,241,235,.8)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
          <div><div className="cl-lbl">Open To</div><div className="cl-val">Full Stack · Frontend · Backend</div></div>
        </div>
      </div>

      <div className="c-form rv d1">
        <div className="fg"><label>Your Name</label><input type="text" placeholder="Your name or company"/></div>
        <div className="fg"><label>Your Email</label><input type="email" placeholder="you@company.com"/></div>
        <div className="fg"><label>Subject</label><input type="text" placeholder="Job Opportunity at ..."/></div>
        <div className="fg"><label>Message</label><textarea placeholder="Tell me about the role or what you're building..."></textarea></div>
        <button className="c-sub" onClick={() => alert("Thanks! For fastest response, please email: arvindlodhi850@gmail.com")}>Send Message ↗</button>
      </div>
    </div>
  </div>
</section>
  );
};

export default Contact;
