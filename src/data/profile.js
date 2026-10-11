/**
 * Single source of truth for every piece of content on the site.
 *
 * Components render this data; they never hard-code copy. Editing the
 * portfolio means editing this file — nothing else.
 */

export const profile = {
  name: 'Ayushma Pudasaini',
  role: 'Computer Engineering Undergraduate',
  tagline: 'Deep learning, model interpretability and full-stack systems.',
  location: 'Lalitpur, Nepal',
  /* Shown in the hero masthead. Kept here so the claim is edited in one
     place when it stops being true. */
  availability: 'Open to internships & research collaborations',
  email: '079bct030.ayushma@pcampus.edu.np',
  bio: [
    "I'm a fourth-year Computer Engineering undergraduate at Pulchowk Campus, IOE, Tribhuvan University.",
    'My work sits between machine learning research and the engineering needed to make it usable — training and probing models on one side, shipping the APIs and interfaces around them on the other.',
  ],
  quote: "I don't give up when I fail.",
};

export const socials = {
  github: 'https://github.com/ayushma18',
  linkedin: 'https://www.linkedin.com/in/ayushma-pudasaini-443677276/',
};

/**
 * Anchors rendered in the navigation, in page order.
 *
 * Projects come first: on a portfolio the work is the argument, so it leads
 * rather than sitting behind a biography.
 */
export const navLinks = [
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'recognition', label: 'Recognition' },
  { id: 'contact', label: 'Contact' },
];

export const stats = [
  { value: '2027', label: 'Expected graduation' },
  { value: '8', label: 'Featured projects' },
  { value: '82.5%', label: 'Best model accuracy' },
];

export const focusAreas = [
  {
    title: 'Model interpretability',
    body: 'Capturing hidden activations from large language models to study refusal directions and steering vectors.',
  },
  {
    title: 'Applied deep learning',
    body: 'Audio and vision classifiers built end to end — feature pipelines, tuning sweeps and honest evaluation.',
  },
  {
    title: 'Full-stack engineering',
    body: 'React front ends over Django and FastAPI services, containerised and wired together with real APIs.',
  },
  {
    title: 'Networks & systems',
    body: 'Subnetting, routing and embedded work — from OSPF topologies to microcontroller firmware.',
  },
];

/**
 * Projects. Every `repo` is a real, public repository; a project with no
 * public repository carries no link rather than a dead one.
 *
 * `impact` is the one measurable outcome a reader should take away — a
 * portfolio card that only says what a thing *is* gives no evidence. Every
 * value here comes from that repository's own README, never an estimate.
 */
export const projectCategories = [
  'All',
  'Machine Learning',
  'Full-Stack',
  'Networks & Systems',
];

