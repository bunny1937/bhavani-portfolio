"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

const skillGroups = [
  {
    category: "Frontend",
    icon: "FE",
    skills: [
      {
        name: "Next.js",
        level: 92,
        project: "Sanjeevani Dashboard, OMG Store",
        desc: "App Router, SSR, API routes, and full-stack Next.js apps.",
      },
      {
        name: "React.js",
        level: 90,
        project: "All projects",
        desc: "Component architecture, hooks, composition, and state management.",
      },
      {
        name: "Responsive CSS",
        level: 88,
        project: "OMG Store, all projects",
        desc: "Mobile-first layouts, visual hierarchy, and motion-led interaction.",
      },
    ],
  },
  {
    category: "Backend & DB",
    icon: "DB",
    skills: [
      {
        name: "MongoDB",
        level: 85,
        project: "Sanjeevani, OMG Store",
        desc: "Schema design, data modeling, aggregations, and Atlas workflows.",
      },
      {
        name: "Firebase",
        level: 82,
        project: "Multiple projects",
        desc: "Auth, Firestore, real-time updates, and production hosting.",
      },
      {
        name: "RESTful APIs",
        level: 88,
        project: "All projects",
        desc: "API design, integration, async data flows, and service wiring.",
      },
    ],
  },
  {
    category: "Design & Tools",
    icon: "UX",
    skills: [
      {
        name: "UI/UX Design",
        level: 80,
        project: "All projects",
        desc: "Figma thinking, responsive systems, and user-centered interface design.",
      },
      {
        name: "Adobe Photoshop",
        level: 75,
        project: "Client work",
        desc: "Graphics, mockups, image cleanup, and supporting design assets.",
      },
      {
        name: "Git / GitHub",
        level: 85,
        project: "All projects",
        desc: "Version control, branching, collaboration, and release discipline.",
      },
    ],
  },
  {
    category: "Soft Skills",
    icon: "SS",
    skills: [
      {
        name: "Public Speaking",
        level: 88,
        project: "Robokart workshops",
        desc: "Delivered presentations to 60 to 100 students across colleges.",
      },
      {
        name: "Project Management",
        level: 82,
        project: "All projects",
        desc: "End-to-end ownership, stakeholder collaboration, and delivery rhythm.",
      },
      {
        name: "Prompt Engineering",
        level: 78,
        project: "Workflow automation",
        desc: "AI-assisted development workflows, structured prompting, and automation.",
      },
    ],
  },
];

export default function Skills() {
  const [activeGroup, setActiveGroup] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const group = skillGroups[activeGroup];
  const activeSkill =
    group.skills.find((skill) => skill.name === hoveredSkill) ?? group.skills[0];

  return (
    <div className={styles.skillsShell}>
      <div className={styles.skillsBackdrop} aria-hidden="true" />

      <div className={styles.skillsHeader}>
        <div>
          <span className={styles.sectionEyebrowDark}>Capabilities</span>
          <h2 id="skills-title" className={styles.sectionTitleDark}>
            Skills in action,
            <br />
            not on paper.
          </h2>
        </div>
        <p className={styles.skillsHeaderDesc}>
          Hover a skill to see where it showed up. This section is meant to
          feel closer to a live capability board than a static keyword list.
        </p>
      </div>

      <div
        className={styles.skillsTabs}
        role="tablist"
        aria-label="Skill categories"
      >
        {skillGroups.map((groupItem, index) => (
          <button
            key={groupItem.category}
            type="button"
            className={`${styles.skillTab} ${
              activeGroup === index ? styles.skillTabActive : ""
            }`}
            onClick={() => {
              setActiveGroup(index);
              setHoveredSkill(null);
            }}
            aria-pressed={activeGroup === index}
          >
            <span className={styles.skillTabIcon}>{groupItem.icon}</span>
            <span>{groupItem.category}</span>
          </button>
        ))}
      </div>

      <div className={styles.skillsGrid}>
        <div className={styles.skillBarsPanel}>
          <div className={styles.skillBarsHeader}>
            <span className={styles.inlineMuted}>Selected track</span>
            <strong>{group.category}</strong>
          </div>

          <div className={styles.skillBarsList}>
            {group.skills.map((skill) => (
              <div
                key={skill.name}
                className={`${styles.skillRow} ${
                  activeSkill.name === skill.name ? styles.skillRowActive : ""
                }`}
                onMouseEnter={() => setHoveredSkill(skill.name)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className={styles.skillMeta}>
                  <span className={styles.skillName}>{skill.name}</span>
                  <span className={styles.skillPercent}>{skill.level}%</span>
                </div>
                <div className={styles.barTrack}>
                  <div
                    className={styles.barFill}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
                <div className={styles.skillProject}>
                  Used in: <strong>{skill.project}</strong>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.skillDetail}>
          <div className={styles.detailCard}>
            <div className={styles.detailBadge}>
              {group.icon} {group.category}
            </div>
            <h3 className={styles.detailName}>{activeSkill.name}</h3>
            <p className={styles.detailDesc}>{activeSkill.desc}</p>
            <div className={styles.detailDivider} />
            <div className={styles.detailLabel}>Project usage</div>
            <p className={styles.detailProject}>{activeSkill.project}</p>
            <div className={styles.detailLevel}>
              <div
                className={styles.detailLevelFill}
                style={{ width: `${activeSkill.level}%` }}
              />
            </div>
            <span className={styles.detailLevelText}>
              {activeSkill.level}% proficiency
            </span>
          </div>
        </div>
      </div>

      <div className={styles.techCloud}>
        {[
          "Next.js",
          "React.js",
          "MongoDB",
          "Firebase",
          "Node.js",
          "REST APIs",
          "Git",
          "Photoshop",
          "Canva",
          "UI/UX",
          "Prompt Engineering",
          "Automation",
          "Python",
          "Digital Marketing",
        ].map((tech, index) => (
          <span
            key={tech}
            className={styles.cloudChip}
            style={{
              fontSize: `${0.78 + (index % 3) * 0.1}rem`,
              opacity: 0.58 + (index % 4) * 0.08,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
