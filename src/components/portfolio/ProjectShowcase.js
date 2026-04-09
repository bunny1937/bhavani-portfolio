"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  startTransition,
  useDeferredValue,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "@/app/page.module.css";

export function ProjectShowcase({ projects }) {
  const articleRefs = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const activeProject = projects[activeIndex];
  const ticking = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (ticking.current) return;

        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) => a.boundingClientRect.top - b.boundingClientRect.top,
          )[0];

        if (!visible) return;

        ticking.current = true;

        const index = Number(visible.target.dataset.index);
        setActiveIndex(index);

        // 🔥 unlock after frame settles
        requestAnimationFrame(() => {
          ticking.current = false;
        });
      },
      {
        threshold: 0.2,
      },
    );

    articleRefs.current.forEach((node) => {
      if (node) observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.projectShowcase}>
      <div className={styles.projectArticles}>
        {projects.map((project, index) => (
          <article
            key={project.id}
            ref={(node) => {
              articleRefs.current[index] = node;
            }}
            data-index={index}
            className={`${styles.projectArticle} ${
              activeIndex === index ? styles.projectArticleActive : ""
            }`}
          >
            <div className={styles.projectLeadRow}>
              <span className={styles.projectIndex}>{project.index}</span>
              <div>
                <span className={styles.projectLabel}>{project.label}</span>
                <h3>{project.name}</h3>
              </div>
            </div>

            <p className={styles.projectHook}>{project.hook}</p>

            <div className={styles.projectMetaRow}>
              <span>{project.timeframe}</span>
              <div className={styles.projectStack}>
                {project.stack.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            {activeIndex === index && (
              <div className={styles.architecturePanel}>
                <span className={styles.projectVisualKicker}>
                  Architecture view
                </span>
                <div className={styles.architectureFlow}>
                  {project.architecture.map((item) => (
                    <div key={item} className={styles.architectureNode}>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
            <div className={styles.storyBlock}>
              <span>Problem</span>
              <ul>
                {project.problem.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.storyBlock}>
              <span>Thinking</span>
              <ul>
                {project.thinking.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.storyBlock}>
              <span>System</span>
              <ul>
                {project.system.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.storyBlock}>
              <span>Impact</span>
              <ul>
                {project.impact.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className={styles.projectInsight}>{project.insight}</div>
          </article>
        ))}
      </div>

      <div className={styles.projectVisualRail}>
        <div className={styles.projectVisualSticky}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              className={styles.projectVisualPanel}
              initial={{ opacity: 0, y: 28, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -28, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className={styles.projectVisualHeader}>
                <div>
                  <span className={styles.projectVisualKicker}>
                    Live preview
                  </span>
                  <h4>{activeProject.name}</h4>
                </div>
                {activeProject.liveUrl ? (
                  <Link
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.inlineAction}
                  >
                    View live
                  </Link>
                ) : (
                  <span className={styles.inlineMuted}>Case-study mode</span>
                )}
              </div>

              <div className={styles.projectImageFrame}>
                <Image
                  src={activeProject.preview}
                  alt={activeProject.previewAlt}
                  width={1200}
                  height={800}
                  className={styles.projectPreviewImage}
                  unoptimized
                />
              </div>

              <div className={styles.projectMetricRow}>
                {activeProject.metrics.map((metric) => (
                  <div key={metric.label} className={styles.metricChip}>
                    <strong>{metric.value}</strong>
                    <span>{metric.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