export const projects = [
  {
    title: 'LLM Activation Capture',
    impact: '22 tests passing · 4-bit NF4 fits an 8B model on a 15 GB T4',
    subtitle: 'Llama 3.1 8B Instruct',
    category: 'Machine Learning',
    year: '2026',
    status: 'In progress',
    description:
      'Loads Llama 3.1 8B Instruct and captures per-layer hidden activations for interpretability work on refusal directions and steering vectors. The pipeline is device-agnostic — the same scripts run on CUDA, MPS or CPU — with 4-bit NF4 quantisation so it fits a 15 GB T4, plus a Colab deployment notebook. 22 tests cover both milestones.',
    tech: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Colab'],
    repo: 'https://github.com/ayushma18/Major_project',
    featured: true,
  },
  {
    title: 'Acoustic Side-Channel Attack',
    impact: '82.50% accuracy in an unseen recording environment',
    subtitle: 'Keystroke recovery from sound',
    category: 'Machine Learning',
    year: '2026',
    description:
      'A CNN pipeline that identifies which key was pressed from the sound of the keystroke alone. Mel-spectrogram features, Optuna hyperparameter search and Grad-CAM interpretability, with dedicated shuffle and stress-test notebooks to verify the model generalises rather than memorising the recording session. 82.50% accuracy in an unseen environment.',
    tech: ['PyTorch', 'CNN', 'Optuna', 'Grad-CAM', 'Gradio'],
    repo: 'https://github.com/ayushma18/keyboard_sound',
    featured: true,
  },
  {
    title: 'Voice-to-Sign-Language Generator',
    impact: '3 services orchestrated under Docker Compose · English + Nepali',
    subtitle: 'English & Nepali speech to signed video',
    category: 'Full-Stack',
    year: '2026',
    description:
      'Converts spoken English or Nepali into a sign-language video. A React front end talks to a Django REST backend, which delegates to a separate FastAPI service running Whisper for transcription and MoviePy for clip concatenation. The three services run together under Docker Compose.',
    tech: ['React', 'Django REST', 'FastAPI', 'Whisper', 'MoviePy', 'Docker'],
    repo: 'https://github.com/ayushma18/sign_language',
    featured: true,
  },
  {
    title: 'TIA Airport Network Design',
    impact: '10 LANs from a single /20 · 4 OSPF areas · 11 switches',
    subtitle: 'Enterprise topology in Packet Tracer',
    category: 'Networks & Systems',
    year: '2026',
    description:
      'A complete enterprise network for Tribhuvan International Airport. A single /20 block is divided by VLSM into ten right-sized LANs and routed with multi-area OSPF across four areas, carrying three trunked VLANs over eleven switches, with the terminal and security zones dual-homed for redundancy.',
    tech: ['Cisco Packet Tracer', 'OSPF', 'VLSM', 'VLAN'],
    repo: 'https://github.com/ayushma18/TIA-Network-Design',
  },
  {
    title: 'Vanmala Nepal',
    impact: '18 products · no framework, no build step · WCAG-AA',
    subtitle: 'Hemp storefront, no framework',
    category: 'Full-Stack',
    year: '2026',
    description:
      'A production-ready single-page storefront with live search, faceted filtering, quick-view, a cart drawer and a multi-step checkout covering Nepali payment methods. Built with no framework and no build step; state persists to localStorage. Ships focus-trapped modals, WCAG-AA contrast, JSON-LD and a sitemap.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Accessibility', 'SEO'],
    repo: 'https://github.com/ayushma18/Vanmala',
  },
  {
    title: 'FinSathi',
    impact: 'Tracking, goals, analytics and an AI advisor in one app',
    subtitle: 'Financial companion for women',
    category: 'Full-Stack',
    year: '2025',
    description:
      'Expense tracking, savings goals and analytics wrapped in a gamified learning track, with an AI chatbot advisor and voice commands. React and Vite on the front end with shadcn/ui and Recharts; Django REST with JWT authentication behind it.',
    tech: ['React', 'Vite', 'Django REST', 'JWT', 'Recharts', 'Zustand'],
    repo: 'https://github.com/ayushma18/finsathi',
  },
  {
    title: 'Digit Recognition from Scratch',
    impact: 'Backpropagation derived by hand — no ML library',
    subtitle: 'No ML libraries',
    category: 'Machine Learning',
    year: '2026',
    description:
      'A neural network for MNIST written without any machine-learning library — the forward pass, backpropagation and gradient descent are implemented directly in NumPy. Includes parameter-tuning sweeps, a confusion matrix and accuracy/loss curves.',
    tech: ['Python', 'NumPy', 'Neural Networks'],
    repo: 'https://github.com/ayushma18/Digit-recognition-from-scratch',
  },
  {
    title: 'Agrasar Cooperative',
    impact: 'Authenticated member records with full CRUD',
    subtitle: 'Member and savings platform',
    category: 'Full-Stack',
    year: '2026',
    description:
      'A member-management and savings-tracking platform for a cooperative, with a React front end over a Django REST API providing authenticated records and full CRUD.',
    tech: ['React', 'Django REST', 'JavaScript'],
    repo: 'https://github.com/ayushma18/agarasar-web',
  },
];

