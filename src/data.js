/**
 * ─────────────────────────────────────────────────────────────
 *  EDIT THIS FILE — it's the single source of truth for the site.
 *  Everything below is placeholder content. Replace it with yours.
 * ─────────────────────────────────────────────────────────────
 */

export const personal = {
  name: "Sunny Bhagwat",
  // Short handle shown in the nav (e.g. your first name or @handle)
  handle: "sunny.dev",
  role: "Software Developer",
  // One or two sentences. Shows under your name in the hero.
  tagline:
    "I build fast, reliable web apps, from Postgres schemas to pixel-level UI. Currently focused on developer tools and AI-powered products.",
  location: "Mumbai, India",
  // Set to "" to hide the availability line
  availability: "available for work",
  email: "sunnybhagwat35@gmail.com",
  // Put a resume.pdf inside /public and this link will work after deploy.
  // Set to "" to hide the resume button.
  resumeUrl: "/resume.pdf",
};

export const socials = [
  { label: "GitHub", url: "https://github.com/SunnyBhagwat35" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/sunnybhagwat/" },
  { label: "X / Twitter", url: "https://x.com/SunnyBhagwat35" },
];

export const about = {
  // Each string renders as a paragraph.
  paragraphs: [
    "Python backend engineer with 5 years of production experience building applications and RESTful APIs, including hands-on",
    "building GenAl applications running in production. Integrated (chat + embeddings) into live services and orchestrated multi-step LLM workflows" ,
    "using LangChain. Built end-to-end RAG pipelines on PostgreSQL + pgvector powering chatbot retrieval over enterprise email and document data. Strong in PostgreSQL",
    "ORM, query optimization and indexing, version control with Git, and AWS (ECS, S3, EC2, SQS), docker.",
    "collaborating with DevOps for issue mitigations and data migrations. Fluent in English, Hindi and Marathi."
  ],
  skills: [
    {
      group: "Languages",
      items: ["Python", "Javascript", "SQL", "C/C++", "Go", "HTML", "CSS"],
    },
    {
      group: "Frameworks",
      items: ["FastAPI", "Flask", "Django", "Langchain", "Langgraph", "React", "Node.js",],
    },
    {
      group: "Infra & Tools",
      items: ["PostgreSQL", "Redis", "Docker", "AWS", "GCP", "MongoDB", "Git/GitHub", "Ansible", "Postman", "Kubernetes"],
    },
  ],
};

export const projects = [
  {
    title: "DeployEase",
    year: "2025",
    description:
      "A minimal Vercel like deployment platform. Give it a GitHub URL of a JS/Vite projec and it builds the project in an isolated container, uploads the static output to object storage, streams the build logs to your browser in real time, and serves the built site on its own subdomain.",
    tech: ["python", "bash", "S3", "ECS", "MinIO", "pub/sub", "Redis", "socket.io"],
    liveUrl: "#",
    codeUrl: "https://github.com/SunnyBhagwat35/deployease",
  },
  {
    title: "PrivaseMail (Company Project)",
    year: "2023",
    description:
    "Allows users to generate multiple email aliases after signup, which act as proxy emails and can be enabled or disabled with a single click. Tracks all emails received through each alias for better visibility and control.\
    Enhances protection against phishing and data breaches; includes basic rate limiting to block spamming attempts.",
    tech: ["Python", "Postfix", "Django", "Redis", "Postgresql", "AWS", "docker"],
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    title: "BraenRepo (Client Project)",
    year: "2026",
    description:
    "Lets users sync their Outlook and OneDrive data with one click. The platform retrieves all emails and documents and sends them to a RAG pipeline. \
    Provides a chatbot through which users can ask questions based on their fetched documents and emails, using semantic search or SQL search as needed. \
    Search performance is accurate and optimized through indexing, metadata filters, and role-based retrieval strategies.",
    tech: ["React", "FastAPI", "PostgreSQL", "WebSockets"],
    liveUrl: "https://prerepo.braen.ai/",
    codeUrl: "#",
  },
  // {
  //   title: "gh-standup",
  //   year: "2024",
  //   description:
  //     "CLI that turns your GitHub activity into a daily standup summary. Featured on Hacker News front page.",
  //   tech: ["Go", "GitHub API"],
  //   liveUrl: "", // set to "" to hide the Live link
  //   codeUrl: "https://github.com/yourusername/gh-standup",
  // },
];

export const experience = [
  {
    role: "Python Developer",
    company: "Arcitech",
    period: "02/2024 — Present",
    points: [
      " Enhanced an internal AI interview platform by offloading video compression to a dedicated AWS ECS container using FFmpeg, reducing load on the main application and decreasing video size by 40–60%, resulting in faster recruiter access and lower S3 storage costs.",
      "Implemented an eligibility-based job recommendation by comparing candidate resumes with job descriptions using vector similarity, improving candidate filtering and reducing manual screening time.",
      "Developed a scalable data ingestion pipeline to reliably scrape user emails and files from Outlook and OneDrive using MS Graph API, enabling parallel data retrieval for multiple users with improved throughput and reduced sync failures by ∼ 25%.",
      "Integrated the ingested data into a production-ready RAG pipeline, enabling fast and context-aware document/email retrieval for the chatbot.",
      "Optimized vector database performance by implementing efficient indexing, metadata filters, and role-based retrieval strategies, reducing query latency by 40% for large-scale datasets.",
      "Addressed and resolved major blockers across multiple projects by assisting DevOps and development teams with data migrations, environment setup, and initial project/module configurations",
    ],
  },
  {
    role: "Software Developer",
    company: "FeelyPrivacy",
    period: "06/2022 — 02/2024",
    points: [
    "Engineered the PrivaseMail platform with a Postfix server, Django, and PostgreSQL, enabling users to seamlessly generate multiple email aliases for each website. This led to a 40% reduction in spam, significantly enhancing protection against phishing and data breaches.",
    "Implemented effective rate-limiting measures, reducing spamming incidents by 40% through automated actions prevention.",
    "Developed a high-performance Vue.js-based browser extension for PrivaseMail, paired with a Django-based API, resulting in a 20% decrease in page loading times and a 25% enhancement in data transfer for an improved overall user experience.",
    "Integrated Elasticsearch to fine-tune search functionality and optimizing the user experience, resulting in a 20% enhancement in search response times.",
    "Integrated the PhonePe payment gateway for a single subscription model, streamlining user access to all product subscriptions with a single payment. This transformation eliminated the manual workflow, reducing processing time by 40% and   enhancing user satisfaction with a seamless payment experience.",
    ],
  },
  {
    role: "Fullstack software intern",
    company: "FeelyPrivacy",
    period: "10/2021 — 01/2022",
    points: [
      "Collaberated and learned from senior developers about production systems.",
      "Contributed to internal medtech flask application.",
      "got hands on experience on  flask, redis, vue.js",
    ],
  },
];
