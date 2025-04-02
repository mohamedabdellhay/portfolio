const projectsData = [
  {
    img: "./images/Rectangle 22.jpg",
    title: "ChertNodes",
    description: "Minecraft servers hosting platform",
    tags: ["HTML", "SCSS", "Python", "Flask"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "ProtectX",
    description: "Application for increasing privacy and security",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "Kahoot Answers",
    description: "Get answers to your kahoot quiz",
    tags: ["Vue", "CSS", "JavaScript"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "ProtectX",
    description: "Application for increasing privacy and security",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "Kahoot Answers",
    description: "Get answers to your kahoot quiz",
    tags: ["Vue", "CSS", "JavaScript"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "ProtectX",
    description: "Application for increasing privacy and security",
    tags: ["React", "Express", "MongoDB", "Node.js"],
    links: ["Live <~>", "Cached >= "],
  },
  {
    img: "./images/Rectangle 22.jpg",
    title: "Kahoot Answers",
    description: "Get answers to your kahoot quiz",
    tags: ["Vue", "CSS", "JavaScript"],
    links: ["Live <~>", "Cached >= "],
  },
];

const smallProjectsData = [
  {
    title: "Todo List App",
    technologies: ["React", "Node.js", "MongoDB"],
    description:
      "A simple to-do list app that allows users to add and manage tasks.",
    action: {
      title: "GitHub <~>",
      uri: "https://github.com/yourusername/todo-app",
    },
  },
  {
    title: "Weather App",
    technologies: ["React", "OpenWeather API", "CSS"],
    description:
      "An app that displays the current weather and forecasts based on user location.",
    action: {
      title: "Live <~>",
      uri: "https://yourweatherapp.com",
    },
  },
  {
    title: "Expense Tracker",
    technologies: ["Vue.js", "Firebase", "Bootstrap"],
    description:
      "An expense tracking app that helps users monitor their monthly spending.",
    action: {
      title: "Github <~>",
      uri: "https://github.com/yourusername/expense-tracker",
    },
  },
  {
    title: "URL Shortener",
    technologies: ["Node.js", "Express", "MongoDB"],
    description: "A simple URL shortener that generates shareable short links.",
    action: {
      title: "Live <~>",
      uri: "https://yoururlshortener.com",
    },
  },
  {
    title: "Chat App",
    technologies: ["React", "Socket.io", "Node.js"],
    description:
      "A real-time chat application that allows users to communicate instantly.",
    action: {
      title: "Github <~>",
      uri: "https://github.com/yourusername/chat-app",
    },
  },
];

const Skills = [
  {
    name: "Languages",
    list: ["JavaScript", "PHP", "Node.js"],
  },
  {
    name: "Tools & Frameworks",
    list: [
      "Laravel",
      "React",
      "MongoDB",
      "Mongoose",
      "Express.js",
      "EJS",
      "Bootstrap",
    ],
  },
  {
    name: "Development Tools",
    list: ["Git", "Docker", "Postman", "Syncthing", "Cron Jobs"],
  },
  {
    name: "Other Skills",
    list: ["Web Scraping", "SEO", "UI Design"],
  },
  {
    name: "Databases",
    list: ["MySQL", "mongo"],
  },
];

// const factsData = [];

const funFactsData = [
  "I summer more than winter!",
  "I Self-taught web developer",
  "Always exploring new tech stacks",
  // "📝 Building a blog app with EJS and Node.js – because content matters!",
  // "📦 Loves organizing and structuring projects efficiently.",
  "Passionate about SEO",
  // "⚡ Prefers backend magic with Node.js but also crafts sleek frontends.",
  // "🛍️ Currently working on an e-commerce app with Laravel and Blade.",
  // "📊 Enjoys filtering and sorting data by dates – because organization is key!",
  // "🔍 Experimenting with web scraping to extract valuable insights.",
  // "📂 Keeps his files perfectly synced between his devices using Syncthing.",
  // "🎨 Designing his personal portfolio with a modern and clean UI.",
  // "☕ Likely to be found sipping coffee while debugging code.",
  "My favorite movie is The Green Mile",
  "Always learning and leveling up his tech skills!",
];

const projectsLength = projectsData.length;
export {
  projectsData,
  projectsLength,
  smallProjectsData,
  Skills,
  funFactsData,
};