export const skillGroups = [
  {
    title: 'Machine Learning',
    skills: [
      'PyTorch',
      'Transformers',
      'Hugging Face',
      'CNNs',
      'Grad-CAM',
      'Optuna',
      'Whisper',
      'NumPy',
      'Pandas',
    ],
  },
  {
    title: 'Languages',
    skills: ['Python', 'C++', 'C', 'JavaScript'],
  },
  {
    title: 'Front-end',
    skills: [
      'React',
      'Vite',
      'Tailwind CSS',
      'shadcn/ui',
      'HTML5',
      'CSS3',
      'Recharts',
      'Figma',
    ],
  },
  {
    title: 'Back-end',
    skills: [
      'Django',
      'Django REST Framework',
      'FastAPI',
      'REST APIs',
      'JWT auth',
      'PostgreSQL',
    ],
  },
  {
    title: 'Networks & Embedded',
    skills: [
      'Cisco Packet Tracer',
      'OSPF',
      'VLSM & VLANs',
      'Arduino',
      'Zephyr RTOS',
    ],
  },
  {
    title: 'Tooling',
    skills: [
      'Git & GitHub',
      'Docker Compose',
      'Linux',
      'Jupyter',
      'Google Colab',
      'AWS S3',
      'Azure',
      'LaTeX',
    ],
  },
];

export const experience = [
  {
    title: 'Seeds for the Future',
    organization: 'Huawei Technologies',
    period: '2025',
    description:
      "Selected for Huawei's global technology and leadership programme, which brings together students from across the region for training in emerging technologies.",
    tags: ['Emerging tech', 'Leadership'],
    kind: 'programme',
  },
  {
    title: 'Hackathon Participant',
    organization: 'Multiple events',
    period: '2023 — Present',
    description:
      'Building and shipping under time pressure with small teams across several hackathons and coding competitions.',
    tags: ['Rapid prototyping', 'Teamwork'],
    kind: 'activity',
  },
  {
    title: 'Student Volunteer',
    organization: 'Pulchowk Campus',
    period: 'Sep 2022 — Present',
    description:
      'Helping organise technical events and workshops on campus, from logistics through to running sessions on the day.',
    tags: ['Event operations', 'Communication'],
    kind: 'activity',
  },
];

export const education = [
  {
    degree: 'B.E. in Computer Engineering',
    institution: 'Pulchowk Campus, IOE, Tribhuvan University',
    period: '2023 — 2027',
    note: 'Roll no. 079BCT030',
    url: 'https://ioe.tu.edu.np/',
  },
  {
    degree: 'Higher Secondary, Science',
    institution: 'United Academy',
    period: 'Completed',
    url: 'https://academy.united.edu.np/',
  },
];

export const affiliations = [
  {
    name: 'IEEE Computer Society',
    role: 'Member',
    url: 'https://www.computer.org/',
    monogram: 'IEEE',
  },
  {
    name: 'LOCUS',
    role: 'Member',
    url: 'https://locus.com.np/',
    monogram: 'LC',
  },
];

/**
 * Awards and certificates in one list. `document` points at a file in
 * /public and, when present, the card opens an in-page viewer.
 */
export const recognition = [
  {
    kind: 'Award',
    title: 'Best Group Project',
    organization: 'Pulchowk Campus',
    year: '2024',
    description:
      'Awarded for a fire and smoke detection alarm system built on an Arduino Uno, combining sensor readings into a real-time alert.',
  },
  {
    kind: 'Certificate',
    title: 'Django Web Development',
    organization: 'CodeIt',
    year: '2024',
    description:
      'Full-stack web development with the Django framework, covering models, views, templates and REST APIs.',
    document: '/assets/codeit_certificate.pdf',
  },
];
