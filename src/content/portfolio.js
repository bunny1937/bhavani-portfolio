export const portfolio = {
  person: {
    name: "Bhavani Nehra",
    role: "Full Stack Web Developer",
    location: "Kalyan, Maharashtra, India",
    email: "bhavaninehra@gmail.com",
    resumeHref: "/Bhavani_Nehra_9892603731_9Feb26.pdf",
    headline: "I turn messy business workflows into products people trust.",
    subheadline:
      "Full-stack developer blending product thinking, interface design, and system building to turn offline chaos into clear digital experiences.",
    intro:
      "Bhavani is a Computer Engineering graduate who works best where the problem is still fuzzy, the workflow is still broken, and the product still has to earn trust.",
    availability:
      "Open to full-time roles, freelance builds, and product-minded engineering teams.",
  },
  heroSignals: [
    {
      label: "Offline to live",
      value: "20 years",
      detail:
        "Sanjeevani's paper-based operations mapped into one working dashboard.",
    },
    {
      label: "Engagement lift",
      value: "35%",
      detail:
        "OMG Store launched as a responsive commerce channel instead of DM-based sales.",
    },
    {
      label: "Rooms led",
      value: "100+",
      detail:
        "Students trained in electronics, robotics, and innovation storytelling.",
    },
  ],
  storyPanels: [
    {
      step: "01",
      title: "See friction before writing code",
      copy: "The work starts with observing how people already operate: where time is lost, where information breaks, and where trust disappears.",
      accent: "Operations mapping",
    },
    {
      step: "02",
      title: "Design the system around behavior",
      copy: "Interfaces are shaped around habits, not around feature wishlists. The goal is adoption, not just shipping.",
      accent: "UI with intent",
    },
    {
      step: "03",
      title: "Build for momentum, not novelty",
      copy: "From dashboards to commerce flows, the stack is chosen to reduce friction and make the next release easier.",
      accent: "Full-stack execution",
    },
    {
      step: "04",
      title: "Translate complexity into clarity",
      copy: "Teaching, client collaboration, and product delivery all rely on the same skill: making technical decisions legible to real people.",
      accent: "Communication under pressure",
    },
  ],
  principles: [
    "Understand the workflow before proposing the interface.",
    "Use visual hierarchy to guide action, not decorate emptiness.",
    "Make each feature prove its value through speed, clarity, or control.",
  ],
  projects: [
    {
      id: "sanjeevani",
      index: "01",
      name: "Sanjeevani Service",
      label: "Operations dashboard",
      timeframe: "July 2025 - August 2025",
      hook: "A service business ran for 20 years on paper. The challenge was to digitize operations without breaking the team's habits.",
      summary:
        "Built a role-aware service management dashboard that connected clients, reminders, expenses, labour, invoices, and property timelines into one operating system.",
      preview: "/previews/sanjeevani-dashboard.svg",
      previewAlt:
        "A dashboard interface for service management with clients, reminders, invoices, and operational metrics.",
      stack: ["Next.js", "MongoDB", "Firebase", "App Router", "Responsive UI"],
      metrics: [
        { value: "40%", label: "efficiency gain" },
        { value: "20yr", label: "offline history digitized" },
        { value: "1", label: "shared source of truth" },
      ],
      problem: [
        "Client histories, reminders, labour records, expenses, and invoices lived across paper files and fragmented memory.",
        "Manual quotation and invoice generation slowed daily operations and made reporting unreliable.",
      ],
      thinking: [
        "Started by shadowing the team to map how work actually moved from reminder to execution to payment.",
        "Structured the product around existing business nouns so the interface felt familiar on day one.",
      ],
      system: [
        "Modular dashboard architecture split into clients, services, reminders, labour, expenses, and billing.",
        "Persistent data in MongoDB with Firebase-powered real-time cues for time-sensitive operations.",
        "Automation for reports, invoices, and quotations to reduce repeat admin work.",
      ],
      impact: [
        "Operational efficiency improved by 40% through automated records and faster retrieval of service history.",
        "The business moved from scattered offline processes to a trackable digital workflow that could scale.",
      ],
      architecture: [
        "Client + property records feed service timelines",
        "Reminder engine triggers operational follow-ups",
        "Billing layer generates invoices and quotations from live data",
      ],
      insight:
        "The success of this project came from translating an old-world workflow into a modern interface without forcing the team to relearn their job.",
    },
    {
      id: "omg-store",
      index: "02",
      name: "OMG Store Commerce",
      label: "E-commerce platform",
      timeframe: "November 2024 - March 2025",
      hook: "A clothing brand had demand on social, but no store to capture it. The brief was simple: turn attention into a buying experience.",
      summary:
        "Designed and developed a full-stack storefront that helped the brand shift from manual DM selling to a polished digital commerce channel.",
      preview: "/previews/omg-store.svg",
      previewAlt:
        "A modern ecommerce interface showing product collections, shopping actions, and a mobile checkout preview.",
      stack: [
        "React.js",
        "Node.js",
        "MongoDB",
        "REST APIs",
        "Responsive Design",
      ],
      liveUrl: "https://omg-store27.vercel.app/",
      metrics: [
        { value: "35%", label: "engagement lift" },
        { value: "4 mo", label: "from brief to launch" },
        { value: "100%", label: "mobile-first journey" },
      ],
      problem: [
        "Customers discovered products through social media but had no direct, structured buying flow.",
        "The brand needed a storefront that felt credible, easy to browse on mobile, and aligned with its visual identity.",
      ],
      thinking: [
        "Worked closely with the client to understand brand tone, catalogue structure, and where people dropped off in the buying journey.",
        "Prioritized product discovery, responsive browsing, and a friction-light purchase path over unnecessary features.",
      ],
      system: [
        "React frontend for a fast catalogue and shopping experience, backed by Node.js APIs and MongoDB data models.",
        "Product browsing, cart flow, and purchase interactions designed to stay legible across mobile and desktop.",
      ],
      impact: [
        "Customer engagement improved by 35% after launch.",
        "The brand gained a dedicated revenue channel instead of relying on message-based selling.",
      ],
      architecture: [
        "Catalogue layer structures collections and product detail pages",
        "Cart and order APIs manage transactions and customer intent",
        "Responsive UI keeps the brand consistent from landing to checkout",
      ],
      insight:
        "This build proved that conversion is as much about confidence and clarity as it is about code.",
    },
    {
      id: "robokart",
      index: "03",
      name: "Robokart Training Labs",
      label: "Technical training program",
      timeframe: "August 2024",
      hook: "Teaching 60-100 students at a time required more than technical knowledge. It required pacing, clarity, and energy.",
      summary:
        "Led 4-day technical workshops across colleges, combining storytelling, live demos, and hands-on exercises around robotics and electronics.",
      preview: "/previews/robokart-lab.svg",
      previewAlt:
        "A training program visual with stage presentation, workshop agenda, and cohort metrics.",
      stack: [
        "Technical Training",
        "Public Speaking",
        "Workshop Design",
        "Robotics",
      ],
      metrics: [
        { value: "100+", label: "students per cohort" },
        { value: "4", label: "days of immersion" },
        { value: "3+", label: "core topics delivered" },
      ],
      problem: [
        "Students had theoretical knowledge but limited hands-on intuition around electronics and robotics.",
        "Sessions had to keep large rooms engaged while still making technical concepts feel accessible.",
      ],
      thinking: [
        "Opened with real-world problems before introducing the underlying technical concept.",
        "Used demonstrations and pacing shifts to keep the room attentive and involved.",
      ],
      system: [
        "Structured each workshop as a sequence of concept framing, live explanation, and practical application.",
        "Adapted presentation style in real time based on room energy and student confidence.",
      ],
      impact: [
        "Delivered workshops for 60-100 students across multiple colleges.",
        "Strengthened the communication muscle that now feeds client work, product demos, and engineering collaboration.",
      ],
      architecture: [
        "Session arc designed for attention, not just information density",
        "Hands-on modules paired theory with visible outcomes",
        "Communication became a product skill, not a side skill",
      ],
      insight:
        "The training work sharpened the ability to explain complex systems simply, which now shows up in product delivery and client communication.",
    },
  ],
  capabilities: [
    {
      name: "Product framing",
      outcome:
        "Maps vague business problems into product decisions people can actually adopt.",
      proof:
        "Sanjeevani's interface mirrored how the team already worked, which reduced adoption friction.",
      relatedProject: "Sanjeevani Service",
      preview: "/previews/sanjeevani-dashboard.svg",
      tags: ["Discovery", "Workflow mapping", "Information architecture"],
    },
    {
      name: "Interface systems",
      outcome:
        "Builds responsive interfaces that feel intentional on both mobile and desktop.",
      proof:
        "OMG Store focused on fast product discovery and a clearer path from interest to transaction.",
      relatedProject: "OMG Store Commerce",
      preview: "/previews/omg-store.svg",
      tags: ["Responsive UI", "Visual hierarchy", "Conversion flow"],
    },
    {
      name: "Backend execution",
      outcome:
        "Connects frontend flows to real data models, APIs, and business logic.",
      proof:
        "Dashboard modules, billing automation, and ecommerce flows were shipped as end-to-end systems.",
      relatedProject: "Sanjeevani Service ",
      preview: "/previews/sanjeevani-dashboard.svg",
      tags: ["MongoDB", "Firebase", "REST APIs"],
    },
    {
      name: "Client collaboration",
      outcome:
        "Works closely with stakeholders to turn goals into shipped outcomes without losing the brief.",
      proof:
        "OMG Store moved from concept to launch through direct client collaboration over four months.",
      relatedProject: "OMG Store Commerce",
      preview: "/previews/omg-store.svg",
      tags: ["Alignment", "Iteration", "Delivery"],
    },
    {
      name: "Technical storytelling",
      outcome:
        "Explains complex ideas clearly, whether the audience is a client, team, or a room full of students.",
      proof:
        "Robokart workshops trained large cohorts while keeping technical concepts understandable and energizing.",
      relatedProject: "Robokart Training Labs",
      preview: "/previews/robokart-lab.svg",
      tags: ["Teaching", "Presentation", "Systems thinking"],
    },
  ],
  experience: [
    {
      timeframe: "2025",
      role: "Web Developer",
      company: "Sanjeevani Services",
      built:
        "Designed and shipped a service management dashboard covering reminders, labour, expenses, property history, and billing.",
      changed:
        "Manual operational overhead dropped, reporting became faster, and the business gained a digital operating layer.",
    },
    {
      timeframe: "2024 - 2025",
      role: "Freelance Full Stack Developer",
      company: "OMG Store",
      built:
        "Created a responsive full-stack ecommerce platform for a clothing brand from concept through launch.",
      changed:
        "The brand gained a dedicated online sales channel and saw a measurable lift in customer engagement.",
    },
    {
      timeframe: "2024",
      role: "Technical Trainer",
      company: "Robokart Company",
      built:
        "Led high-energy workshops on robotics, electronics, and innovation across degree colleges in Mumbai.",
      changed:
        "Large groups of students received clearer, more practical exposure to technical concepts and applied learning.",
    },
    {
      timeframe: "2022",
      role: "Developer",
      company: "Sahu Technologies",
      built:
        "Developed foundation skills across web development, Python, digital marketing, and design while delivering real assignments.",
      changed:
        "Built the professional discipline to ship under deadlines and collaborate across functions early in the career.",
    },
  ],
  education: [
    {
      title: "B.E. in Computer Engineering",
      school: "KC College of Engineering & Management Studies & Research",
      timeframe: "2022 - 2025",
    },
    {
      title: "High School Diploma in Computer Science",
      school: "K.M. Agrawal College",
      timeframe: "2018 - 2020",
    },
  ],
  insights: [
    {
      label: "Behind the build",
      title: "Workflow first",
      copy: "The strongest products here started with observing how work already happened before choosing UI patterns or stack decisions.",
    },
    {
      label: "Delivery instinct",
      title: "Clarity scales trust",
      copy: "Whether it is a dashboard, a storefront, or a workshop, clear communication is part of the product experience.",
    },
    {
      label: "Creative edge",
      title: "Design is leverage",
      copy: "UI/UX thinking, responsive design, and visual presentation are used as strategic tools to drive action, not decoration.",
    },
  ],
};
