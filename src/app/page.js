import { CapabilityExplorer } from "@/components/portfolio/CapabilityExplorer";
import { ContactForm } from "@/components/portfolio/ContactForm";
import { HeroScene } from "@/components/portfolio/HeroScene";
import { NarrativeStrip } from "@/components/portfolio/NarrativeStrip";
import { ProjectShowcase } from "@/components/portfolio/ProjectShowcase";
import Skills from "@/components/portfolio/Skills";
import { portfolio } from "@/content/portfolio";
import styles from "./page.module.css";

// Journey / origin-story data for the bento grid
// const journey = [
//   {
//     year: "2018",
//     title: "The Spark",
//     desc: "Discovered programming through Computer Science in high school. Built first webpage and felt the thrill of creation.",
//     accent: "#c9a84c",
//     icon: "✦",
//   },
//   {
//     year: "2022",
//     title: "Going Deep",
//     desc: "Joined B.E. Computer Engineering. First professional stint at Sahu Technologies — web dev, Python, digital marketing.",
//     accent: "#0f6b6b",
//     icon: "⬡",
//   },
//   {
//     year: "2024",
//     title: "Real Impact",
//     desc: "Shipped a full-stack e-commerce platform for a clothing brand. 35% engagement lift. Trained 100+ students at Robokart.",
//     accent: "#c45c2e",
//     icon: "◈",
//   },
//   {
//     year: "2025",
//     title: "Systems Thinking",
//     desc: "Built enterprise-grade service OS for Sanjeevani — digitizing 20 years of operations, 40% efficiency gain.",
//     accent: "#7c3aed",
//     icon: "⬟",
//   },
// ];

// Rich experience data (merged from Experience.js)
const richExperience = [
  {
    company: "M.M.S Water Diviners",
    role: "Freelance Full Stack Developer",
    period: "2026",
    timeframe: "2026",
    type: "Freelance",
    accent: "#01696f",
    summary:
      "Built a full digital presence for a 10-year-old geophysical survey business that had none.",
    achievements: [
      {
        icon: "🌊",
        text: "Scroll-driven canvas animation hero simulating soil layers and water detection",
      },
      {
        icon: "🔐",
        text: "NextAuth-protected CMS — owner manages content, reviews, and media independently",
      },
      {
        icon: "⭐",
        text: "MongoDB-backed review pipeline with moderation layer before public display",
      },
      {
        icon: "📍",
        text: "Local SEO infrastructure via next-sitemap targeting Kankavli and surrounding areas",
      },
    ],
    tech: ["Next.js", "MongoDB", "NextAuth", "UploadThing", "CSS Modules"],
    link: "https://mmswaterdiviners.in",
    stat: "10yr",
    statLabel: "Expertise Made Visible",
  },
  {
    company: "Sanjeevani Services",
    role: "Web Developer",
    period: "Jul 2025 – Aug 2025",
    timeframe: "2025",
    type: "Contract",
    accent: "#0f6b6b",
    summary:
      "Digitised an entire business. Took 20 years of pen-and-paper operations online.",
    achievements: [
      {
        icon: "📊",
        text: "Built comprehensive service management dashboard from scratch",
      },
      {
        icon: "⚡",
        text: "Automated invoice, quotation, and daily record systems",
      },
      {
        icon: "🏠",
        text: "Implemented property management & service tracking modules",
      },
      { icon: "📈", text: "40% improvement in operational efficiency" },
    ],
    tech: ["Next.js", "MongoDB", "Firebase", "REST APIs"],
    stat: "40%",
    statLabel: "Efficiency Gained",
  },
  {
    company: "OMG Store",
    role: "Web Developer",
    period: "Nov 2024 – Mar 2025",
    timeframe: "2024–2025",
    type: "Freelance",
    accent: "#c9a84c",
    summary:
      "Built a clothing brand's entire digital commerce infrastructure from zero.",
    achievements: [
      {
        icon: "🛒",
        text: "Full-stack e-commerce platform for fashion brand (https://omg-store27.vercel.app/)",
      },
      {
        icon: "📱",
        text: "Responsive UI showcasing collections for seamless shopping",
      },
      {
        icon: "🤝",
        text: "Direct client collaboration to align tech with business goals",
      },
      { icon: "📈", text: "35% boost in customer engagement post-launch" },
    ],
    tech: ["Next.js", "React.js", "MongoDB", "Firebase"],
    link: "https://omg-store27.vercel.app/",
    stat: "35%",
    statLabel: "Engagement Up",
  },
  {
    company: "Robokart Company",
    role: "Technical Trainer",
    period: "August 2024",
    timeframe: "2024",
    type: "Training",
    accent: "#c45c2e",
    summary:
      "Stepped on stage to train 60-100 students per session on tech and innovation.",
    achievements: [
      {
        icon: "🎤",
        text: "4-day intensive workshops across multiple degree colleges",
      },
      { icon: "👥", text: "60-100 students per session, consistently engaged" },
      {
        icon: "🤖",
        text: "Topics: innovation, electronics, robotics, and emerging tech",
      },
      {
        icon: "🗣",
        text: "Sharpened public speaking and technical communication skills",
      },
    ],
    tech: ["Electronics", "Robotics", "Public Speaking"],
    stat: "100+",
    statLabel: "Students Trained",
  },
  {
    company: "Sahu Technologies",
    role: "Developer",
    period: "Nov 2022 – Dec 2022",
    timeframe: "2022",
    type: "Internship",
    accent: "#7c3aed",
    summary:
      "First professional exposure — web dev, Python, digital marketing, graphic design.",
    achievements: [
      {
        icon: "💻",
        text: "Completed client assignments using modern web frameworks",
      },
      { icon: "🐍", text: "Hands-on Python programming and digital marketing" },
      { icon: "🎨", text: "Graphic design projects alongside technical work" },
      {
        icon: "🏆",
        text: "Delivered under tight deadlines in cross-functional teams",
      },
    ],
    tech: ["Web Dev", "Python", "Digital Marketing", "Graphic Design"],
    stat: "2mo",
    statLabel: "First Pro Experience",
  },
];

