import React, { useEffect, useRef } from 'react';

const Cursor = () => {
  const dotRef = useRef(null);
  const curBRef = useRef(null);
  const lblRef = useRef(null);

  useEffect(() => {
    const dot = dotRef.current;
    const curB = curBRef.current;
    const lbl = lblRef.current;
    const body = document.body;

    const STATES = ['cur-hv','cur-btn','cur-view','cur-nav','cur-link','cur-ck','cur-out'];
    function setState(s, labelText) {
      STATES.forEach(c => body.classList.remove(c));
      if(s) body.classList.add(s);
      if(labelText !== undefined) lbl.textContent = labelText;
    }

    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;

    const onMouseMove = (e) => {
      mx = e.clientX; 
      my = e.clientY;
      dot.style.left = mx + 'px';
      dot.style.top  = my + 'px';
      
      // Magnetic pull logic for CTA buttons
      const btn = e.target.closest('.btn-solid, .btn-line, .nav-hire, .c-sub');
      if (btn) {
        const r = btn.getBoundingClientRect();
        const cx = r.left + r.width/2;
        const cy = r.top + r.height/2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.hypot(dx, dy);
        const MAX = 70;
        if(dist < MAX){
          const pull = (1 - dist/MAX) * 0.35;
          btn.style.transform = `translate(${dx*pull}px, ${dy*pull}px)`;
        }
      }
    };

    const onMouseOutBtn = (e) => {
       const btn = e.target.closest('.btn-solid, .btn-line, .nav-hire, .c-sub');
       if(btn) btn.style.transform = '';
    }

    document.addEventListener('mousemove', onMouseMove, {passive: true});
    document.addEventListener('mouseout', onMouseOutBtn);

    let reqId;
    function animBracket() {
      rx += (mx - rx) * 0.10;
      ry += (my - ry) * 0.10;
      curB.style.left = rx + 'px';
      curB.style.top  = ry + 'px';
      reqId = requestAnimationFrame(animBracket);
    }
    animBracket();

    const rules = [
      ['.btn-solid,.nav-hire',   'cur-btn',  'Go →'       ],
      ['.btn-line',              'cur-btn',  'Connect'    ],
      ['.c-sub',                 'cur-btn',  'Send →'     ],
      ['.proj-card',             'cur-view', 'View'       ],
      ['.exp-card',              'cur-view', 'Read'       ],
      ['.edu-row',               'cur-view', 'Details'    ],
      ['.hero-card',             'cur-view', 'Profile'    ],
      ['.c-card',                'cur-link', 'Open'       ],
      ['.clink',                 'cur-link', 'Visit'      ],
      ['.nav-links a,.mob-link', 'cur-nav',  ''           ],
      ['.chip,.et,.ptg,.sk-pill,.edu-tag,.fact-cell,.sk-cell,.pull-quote','cur-hv',''],
    ];

    const onMouseOverDelegated = (e) => {
      let matched = false;
      for (const [sel, state, label] of rules) {
        if (e.target.closest(sel)) {
          setState(state, label);
          matched = true;
          break;
        }
      }
      if (!matched) setState('', '');
    };

    document.addEventListener('mouseover', onMouseOverDelegated);

    const onMouseDown = () => body.classList.add('cur-ck');
    const onMouseUp = () => body.classList.remove('cur-ck');
    const onMouseLeaveWin = () => setState('cur-out', '');
    const onMouseEnterWin = () => setState('', '');

    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeaveWin);
    document.addEventListener('mouseenter', onMouseEnterWin);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseout', onMouseOutBtn);
      cancelAnimationFrame(reqId);
      document.removeEventListener('mouseover', onMouseOverDelegated);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeaveWin);
      document.removeEventListener('mouseenter', onMouseEnterWin);
    };
  }, []);

  return (
    <>
      <div id="cur-dot" ref={dotRef}></div>
      <div id="cur-b" ref={curBRef}>
        <div className="cb cb-tl"></div>
        <div className="cb cb-tr"></div>
        <div className="cb cb-bl"></div>
        <div className="cb cb-br"></div>
        <div id="cur-fill"></div>
        <span id="cur-lbl" ref={lblRef}></span>
      </div>
    </>
  );
};

export default Cursor;
