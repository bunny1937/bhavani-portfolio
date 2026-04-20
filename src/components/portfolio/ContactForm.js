"use client";

import { useState } from "react";
import styles from "@/app/page.module.css";

const INITIAL = { name: "", email: "", company: "", message: "" };

export function ContactForm({ email, resumeHref }) {
  const [form, setForm] = useState(INITIAL);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((curr) => ({ ...curr, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong.");
      }

      setStatus("success");
      setForm(INITIAL);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  };

  /* ── Success state ── */
  if (status === "success") {
    return (
      <div className={styles.contactPanel}>
        <div className={styles.contactSuccess}>
          <div className={styles.contactSuccessIcon}>✦</div>
          <h3>Message sent.</h3>
          <p>
            Bhavani will get back to you soon. In the meantime, feel free to
            look at the live build or download the resume.
          </p>
          <div className={styles.contactSuccessLinks}>
            <a
              href="https://omg-store27.vercel.app/"
              target="_blank"
              rel="noreferrer"
              className={styles.inlineAction}
            >
              Live commerce build
            </a>
            <a href={resumeHref} className={styles.inlineAction} download>
              Resume PDF
            </a>
          </div>
          <button
            className={styles.secondaryButton}
            onClick={() => setStatus("idle")}
            style={{ marginTop: "1.5rem" }}
          >
            Send another message
          </button>
        </div>
      </div>
    );
  }

  /* ── Form state ── */
  return (
    <div className={styles.contactPanel}>
      <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
        <div className={styles.contactField}>
          <label htmlFor="name">Your name</label>
          <input
            id="name"
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            placeholder="What should Bhavani call you?"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.contactField}>
          <label htmlFor="email">Your Email</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Your Email for Contact?"
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.contactField}>
          <label htmlFor="company">Company or project</label>
          <input
            id="company"
            name="company"
            type="text"
            value={form.company}
            onChange={handleChange}
            placeholder="Team, product, or opportunity"
            disabled={status === "loading"}
          />
        </div>

        <div className={styles.contactField}>
          <label htmlFor="message">What are you building?</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            placeholder="Share the challenge, role, or idea."
            required
            disabled={status === "loading"}
          />
        </div>

        {status === "error" && (
          <p className={styles.contactError}>
            ⚠ {errorMsg || "Failed to send. Try again."}
          </p>
        )}

        <div className={styles.contactActions}>
          <button
            type="submit"
            className={styles.primaryButton}
            disabled={status === "loading"}
            aria-busy={status === "loading"}
          >
            {status === "loading" ? (
              <span className={styles.contactSpinner} aria-label="Sending…" />
            ) : (
              "Start the conversation"
            )}
          </button>
          <a href={resumeHref} className={styles.secondaryButton} download>
            Download resume
          </a>
        </div>
      </form>
    </div>
  );
}

// "use client";

// import { useState } from "react";
// import styles from "@/app/page.module.css";

// export function ContactForm({ email, resumeHref }) {
//   const [form, setForm] = useState({
//     name: "",
//     company: "",
//     message: "",
//   });

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setForm((current) => ({ ...current, [name]: value }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const subject = `Portfolio inquiry from ${form.name || "a potential collaborator"}`;
//     const body = [
//       form.company ? `Company / project: ${form.company}` : "",
//       "",
//       form.message || "Hi Bhavani, I'd love to talk about a role or project.",
//       "",
//       form.name ? `From: ${form.name}` : "",
//     ]
//       .filter(Boolean)
//       .join("\n");

//     window.location.href = `mailto:${email}?subject=${encodeURIComponent(
//       subject,
//     )}&body=${encodeURIComponent(body)}`;
//   };

//   return (
//     <div className={styles.contactPanel}>
//       <form className={styles.contactForm} onSubmit={handleSubmit}>
//         <div className={styles.contactField}>
//           <label htmlFor="name">Your name</label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             value={form.name}
//             onChange={handleChange}
//             placeholder="What should Bhavani call you?"
//           />
//         </div>

//         <div className={styles.contactField}>
//           <label htmlFor="company">Company or project</label>
//           <input
//             id="company"
//             name="company"
//             type="text"
//             value={form.company}
//             onChange={handleChange}
//             placeholder="Team, product, or opportunity"
//           />
//         </div>

//         <div className={styles.contactField}>
//           <label htmlFor="message">What are you building?</label>
//           <textarea
//             id="message"
//             name="message"
//             rows="5"
//             value={form.message}
//             onChange={handleChange}
//             placeholder="Share the challenge, role, or idea."
//           />
//         </div>

//         <div className={styles.contactActions}>
//           <button type="submit" className={styles.primaryButton}>
//             Start the conversation
//           </button>
//           <a href={resumeHref} className={styles.secondaryButton} download>
//             Download resume
//           </a>
//         </div>
//       </form>
//     </div>
//   );
// }
