"use client";

import styles from "@/app/page.module.css";

export function NarrativeStrip({ panels }) {
  return (
    <div className={styles.narrativeStrip}>
      <div className={styles.narrativeGrid}>
        {panels.map((panel) => (
          <article key={panel.step} className={styles.narrativePanel}>
            <div className={styles.narrativePanelTop}>
              <span className={styles.narrativeStep}>{panel.step}</span>
              <span className={styles.narrativeAccent}>{panel.accent}</span>
            </div>
            <h3>{panel.title}</h3>
            <p>{panel.copy}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
