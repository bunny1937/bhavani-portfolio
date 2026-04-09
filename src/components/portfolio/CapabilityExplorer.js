"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useDeferredValue, useState } from "react";
import styles from "@/app/page.module.css";

// Map experience company → capability indices it strongly relates to
const expToCapabilities = {
  "Sanjeevani Services": [0, 2], // product framing, backend execution
  Freelance: [1, 3], // interface systems, client collaboration
  "Robokart Company": [4], // technical storytelling
  "Sahu Technologies": [1, 4], // interface systems, technical storytelling
};

export function CapabilityExplorer({ capabilities, experience }) {
  const [activeExpIndex, setActiveExpIndex] = useState(0);
  const [activeCapIndex, setActiveCapIndex] = useState(null);
  const deferredExpIndex = useDeferredValue(activeExpIndex);

  const activeExp = experience[deferredExpIndex];
  const highlightedCaps =
    activeCapIndex !== null
      ? new Set([activeCapIndex])
      : new Set(expToCapabilities[activeExp.company] ?? []);

  return (
    <div className={styles.capExpShell}>
      {/* ── HORIZONTAL TIMELINE ─────────────────────────────── */}
      <div
        className={styles.expTimeline}
        role="tablist"
        aria-label="Career timeline"
      >
        <div className={styles.expTrackLine} aria-hidden="true" />

        {experience.map((exp, i) => (
          <button
            key={exp.company}
            role="tab"
            aria-selected={activeExpIndex === i}
            className={`${styles.expTimelineStop} ${activeExpIndex === i ? styles.expTimelineStopActive : ""}`}
            onClick={() => {
              setActiveExpIndex(i);
              setActiveCapIndex(null);
            }}
          >
            <div
              className={styles.expTimelineDot}
              style={
                activeExpIndex === i
                  ? {
                      background: exp.accent,
                      boxShadow: `0 0 0 4px ${exp.accent}28`,
                    }
                  : {}
              }
            />
            <div className={styles.expTimelineLabel}>
              <span className={styles.expTimelineYear}>{exp.timeframe}</span>
              <strong className={styles.expTimelineCompany}>
                {exp.company}
              </strong>
              <span className={styles.expTimelineRole}>{exp.role}</span>
            </div>
          </button>
        ))}
      </div>

      {/* ── BODY: experience detail + capability cards ───────── */}
      <div className={styles.capExpBody}>
        {/* Left col: experience detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeExp.company}
            className={styles.expDetailCard}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div
              className={styles.expDetailAccentBar}
              style={{ background: activeExp.accent }}
            />

            <div className={styles.expDetailMeta}>
              <span
                className={styles.expDetailType}
                style={{
                  color: activeExp.accent,
                  background: `${activeExp.accent}1a`,
                }}
              >
                {activeExp.type}
              </span>
              <span className={styles.expDetailPeriod}>{activeExp.period}</span>
            </div>

            <h3 className={styles.expDetailCompany}>{activeExp.company}</h3>
            <p
              className={styles.expDetailRole}
              style={{ color: activeExp.accent }}
            >
              {activeExp.role}
            </p>
            <p className={styles.expDetailSummary}>{activeExp.summary}</p>

            <ul className={styles.expAchievements}>
              {activeExp.achievements.map((a) => (
                <li key={a.text} className={styles.expAchievement}>
                  <span className={styles.expAchieveIcon}>{a.icon}</span>
                  <span>{a.text}</span>
                </li>
              ))}
            </ul>

            <div className={styles.expTechRow}>
              {activeExp.tech.map((t) => (
                <span key={t} className={styles.expTechChip}>
                  {t}
                </span>
              ))}
            </div>

            {activeExp.link && (
              <a
                href={activeExp.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.expLink}
              >
                Visit live project →
              </a>
            )}

            <div className={styles.expBigStat}>
              <strong style={{ color: activeExp.accent }}>
                {activeExp.stat}
              </strong>
              <span>{activeExp.statLabel}</span>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Right col: capability cards */}
        <div className={styles.capGrid}>
          <p className={styles.capGridHint}>
            Highlighted = active in this role. Click to expand.
          </p>
          <div className={styles.capCards}>
            {capabilities.map((cap, i) => {
              const isHighlighted = highlightedCaps.has(i);
              const isSelected = activeCapIndex === i;
              return (
                <button
                  key={cap.name}
                  type="button"
                  className={`${styles.capCard} ${
                    isHighlighted
                      ? styles.capCardHighlighted
                      : styles.capCardDim
                  } ${isSelected ? styles.capCardSelected : ""}`}
                  onClick={() => setActiveCapIndex(isSelected ? null : i)}
                >
                  <div className={styles.capCardTop}>
                    <span className={styles.capCardName}>{cap.name}</span>
                    {isHighlighted && (
                      <span className={styles.capCardActivePip} />
                    )}
                  </div>
                  <strong className={styles.capCardOutcome}>
                    {cap.outcome}
                  </strong>

                  {isHighlighted && isSelected && (
                    <motion.div
                      className={styles.capCardProof}
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.24 }}
                    >
                      <p className={styles.capCardProofText}>{cap.proof}</p>
                      <div className={styles.capCardTags}>
                        {cap.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
