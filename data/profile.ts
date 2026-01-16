export const profileData = {
  profile: {
    name: "Suha Can Uluer",
    title: "Software Engineer",
    headline: "Backend Engineer focused on backend systems",
    location: "Ankara, Turkey",
    email: "sculuer@gmail.com",
  social: {
      github: "https://github.com/suhacanuluer",
      linkedin: "https://linkedin.com/in/suhacanuluer",
      web: "https://suhacanuluer.me"
    },
    bio_short: "Software Engineer building high-scale systems and reliable backend architectures. Currently working at sahibinden.com.",
    about_me: "I'm a Software Engineer with experience across defense, e-commerce, and high-traffic marketplace platforms. Currently at sahibinden.com, where I develop backend systems serving millions of users. Previously worked on mission computing systems in the defense sector and built middleware solutions for major retail brands."
  },
  skills: {
    languages: ["Java", "Python", "Go", "C++", "JavaScript"],
    backend: ["Spring Boot", "Spring Cloud", "Spring Security", "Spring WebFlux", "Node.js"],
    databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Elasticsearch", "Couchbase"],
    infrastructure: ["Kafka", "Docker", "Kubernetes", "AWS", "Nginx", "Prometheus", "Grafana"],
    architecture: ["Microservices", "System Design", "RESTful APIs", "Event-Driven Architecture", "Design Patterns"]

  },
  experience: [
    {
      company: "sahibinden.com",
      role: "Software Engineer",
      date: "Aug 2025 - Present",
      location: "Ankara",
      description: "Building high-performance backend systems for Turkey's largest online marketplace, handling millions of daily requests with a focus on scalability and reliability.",
      tech_stack: ["Java", "Spring Boot", "MySQL", "MongoDB", "Elasticsearch", "Git", "Maven", "Gradle"]
    },
    {
      company: "HAVELSAN",
      role: "Software Engineer",
      date: "Jan 2025 - Aug 2025",
      location: "Ankara",
      description: "Contributed to the modernization of embedded mission computing subsystems for Türkiye's E-7 type AEW&C aircraft. Worked on command & control software requiring high reliability and real-time performance.",
      tech_stack: ["C++", "Java", "JSP", "JSF", "Spring Boot", "Java Swing", "Kafka", "Git", "Doors", "Jira", "Nexus"]
    },
    {
      company: "Appcent",
      role: "Software Engineer",
      date: "Feb 2023 - Jan 2025",
      location: "Istanbul (Remote)",
      description: "Developed middleware services for e-commerce platforms including Mavi and Topitoptan. Integrated payment systems and built stock management solutions.",
      tech_stack: ["Java", "Maven", "Spring Boot", "Spring JPA", "Spring Security", "OpenFeign", "JWT", "Redis", "MySQL", "Grafana", "Prometheus", "Nginx", "Firebase", "Git"]
    }
  ]
};

export type ProfileData = typeof profileData;
