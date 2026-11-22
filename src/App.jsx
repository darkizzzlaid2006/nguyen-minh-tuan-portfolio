import { useEffect, useRef, useState } from 'react';

const skills = [
  {
    title: 'Programming',
    items: ['Java', 'C++'],
  },
  {
    title: 'Frameworks & libraries',
    items: ['Spring Boot · Basic', 'JavaFX', 'SDL2'],
  },
  {
    title: 'Core computer science',
    items: ['OOP', 'Data Structures', 'Algorithms'],
  },
  {
    title: 'Data & networking',
    items: ['MySQL', 'SQL fundamentals', 'TCP/IP', 'Client–server'],
  },
  {
    title: 'Security · Basic',
    items: ['Password hashing', 'bcrypt.js'],
  },
  {
    title: 'Tools',
    items: ['Git', 'GitHub', 'Docker', 'IntelliJ IDEA', 'Visual Studio'],
  },
  {
    title: 'Productivity',
    items: ['Word · Basic', 'Excel · Basic', 'Google Sheets · Proficient'],
  },
];

const projects = [
  {
    number: '01',
    name: 'Flappy Bird',
    type: 'PERSONAL PROJECT',
    description:
      'A 2D game developed independently with C++ and SDL2. Built the game logic and core gameplay features while applying programming fundamentals in a practical project.',
    stack: ['C++', 'SDL2'],
    link: 'https://github.com/darkizzzlaid2006/flappy_bird',
    visual: 'flappy',
    visualLabel: 'INDEPENDENT BUILD',
  },
  {
    number: '02',
    name: 'Arkanoid',
    type: 'TEAM PROJECT',
    description:
      'A 2D brick-breaker game created as part of an Object-Oriented Programming course. Contributed to core gameplay mechanics and level implementation.',
    stack: ['Java 11', 'JavaFX 17'],
    link: 'https://github.com/darkizzzlaid2006/7k7k7k',
    visual: 'arkanoid',
    visualLabel: 'TEAM COLLABORATION',
  },
];

function Icon({ name, size = 18 }) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.7,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': true,
  };

  if (name === 'arrow') return <svg {...common}><path d="M5 12h14M13 6l6 6-6 6" /></svg>;
  if (name === 'external') return <svg {...common}><path d="M14 4h6v6M20 4l-9 9" /><path d="M18 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" /></svg>;
  if (name === 'github') return <svg {...common}><path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 6v-3.9a3.4 3.4 0 0 0-.9-2.7c3-.3 6.2-1.5 6.2-6.7a5.2 5.2 0 0 0-1.4-3.6 4.8 4.8 0 0 0-.1-3.6S17.6 1.2 15 3a13.2 13.2 0 0 0-7 0C5.4 1.2 4.2 1.5 4.2 1.5a4.8 4.8 0 0 0-.1 3.6 5.2 5.2 0 0 0-1.4 3.6c0 5.2 3.2 6.4 6.2 6.7A3.4 3.4 0 0 0 8 18v4" /></svg>;
  if (name === 'mail') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>;
  if (name === 'phone') return <svg {...common}><path d="M7 3h3l2 5-2 1.5a15 15 0 0 0 4.5 4.5L16 12l5 2v3a2 2 0 0 1-2 2C10 19 5 14 5 5a2 2 0 0 1 2-2Z" /></svg>;
  if (name === 'sun') return <svg {...common}><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></svg>;
  if (name === 'moon') return <svg {...common}><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z" /></svg>;
  if (name === 'pin') return <svg {...common}><path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" /><circle cx="12" cy="10" r="2.5" /></svg>;
  return null;
}

function ProjectVisual({ type, label }) {
  if (type === 'flappy') {
    return (
      <div className="project-visual visual-flappy" aria-label="Abstract Flappy Bird project artwork">
        <div className="visual-grid" />
        <div className="visual-topline"><span>{label}</span><span>SDL2 / C++</span></div>
        <div className="flight-path" />
        <div className="bird-core"><span /></div>
        <div className="pipe pipe-one" /><div className="pipe pipe-two" />
        <div className="visual-index">01</div>
        <div className="visual-caption">GAME<br />LOGIC</div>
      </div>
    );
  }
  return (
    <div className="project-visual visual-arkanoid" aria-label="Abstract Arkanoid project artwork">
      <div className="visual-grid" />
      <div className="visual-topline"><span>{label}</span><span>JAVAFX / JAVA 11</span></div>
      <div className="brick-wall">
        {Array.from({ length: 15 }, (_, i) => <span key={i} className={`brick brick-${i % 5}`} />)}
      </div>
      <div className="ark-ball" />
      <div className="ark-paddle" />
      <div className="visual-index">02</div>
      <div className="visual-caption">LEVEL<br />DESIGN</div>
    </div>
  );
}

