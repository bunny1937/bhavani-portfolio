"use client";

import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { useEffect, useEffectEvent, useRef } from "react";
import styles from "@/app/page.module.css";

export function HeroScene({ stats }) {
  const sceneRef = useRef(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const springX = useSpring(pointerX, { stiffness: 120, damping: 22, mass: 0.6 });
  const springY = useSpring(pointerY, { stiffness: 120, damping: 22, mass: 0.6 });
  const tiltX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const tiltY = useTransform(springX, [-0.5, 0.5], [-10, 10]);
  const floatX = useTransform(springX, [-0.5, 0.5], [-18, 18]);
  const floatY = useTransform(springY, [-0.5, 0.5], [-18, 18]);
  const reverseFloatX = useTransform(floatX, (value) => value * -0.75);
  const reverseFloatY = useTransform(floatY, (value) => value * -0.6);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start end", "end start"],
  });
  const haloScale = useTransform(scrollYProgress, [0, 1], [0.88, 1.08]);
  const haloOpacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.25, 0.55, 0.28]);

  const handlePointerMove = useEffectEvent((event) => {
    const bounds = sceneRef.current?.getBoundingClientRect();
    if (!bounds) return;

    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;

    pointerX.set(Math.max(-0.5, Math.min(0.5, x)));
    pointerY.set(Math.max(-0.5, Math.min(0.5, y)));
  });

  useEffect(() => {
    window.addEventListener("pointermove", handlePointerMove);
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return (
    <div ref={sceneRef} className={styles.heroScene}>
      <motion.div
        className={styles.heroHalo}
        style={{ scale: haloScale, opacity: haloOpacity }}
      />
      <motion.div
        className={styles.heroBoard}
        style={{ rotateX: tiltX, rotateY: tiltY }}
      >
        <div className={styles.heroBoardTop}>
          <span className={styles.boardEyebrow}>Active build mode</span>
          <span className={styles.boardStatus}>Shipping systems with intent</span>
        </div>

        <div className={styles.heroBoardGrid}>
          <div className={styles.heroBoardMain}>
            <span className={styles.boardSectionLabel}>Current focus</span>
            <h3>Interfaces that clarify the work behind the screen.</h3>
            <p>
              Product thinking, interface rhythm, and backend structure are treated as one
              system instead of separate tasks.
            </p>
          </div>

          <div className={styles.heroBoardStats}>
            {stats.map((stat) => (
              <div key={stat.label} className={styles.heroSceneStat}>
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <motion.div
        className={`${styles.heroFloatCard} ${styles.heroFloatCardTop}`}
        style={{ x: floatX, y: floatY }}
      >
        <span>System lens</span>
        <strong>Observe -&gt; map -&gt; build -&gt; refine</strong>
      </motion.div>

      <motion.div
        className={`${styles.heroFloatCard} ${styles.heroFloatCardBottom}`}
        style={{ x: reverseFloatX, y: reverseFloatY }}
      >
        <span>Visual bias</span>
        <strong>Premium UX without losing practicality</strong>
      </motion.div>
    </div>
  );
}
