export const profile = {
  name: 'Jesuva Arockiadoss S',
  role: 'Full Stack Engineer',
  taglineWords: [
    'distributed systems',
    'event-driven architecture',
    'tech writer',
    'high-availability platforms',
    'ai engineering'
  ],
  location: 'Tamil Nadu, India',
  email: 'jesrasto@gmail.com',
  linkedin: 'https://linkedin.com/in/jesuva',
  medium: 'https://medium.com/@jesuva',
  summary:
    "I design and scale high-availability systems — the kind that stay up at 2 a.m. when 2 million messages an hour depend on it. Over the past 5+ years I've moved between frontend performance work and backend distributed systems, usually landing wherever a platform is breaking under its own growth. Lately that means pairing that systems background with AI tooling to ship faster without cutting corners.",
  status: {
    label: 'OPERATIONAL',
    uptime: '99.9%',
    throughput: 2000000,
    throughputLabel: 'messages / day',
    latencyMs: 42,
    lastDeploy: 'Notification Service'
  }
};

export const experience = [
  {
    id: 'saas-platform',
    company: 'High-Growth SaaS Platform',
    role: 'Software Development Engineer II',
    period: 'Jul 2024 — Present',
    location: 'India, Remote',
    current: true,
    summary:
      'Own architecture and delivery for platform-wide notification and community systems used across the product suite of a fast-scaling B2B SaaS company.',
    bullets: [
      'Architected a platform-wide Notifications Service, defining event-driven architecture and REST APIs adopted across 4+ applications — scaled to 2M+ messages/day at 99.9% uptime.',
      'Worked on the Vue \u2192 Nuxt migration onto a layer-based monorepo, creating a shared architecture that now powers 5+ production applications.',
      'Built an AI-powered migration agent that cut Web Component \u2192 Nuxt migration effort by ~60%.',
      'Resolved Kubernetes, Redis and infrastructure bottlenecks, cutting production server restarts by 91% (71 \u2192 6/week).',
      'Improved frontend performance: Lighthouse score 26 \u2192 72 (+177%), bundle size 2MB \u2192 650KB (-68%).',
      'Built an Event Loop Guard with distributed tracing and Grafana dashboards for proactive latency detection.'
    ],
    tech: ['NestJS', 'Node.js', 'Vue', 'Nuxt', 'React', 'TypeScript', 'MongoDB', 'Redis', 'GCP', 'Kubernetes', 'Docker', 'Grafana']
  },
  {
    id: 'edtech-platform',
    company: 'EdTech · Digital Learning Platform',
    role: 'Software Engineer',
    period: 'Mar 2021 — Jul 2024',
    location: 'India, Remote',
    current: false,
    summary:
      'Led frontend architecture migrations and API-driven features for a multi-product learning platform.',
    bullets: [
      'Increased LMS user engagement by 60% by architecting a YouTube API integration end-to-end, from data flow design through QA and rollout.',
      'Led a platform-wide Web Components \u2192 React (TypeScript) migration, establishing component standards adopted across 3+ product lines.',
      'Designed a Microfrontend architecture with shared component libraries, enabling independent deployment across product lines.',
      'Optimized ElasticSearch and Google Cloud Datastore query patterns, cutting bulk report generation time by 64% (70s \u2192 25s).'
    ],
    tech: ['NestJS', 'Node.js', 'React', 'TypeScript', 'Vue', 'ElasticSearch', 'Google Cloud Datastore', 'MongoDB']
  },
  {
    id: 'smb-startup',
    company: 'Early-Stage SMB Analytics Startup',
    role: 'Full Stack Developer',
    period: 'May 2020 — Aug 2020',
    location: 'Bengaluru, India',
    current: false,
    summary: 'Built analytics dashboards that turned raw SMB business data into decisions.',
    bullets: [
      'Built REST API-backed analytics dashboards and reporting modules for SMB clients, designing the data models and backend services behind them.'
    ],
    tech: ['Node.js', 'MongoDB', 'React']
  }
];

// Flagship systems pulled out of the experience section for a deeper,
// metric-first look — the "what did it actually move" view.
export const systems = [
  {
    id: 'notifications',
    name: 'Notifications Service',
    org: 'High-Growth SaaS Platform',
    description:
      'Platform-wide, event-driven notification infrastructure — the shared backbone 4+ applications now send through.',
    metric: '2M+',
    metricLabel: 'messages / day at 99.9% uptime',
    tags: ['Event-driven', 'REST API', 'NestJS', 'Redis']
  },
  {
    id: 'migration-agent',
    name: 'AI Migration Agent',
    org: 'High-Growth SaaS Platform',
    description:
      'An AI-assisted tool that automates Web Component \u2192 Nuxt migrations, handling the repetitive translation work.',
    metric: '~60%',
    metricLabel: 'less migration effort',
    tags: ['LLM Integration', 'Tooling', 'Nuxt']
  },
  {
    id: 'perf-overhaul',
    name: 'Frontend Performance Overhaul',
    org: 'High-Growth SaaS Platform',
    description:
      'Systematic pass on bundle size, render-blocking assets and code-splitting across the client platform.',
    metric: '26 \u2192 72',
    metricLabel: 'Lighthouse score (+177%)',
    tags: ['Performance', 'Vite', 'Webpack']
  },
  {
    id: 'infra-stability',
    name: 'Infrastructure Stability Push',
    org: 'High-Growth SaaS Platform',
    description:
      'Root-caused Kubernetes, Redis and memory-leak issues that were driving repeated production restarts.',
    metric: '91%',
    metricLabel: 'fewer restarts (71 \u2192 6/week)',
    tags: ['Kubernetes', 'Redis', 'Observability']
  },
  {
    id: 'youtube-lms',
    name: 'YouTube API Integration',
    org: 'EdTech Platform',
    description:
      'Turned a passive video library into an interactive learning surface, from data flow design to rollout.',
    metric: '+60%',
    metricLabel: 'LMS engagement',
    tags: ['REST API', 'Product', 'LMS']
  },
  {
    id: 'microfrontend',
    name: 'Microfrontend Architecture',
    org: 'EdTech Platform',
    description:
      'Shared component libraries across product lines, enabling independent deploys and cutting release cycles.',
    metric: '3+',
    metricLabel: 'product lines unified',
    tags: ['Microfrontends', 'React', 'Design Systems']
  }
];