function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [menuOpen, setMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      }),
      { threshold: 0.12 }
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const handleMove = (event) => {
      const rect = hero.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;
      hero.style.setProperty('--pointer-x', `${x * 18}px`);
      hero.style.setProperty('--pointer-y', `${y * 18}px`);
    };
    const reset = () => {
      hero.style.setProperty('--pointer-x', '0px');
      hero.style.setProperty('--pointer-y', '0px');
    };
    hero.addEventListener('pointermove', handleMove);
    hero.addEventListener('pointerleave', reset);
    return () => {
      hero.removeEventListener('pointermove', handleMove);
      hero.removeEventListener('pointerleave', reset);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" onClick={closeMenu} aria-label="Nguyen Minh Tuan home">
          <span className="brand-mark">N<span>.</span></span>
          <span className="brand-name">NGUYEN MINH TUAN</span>
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}>
          <span /><span />
        </button>
        <nav className={`nav-links ${menuOpen ? 'nav-open' : ''}`} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
          <button className="theme-toggle" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} size={17} />
          </button>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home" ref={heroRef}>
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> OPEN TO SOFTWARE ENGINEERING INTERNSHIPS</div>
            <p className="hero-kicker">HELLO, I'M</p>
            <h1>Nguyen<br /><span>Minh Tuan.</span></h1>
            <div className="hero-role">JAVA DEVELOPER <i /> IT STUDENT</div>
            <p className="hero-description">I’m an Information Technology student at UET–VNU, building a strong foundation in software engineering through code, collaboration, and hands-on projects.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <Icon name="arrow" size={17} /></a>
              <a className="button button-quiet" href="mailto:24020346@vnu.edu.vn">Get in touch <Icon name="external" size={15} /></a>
            </div>
            <div className="hero-meta">
              <span><Icon name="pin" size={15} /> Hanoi, Vietnam</span>
              <span className="meta-separator" />
              <span>UET–VNU · Class of 2028</span>
            </div>
          </div>

          <div className="hero-art" aria-label="Abstract dimensional graphic">
            <div className="art-glow" />
            <div className="orbit orbit-a" /><div className="orbit orbit-b" /><div className="orbit orbit-c" />
            <div className="core-sphere"><div className="sphere-shine" /><div className="sphere-line line-a" /><div className="sphere-line line-b" /><div className="sphere-line line-c" /></div>
            <div className="orbit-node node-a" /><div className="orbit-node node-b" /><div className="orbit-node node-c" />
            <div className="float-label label-java"><span className="label-dot" /> JAVA <b>01</b></div>
            <div className="float-label label-cpp">C++ <b>02</b></div>
            <div className="float-label label-build">BUILDING<br /><strong>WITH INTENT.</strong></div>
            <div className="art-cross cross-a">+</div><div className="art-cross cross-b">+</div>
          </div>
          <a className="scroll-cue" href="#about"><span /> SCROLL TO EXPLORE</a>
        </section>

        <div className="focus-strip">
          <span className="focus-label">CURRENT FOCUS</span>
          <div className="focus-items"><span>Java</span><i /> <span>Object-Oriented Programming</span><i /> <span>Data Structures & Algorithms</span><i /> <span>MySQL</span></div>
        </div>

        <section className="section section-wrap about-section" id="about">
          <div className="section-heading reveal"><span className="section-index">01 / ABOUT</span><span className="section-rule" /></div>
          <div className="about-grid">
            <div className="about-title reveal"><h2>Curious by nature.<br /><em>Engineer</em> in progress.</h2></div>
            <div className="about-content reveal">
              <p className="large-copy">I’m currently a third-year Information Technology student at the University of Engineering and Technology, Vietnam National University, Hanoi.</p>
              <p>My foundation is in C++, Java, object-oriented programming, data structures and algorithms. I enjoy turning concepts into working software and learning through the process of building things.</p>
              <p>I’m looking for an opportunity to grow as a software engineer, contribute to a team, and gain experience solving real-world problems.</p>
              <a className="text-link" href="/Nguyen-Minh-Tuan-CV.pdf" target="_blank" rel="noreferrer">View my résumé <Icon name="arrow" size={16} /></a>
            </div>
          </div>
          <div className="about-facts reveal">
            <div className="fact"><span className="fact-number">2028</span><span className="fact-label">EXPECTED GRADUATION</span></div>
            <div className="fact"><span className="fact-number">02</span><span className="fact-label">SELECTED PROJECTS</span></div>
            <div className="fact"><span className="fact-number">UET</span><span className="fact-label">VIETNAM NATIONAL UNIVERSITY</span></div>
          </div>
        </section>

        <section className="section skills-section" id="skills">
          <div className="section-wrap">
            <div className="section-heading reveal"><span className="section-index">02 / TOOLKIT</span><span className="section-rule" /></div>
            <div className="skills-intro reveal"><h2>The tools I use<br /><em>to make things work.</em></h2><p>A growing toolkit built around programming fundamentals, practical development, and a willingness to keep learning.</p></div>
            <div className="skills-grid">
              {skills.map((group, index) => (
                <article className="skill-card reveal" key={group.title} style={{ '--delay': `${index * 55}ms` }}>
                  <div className="skill-card-top"><span>0{index + 1}</span><span className="skill-indicator" /></div>
                  <h3>{group.title}</h3>
                  <div className="skill-tags">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </article>
              ))}
            </div>
            <p className="skills-note"><span>*</span> Skills are presented at their current learning level; Spring Boot and password hashing with bcrypt.js are basic-level knowledge.</p>
            <div className="supporting-skills"><div><span>LANGUAGES</span><p>Vietnamese · Native &nbsp; / &nbsp; English · Technical documentation</p></div><div><span>WORKING STYLE</span><p>Teamwork · Communication · Responsibility · Willingness to learn</p></div><div><span>FOUNDATIONS</span><p>UML · Requirements analysis</p></div></div>
          </div>
        </section>

        <section className="section section-wrap projects-section" id="projects">
          <div className="section-heading reveal"><span className="section-index">03 / SELECTED WORK</span><span className="section-rule" /></div>
          <div className="projects-heading reveal"><h2>Some things<br /><em>I’ve built.</em></h2><p>Small projects, practical lessons. Each one helped me turn programming concepts into something tangible.</p></div>
          <div className="projects-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.number}>
                <a className="project-art-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`View ${project.name} source code`}>
                  <ProjectVisual type={project.visual} label={project.visualLabel} />
                </a>
                <div className="project-info">
                  <div className="project-overline"><span>{project.type}</span><span>PROJECT / {project.number}</span></div>
                  <div className="project-title-row"><h3>{project.name}</h3><a className="round-link" href={project.link} target="_blank" rel="noreferrer" aria-label={`Open ${project.name} on GitHub`}><Icon name="external" size={18} /></a></div>
                  <p>{project.description}</p>
                  <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  <a className="text-link project-source" href={project.link} target="_blank" rel="noreferrer">Explore source code <Icon name="arrow" size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section education-section">
          <div className="section-wrap education-inner reveal">
            <div><span className="section-index">04 / EDUCATION</span><h2>Learning is<br /><em>part of the work.</em></h2></div>
            <div className="education-card">
              <div className="education-year">EXPECTED GRADUATION <span>2028</span></div>
              <h3>University of Engineering and Technology</h3>
              <p>Vietnam National University, Hanoi</p>
              <div className="education-divider" />
              <div className="education-details"><span>MAJOR</span><strong>Information Technology</strong></div>
              <div className="education-details"><span>STATUS</span><strong>Third-year student</strong></div>
            </div>
          </div>
        </section>

        <section className="section section-wrap contact-section" id="contact">
          <div className="contact-panel reveal">
            <div className="contact-decoration"><div className="contact-ring ring-one" /><div className="contact-ring ring-two" /><div className="contact-ring ring-three" /><span>LET'S<br />CONNECT</span></div>
            <div className="contact-copy"><span className="section-index">05 / CONTACT</span><h2>Have a role<br />or a project in <em>mind?</em></h2><p>I’m open to software engineering internship opportunities and conversations about building useful things.</p><a className="button button-primary" href="mailto:24020346@vnu.edu.vn">Say hello <Icon name="arrow" size={17} /></a></div>
          </div>
          <div className="contact-links">
            <a href="mailto:24020346@vnu.edu.vn"><Icon name="mail" size={17} /><span>24020346@vnu.edu.vn</span><Icon name="external" size={14} /></a>
            <a href="tel:+84949824355"><Icon name="phone" size={17} /><span>+84 949 824 355</span><Icon name="external" size={14} /></a>
            <a href="https://github.com/darkizzzlaid2006" target="_blank" rel="noreferrer"><Icon name="github" size={17} /><span>github.com/darkizzzlaid2006</span><Icon name="external" size={14} /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap">
        <a className="brand footer-brand" href="#home"><span className="brand-mark">N<span>.</span></span><span className="brand-name">NGUYEN MINH TUAN</span></a>
        <span>DESIGNED & BUILT WITH CURIOSITY.</span>
        <span>© {new Date().getFullYear()} · HANOI, VIETNAM</span>
      </footer>
    </div>
  );
}

export default App;
