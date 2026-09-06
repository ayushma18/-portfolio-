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

/** Anchors rendered in the navigation, in page order. */
export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
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
    icon: 'brain',
    title: 'Model interpretability',
    body: 'Capturing hidden activations from large language models to study refusal directions and steering vectors.',
  },
  {
    icon: 'waveform',
    title: 'Applied deep learning',
    body: 'Audio and vision classifiers built end to end — feature pipelines, tuning sweeps and honest evaluation.',
  },
  {
    icon: 'layers',
    title: 'Full-stack engineering',
    body: 'React front ends over Django and FastAPI services, containerised and wired together with real APIs.',
  },
  {
    icon: 'network',
    title: 'Networks & systems',
    body: 'Subnetting, routing and embedded work — from OSPF topologies to microcontroller firmware.',
  },
];

/**
 * Projects. Every `repo` is a real, public repository; a project with no
 * public repository carries no link rather than a dead one.
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
    subtitle: 'Llama 3.1 8B Instruct',
    category: 'Machine Learning',
    year: '2026',
    status: 'In progress',
    description:
      'Loads Llama 3.1 8B Instruct and captures per-layer hidden activations for interpretability work on refusal directions and steering vectors. The pipeline is device-agnostic — the same scripts run on CUDA, MPS or CPU — with 4-bit NF4 quantisation so it fits a 15 GB T4, plus a Colab deployment notebook. 22 tests cover both milestones.',
    tech: ['Python', 'PyTorch', 'Transformers', 'Hugging Face', 'Colab'],
    repo: 'https://github.com/ayushma18/Major_project',
    accent: ['#3751ff', '#7b3fe4'],
    featured: true,
  },
  {
    title: 'Acoustic Side-Channel Attack',
    subtitle: 'Keystroke recovery from sound',
    category: 'Machine Learning',
    year: '2026',
    description:
      'A CNN pipeline that identifies which key was pressed from the sound of the keystroke alone. Mel-spectrogram features, Optuna hyperparameter search and Grad-CAM interpretability, with dedicated shuffle and stress-test notebooks to verify the model generalises rather than memorising the recording session. 82.50% accuracy in an unseen environment.',
    tech: ['PyTorch', 'CNN', 'Optuna', 'Grad-CAM', 'Gradio'],
    repo: 'https://github.com/ayushma18/keyboard_sound',
    accent: ['#0e7490', '#3751ff'],
    featured: true,
  },
  {
    title: 'Voice-to-Sign-Language Generator',
    subtitle: 'English & Nepali speech to signed video',
    category: 'Full-Stack',
    year: '2026',
    description:
      'Converts spoken English or Nepali into a sign-language video. A React front end talks to a Django REST backend, which delegates to a separate FastAPI service running Whisper for transcription and MoviePy for clip concatenation. The three services run together under Docker Compose.',
    tech: ['React', 'Django REST', 'FastAPI', 'Whisper', 'MoviePy', 'Docker'],
    repo: 'https://github.com/ayushma18/sign_language',
    accent: ['#7b3fe4', '#c026d3'],
    featured: true,
  },
  {
    title: 'TIA Airport Network Design',
    subtitle: 'Enterprise topology in Packet Tracer',
    category: 'Networks & Systems',
    year: '2026',
    description:
      'A complete enterprise network for Tribhuvan International Airport. A single /20 block is divided by VLSM into ten right-sized LANs and routed with multi-area OSPF across four areas, carrying three trunked VLANs over eleven switches, with the terminal and security zones dual-homed for redundancy.',
    tech: ['Cisco Packet Tracer', 'OSPF', 'VLSM', 'VLAN'],
    repo: 'https://github.com/ayushma18/TIA-Network-Design',
    accent: ['#0f766e', '#0e7490'],
  },
  {
    title: 'Vanmala Nepal',
    subtitle: 'Hemp storefront, no framework',
    category: 'Full-Stack',
    year: '2026',
    description:
      'A production-ready single-page storefront with live search, faceted filtering, quick-view, a cart drawer and a multi-step checkout covering Nepali payment methods. Built with no framework and no build step; state persists to localStorage. Ships focus-trapped modals, WCAG-AA contrast, JSON-LD and a sitemap.',
    tech: ['HTML5', 'Tailwind CSS', 'JavaScript', 'Accessibility', 'SEO'],
    repo: 'https://github.com/ayushma18/Vanmala',
    accent: ['#15803d', '#0f766e'],
  },
  {
    title: 'FinSathi',
    subtitle: 'Financial companion for women',
    category: 'Full-Stack',
    year: '2025',
    description:
      'Expense tracking, savings goals and analytics wrapped in a gamified learning track, with an AI chatbot advisor and voice commands. React and Vite on the front end with shadcn/ui and Recharts; Django REST with JWT authentication behind it.',
    tech: ['React', 'Vite', 'Django REST', 'JWT', 'Recharts', 'Zustand'],
    repo: 'https://github.com/ayushma18/finsathi',
    accent: ['#b45309', '#dc2626'],
  },
  {
    title: 'Digit Recognition from Scratch',
    subtitle: 'No ML libraries',
    category: 'Machine Learning',
    year: '2026',
    description:
      'A neural network for MNIST written without any machine-learning library — the forward pass, backpropagation and gradient descent are implemented directly in NumPy. Includes parameter-tuning sweeps, a confusion matrix and accuracy/loss curves.',
    tech: ['Python', 'NumPy', 'Neural Networks'],
    repo: 'https://github.com/ayushma18/Digit-recognition-from-scratch',
    accent: ['#4338ca', '#3751ff'],
  },
  {
    title: 'Agrasar Cooperative',
    subtitle: 'Member and savings platform',
    category: 'Full-Stack',
    year: '2026',
    description:
      'A member-management and savings-tracking platform for a cooperative, with a React front end over a Django REST API providing authenticated records and full CRUD.',
    tech: ['React', 'Django REST', 'JavaScript'],
    repo: 'https://github.com/ayushma18/agarasar-web',
    accent: ['#1d4ed8', '#0e7490'],
  },
];

export const skillGroups = [
  {
    icon: 'brain',
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
    icon: 'code',
    title: 'Languages',
    skills: ['Python', 'C++', 'C', 'JavaScript'],
  },
  {
    icon: 'layers',
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
    icon: 'server',
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
    icon: 'network',
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
    icon: 'tools',
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
    logo: 'tu',
  },
  {
    degree: 'Higher Secondary, Science',
    institution: 'United Academy',
    period: 'Completed',
    url: 'https://academy.united.edu.np/',
    logo: 'united',
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