export default function Home() {
  const {
    person,
    heroSignals,
    storyPanels,
    principles,
    projects,
    capabilities,
    education,
    insights,
  } = portfolio;

  return (
    <main className={styles.page} id="top">
      <div className={styles.pageGlow} aria-hidden="true" />

      <header className={styles.topbar}>
        <a href="#top" className={styles.brand}>
          <span>Bhavani</span>
          <strong>Nehra</strong>
        </a>

        <nav className={styles.topnav} aria-label="Primary">
          <a href="#story">Story</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#capabilities">Capabilities</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href={person.resumeHref} className={styles.navAction} download>
          Resume
        </a>
      </header>

      {/* ─── HERO ─────────────────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.heroSection}`}
        aria-labelledby="hero-title"
      >
        <div className={styles.heroCopy}>
          <span className={styles.sectionEyebrow}>
            Full stack web developer
          </span>
          <p className={styles.locationLine}>{person.location}</p>
          <h1 id="hero-title" className={styles.heroTitle}>
            {person.headline}
          </h1>
          <p className={styles.heroLead}>{person.subheadline}</p>
          <div className={styles.heroActions}>
            <a href="#work" className={styles.primaryButton}>
              View case studies
            </a>
            <a
              href={person.resumeHref}
              className={styles.secondaryButton}
              download
            >
              Download resume
            </a>
          </div>
        </div>
        <HeroScene stats={heroSignals} />
      </section>

      {/* ─── STORY + BENTO ────────────────────────────────────── */}
      <section
        id="story"
        className={`${styles.section} ${styles.storySection}`}
        aria-labelledby="story-title"
      >
        <div className={styles.storyIntro}>
          <div>
            <span className={styles.sectionEyebrowDark}>Who I am</span>
            <h2 id="story-title" className={styles.sectionTitleDark}>
              Developer, designer, and systems thinker with a bias for
              real-world outcomes.
            </h2>
          </div>
        </div>

        <NarrativeStrip panels={storyPanels} />

        {/* ── REVAMPED BENTO ──────────────────────────────────── */}
        {/* <div className={styles.aboutBento} aria-label="Career journey">
         

          {journey.map((item) => (
            <div
              key={item.year}
              className={styles.bentoCellTimeline}
              style={{ "--item-accent": item.accent }}
            >
              <div className={styles.bentoCardHeader}>
                <span
                  className={styles.bentoIcon}
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </span>
                <span
                  className={styles.bentoYear}
                  style={{ color: item.accent }}
                >
                  {item.year}
                </span>
              </div>
              <h3 className={styles.bentoMilestoneTitle}>{item.title}</h3>
              <p className={styles.bentoMilestoneDesc}>{item.desc}</p>
            </div>
          ))}
        </div> */}
        {/* CTA cell */}
        {/* <div className={styles.bentoCellCta}>
            <div>
              <span
                className={styles.sectionEyebrow}
                style={{ fontSize: "0.68rem" }}
              >
                Currently
              </span>
              <p className={styles.bentoCopy}>
                Pursuing <strong>B.E. Computer Engineering</strong> at KC
                College, Mumbai. Open to full-time roles, freelance, and
                meaningful collaborations.
              </p>
            </div>
            <a href="#contact" className={styles.primaryButton}>
              Start a Conversation →
            </a>
          </div> */}
      </section>

      {/* ─── WORK ─────────────────────────────────────────────── */}
      <section
        id="work"
        className={`${styles.section} ${styles.projectSection}`}
        aria-labelledby="work-title"
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Selected work</span>
            <h2 id="work-title" className={styles.sectionTitleLight}>
              Case studies that show the thinking, not just the stack.
            </h2>
          </div>
          <p className={styles.sectionSummaryLight}>
            Each project is framed as a system: the problem that existed, the
            decisions that shaped the build, and the change that happened after
            launch.
          </p>
        </div>
        <ProjectShowcase projects={projects} />
      </section>

      {/* ─── SKILLS ───────────────────────────────────────────── */}
      <section
        id="skills"
        className={`${styles.section} ${styles.skillsSection}`}
        aria-labelledby="skills-title"
      >
        <Skills />
      </section>

      {/* ─── CAPABILITIES + EXPERIENCE (merged) ───────────────── */}
      <section
        id="capabilities"
        className={`${styles.section} ${styles.capabilitySection}`}
        aria-labelledby="capabilities-title"
      >
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrowDark}>
              Capabilities &amp; Experience
            </span>
            <h2 id="capabilities-title" className={styles.sectionTitleDark}>
              Where I&apos;ve worked and what I built there.
            </h2>
          </div>
          <p className={styles.sectionSummaryDark}>
            Select a role on the timeline to see which capabilities were active
            — then click any capability card to go deeper.
          </p>
        </div>

        <CapabilityExplorer
          capabilities={capabilities}
          experience={richExperience}
        />
      </section>

      {/* ─── TRUST / EDUCATION ────────────────────────────────── */}
      <section
        className={`${styles.section} ${styles.trustSection}`}
        aria-labelledby="trust-title"
      >
        <div className={styles.trustGrid}>
          <div>
            <span className={styles.sectionEyebrowDark}>Education</span>
            <h2 id="trust-title" className={styles.sectionTitleDark}>
              Formal training in engineering, sharpened by shipping and
              teaching.
            </h2>
            <div className={styles.educationStack}>
              {education.map((item) => (
                <article key={item.title} className={styles.educationCard}>
                  <span>{item.timeframe}</span>
                  <h3>{item.title}</h3>
                  <p>{item.school}</p>
                </article>
              ))}
            </div>
          </div>
          <span className={styles.sectionEyebrowDark}>Differentiators</span>

          <div className={styles.insightColumn}>
            {insights.map((insight) => (
              <article key={insight.title} className={styles.insightCard}>
                <span>{insight.label}</span>
                <h3>{insight.title}</h3>
                <p>{insight.copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CONTACT ──────────────────────────────────────────── */}
      <section
        id="contact"
        className={`${styles.section} ${styles.contactSection}`}
        aria-labelledby="contact-title"
      >
        <div className={styles.contactIntro}>
          <span className={styles.sectionEyebrow}>Contact</span>

          <h2 id="contact-title" className={styles.sectionTitleLight}>
            Let&apos;s build something valuable, not just another feature list.
          </h2>

          <p className={styles.sectionSummaryLight}>
            {" "}
            <span className={styles.bentoAvailDot} /> {person.availability}
          </p>
          <div className={styles.bentoTraits}>
            {[
              "Frontend & full-stack development",
              "UI/UX Design",
              "Desgin-to-code execution",
              "Bussiness digitalisation",
            ].map((t) => (
              <span key={t} className={styles.bentoBadge}>
                {t}
              </span>
            ))}
          </div>
          <div className={styles.bentoBannerLeft}>
            <p className={styles.bentoTagline}>
              Not just a dev. <em>A problem-solver</em> by nature.
            </p>
          </div>
          <div className={styles.contactQuickLinks}>
            <a href={`mailto:${person.email}`}>{person.email}</a>
            <a
              href="https://linkedin.com/in/bhavaninehra"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {" "}
              <span className={styles.contactIcon}>💼</span>
              <div className={styles.contactLinkVal}>bhavaninehra</div>
            </a>

            <a
              href="https://github.com/bunny1937"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              {" "}
              <span className={styles.contactIcon}>🐙</span>
              <div className={styles.contactLinkVal}>bhavaninehra</div>
            </a>
          </div>
          {/* <div className={`${styles.contactLinks} reveal delay-3`}>
            <a
              href="mailto:bhavaninehra@gmail.com"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon}>✉️</span>
              <div>
                <div className={styles.contactLinkLabel}>Email</div>
                <div className={styles.contactLinkVal}>
                  bhavaninehra@gmail.com
                </div>
              </div>
              <span className={styles.contactArrow}>→</span>
            </a>

            <a
              href="https://linkedin.com/in/bhavaninehra"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon}>💼</span>
              <div>
                <div className={styles.contactLinkLabel}>LinkedIn</div>
                <div className={styles.contactLinkVal}>
                  linkedin.com/in/bhavaninehra
                </div>
              </div>
              <span className={styles.contactArrow}>→</span>
            </a>

            <a
              href="https://github.com/bhavaninehra"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.contactLink}
            >
              <span className={styles.contactIcon}>🐙</span>
              <div>
                <div className={styles.contactLinkLabel}>GitHub</div>
                <div className={styles.contactLinkVal}>
                  github.com/bhavaninehra
                </div>
              </div>
              <span className={styles.contactArrow}>→</span>
            </a>

            <div className={styles.contactLink} style={{ cursor: "default" }}>
              <span className={styles.contactIcon}>📍</span>
              <div>
                <div className={styles.contactLinkLabel}>Location</div>
                <div className={styles.contactLinkVal}>
                  Kalyan, Maharashtra, India
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <ContactForm email={person.email} resumeHref={person.resumeHref} />
      </section>

      <footer className={styles.footer}>
        <p>
          Designed and built in Next.js 16 with motion, story structure, and
          local case-study assets.
        </p>
        <a href="#top">Back to top</a>
      </footer>
    </main>
  );
}