export const skills = [
  { category: 'Languages', items: ['Java', 'JavaScript', 'TypeScript'] },
  { category: 'Frontend', items: ['React', 'Vue', 'Nuxt', 'Redux', 'Pinia', 'Web Components', 'Vite', 'Webpack', 'Microfrontends'] },
  { category: 'Backend', items: ['NestJS', 'Node.js', 'ExpressJS', 'Spring Boot', 'REST APIs', 'Microservices', 'Event-Driven Architecture'] },
  { category: 'Data & Cache', items: ['MongoDB', 'ElasticSearch', 'Google Cloud Datastore', 'Redis'] },
  { category: 'Cloud & DevOps', items: ['Docker', 'Kubernetes', 'GCP', 'CI/CD', 'GitHub Actions', 'Jenkins'] },
  { category: 'Observability & Testing', items: ['Grafana', 'Uptrace', 'Mongo Atlas', 'Jest', 'Playwright', 'JUnit'] },
  { category: 'AI Engineering', items: ['LLM Integration', 'Prompt Engineering', 'AI Agents', 'AI-assisted Code Review'] },
  { category: 'Engineering Practice', items: ['System Design', 'API Design', 'Technical Specs', 'Code Review', 'Agile'] }
];

export const certifications = [
  {
    name: 'Microsoft AI Product Manager Professional Certificate',
    issuer: 'Microsoft / Coursera',
    date: 'Jun 2026'
  },
  {
    name: 'Google Cloud Digital Leader Training Professional Certificate',
    issuer: 'Google Cloud / Coursera',
    date: 'Feb 2025'
  },
  {
    name: 'Flutter & Dart — Complete App Development Specialization',
    issuer: 'Packt / Coursera',
    date: 'Aug 2025'
  }
];

export const articles = [
  {
    id: 'ai-slop',
    title: 'The Strange Way AI Could Make Itself Dumber — AI Slop?',
    excerpt:
      'A look at how the flood of AI-generated content online could end up quietly degrading the very models trained on it.',
    date: 'Jun 2026',
    readTime: '5 min read',
    tag: 'AI & ML',
    url: 'https://medium.com/@jesuva/the-strange-way-ai-could-make-itself-dumber-ai-slop-8bfcec0765ef'
  },
  {
    id: 'observability',
    title: 'Monitoring & Observability: A Developer\u2019s Guide to Keeping Systems Healthy',
    excerpt:
      'A practical walkthrough of tracking performance and health signals across complex, distributed cloud applications.',
    date: 'Feb 2025',
    readTime: '6 min read',
    tag: 'Systems',
    url: 'https://medium.com/@jesuva/monitoring-and-observability-a-developers-guide-to-keeping-systems-healthy-23d3ccfdf8d3'
  },
  {
    id: 'microfrontends',
    title: 'Microfrontends — Deep Dive',
    excerpt:
      'Why frontend architecture choices matter, with a detailed look at implementing, optimizing, and scaling microfrontends.',
    date: 'Feb 2024',
    readTime: '7 min read',
    tag: 'Frontend',
    url: 'https://medium.com/@jesuva/microfrontends-deep-dive-615ffc3d5ed1'
  },
  {
    id: 'docker-microservices',
    title: 'Running Microservices as Docker Containers',
    excerpt: 'Practical Dockerfile patterns and snippets for structuring a microservices architecture.',
    date: 'Aug 2023',
    readTime: '4 min read',
    tag: 'DevOps',
    url: 'https://medium.com/@jesuva/running-microservices-as-docker-containers-9be2808f346f'
  },
  {
    id: 'npm-yarn-pnpm',
    title: 'Node Package Managers: NPM vs Yarn vs PNPM',
    excerpt: 'A quick comparison of the major Node.js package managers and when to reach for each one.',
    date: 'Aug 2023',
    readTime: '3 min read',
    tag: 'Tooling',
    url: 'https://medium.com/@jesuva/node-package-managers-cab41450c2da'
  }
];

export const education = {
  degree: 'Bachelor of Information Technology',
  school: 'National Engineering College, Kovilpatti, Tamil Nadu',
  detail: '87.2% · 2017 — 2021'
};
