import { Client, Experience, Project } from "~/types";

export const projects = [
  {
    key: "syntonym-cloud",
    title: "Syntonym Cloud",
    logo: "/images/projects/syntonym-cloud/logo.png",
    descriptionParagraphs: [
      // First paragraph should be between 125 and 132 characters
      "A cloud-based platform that privacy-focused solution by removing sensitive biometric data from images and videos.",
      "As a software developer working with a tech stack that includes NestJS, NextJS, TypeScript, and PostgreSQL, I leverage these technologies to build scalable and efficient applications. NestJS allows me to create a robust and maintainable backend, while NextJS, with its server-side rendering capabilities, ensures a seamless, fast, and SEO-friendly frontend. TypeScript helps in building type-safe applications, preventing runtime errors and enhancing the development experience. PostgreSQL provides a reliable, structured database solution for managing complex datasets, and Drizzle ORM simplifies database interactions with its lightweight, type-safe approach.",
      "In addition to these technologies, I also utilize Tailwind CSS to build responsive, clean, and modern user interfaces, ensuring the best user experience. The integration of shadcn components allows for consistent, high-quality UI components, which speeds up development and ensures a polished, cohesive look and feel. By combining these tools, I’m able to build a highly efficient, privacy-compliant platform that can handle complex data processing, all while providing users with a secure, user-friendly experience."
    ],
    link: "/projects/syntonym-cloud",
    showcaseImage: "/images/projects/syntonym-cloud/desktop-job-process.png",
    images: [
      "/images/projects/syntonym-cloud/desktop-job-process.png",
      "/images/projects/syntonym-cloud/desktop-account.png",
      "/images/projects/syntonym-cloud/desktop-login.png",
      "/images/projects/syntonym-cloud/mobile-job-process-part-1.png",
      "/images/projects/syntonym-cloud/mobile-job-process-part-2.png",
      "/images/projects/syntonym-cloud/mobile-account-part-1.png",
      "/images/projects/syntonym-cloud/mobile-account-part-2.png",
      "/images/projects/syntonym-cloud/mobile-login.png"
    ]
  },
  {
    key: "syntonym-virtual-camera",
    title: "Syntonym Virtual Cam",
    logo: "/images/projects/syntonym-virtual-camera/logo.png",
    descriptionParagraphs: [
      "A virtual camera application that allows users to create and customize their own virtual camera feeds, with advanced features for video conferencing and streaming."
    ],
    link: "/projects/syntonym-virtual-camera",
    showcaseImage:
      "/images/projects/syntonym-virtual-camera/desktop-dashboard.png",
    images: [
      "/images/projects/syntonym-virtual-camera/desktop-dashboard.png",
      "/images/projects/syntonym-virtual-camera/desktop-login.png"
    ]
  },
  {
    key: "zoom-app",
    title: "Zoom App",
    logo: "/images/projects/zoom-app/logo.png",
    descriptionParagraphs: [
      "A zoom app that allows users to change their faces in real-time during video calls, with virtual faces that can be selected and applied."
    ],
    link: "/projects/zoom-app",
    showcaseImage: "/images/projects/zoom-app/desktop-virtual-images.png",
    images: [
      "/images/projects/zoom-app/desktop-login.png",
      "/images/projects/zoom-app/desktop-checking-service.png",
      "/images/projects/zoom-app/desktop-service-check-done.png",
      "/images/projects/zoom-app/desktop-virtual-images.png",
      "/images/projects/zoom-app/desktop-favorite-virtual-images.png"
    ]
  },
  {
    key: "innova-website",
    title: "Innova Website",
    logo: "/images/projects/innova-website/logo.png",
    descriptionParagraphs: [
      "A web application that provides a platform for users to share and discover innovative ideas, with features for collaboration and feedback."
    ],
    link: "/projects/innova-website",
    showcaseImage: "/images/projects/innova-website/desktop-home.png",
    images: [
      "/images/projects/innova-website/desktop-home.png",
      "/images/projects/innova-website/desktop-blog.png",
      "/images/projects/innova-website/desktop-blog-detail.png",
      "/images/projects/innova-website/desktop-cms.png"
    ]
  },
  {
    key: "builds-hub",
    title: "Builds Hub",
    logo: "/images/projects/builds-hub/logo.png",
    descriptionParagraphs: [
      "Central Hub for All GitHub Action Workflows. Discover, manage, and follow automation flows — all in one place.",
      "Stay organized and in control of your CI/CD processes. Our platform brings together every GitHub Action workflow you care about, making it easier to track, reuse, and optimize automation across your projects."
    ],
    link: "/projects/builds-hub",
    showcaseImage: "/images/projects/builds-hub/desktop-landing.png",
    images: [
      "/images/projects/builds-hub/desktop-landing.png",
      "/images/projects/builds-hub/desktop-dashboard.png",
      "/images/projects/builds-hub/desktop-workflow.png",
      "/images/projects/builds-hub/desktop-jobs.png"
    ]
  }
] satisfies Project[];

export const clients = [
  {
    key: "syntonym",
    name: "Syntonym",
    logo: "/images/clients/syntonym.svg",
    link: "https://syntonym.com"
  },
  {
    key: "innova",
    name: "Innova",
    logo: "/images/clients/innova.svg",
    link: "https://innova.com.tr"
  },
  {
    key: "intertech",
    name: "Intertech",
    logo: "/images/clients/intertech.svg",
    link: "https://intertech.com.tr"
  },
  {
    key: "invemo",
    name: "Invemo",
    logo: "/images/clients/invemo.svg",
    link: "https://invemo.com"
  },
  {
    key: "panates",
    name: "Panates",
    logo: "/images/clients/panates.svg",
    link: "https://panates.com"
  },
  {
    key: "cool",
    name: "Cool Digital",
    logo: "/images/clients/cool-digital.svg",
    link: "https://letsbecool.com"
  }
] satisfies Client[];

export const experiences = [
  {
    key: "freelancer",
    company: "Freelancer & Soloprenuer",
    role: "",
    startYear: 2021,
    endYear: null
  },
  {
    key: "intertech",
    company: "Intertech",
    role: "Senior Software Engineer",
    startYear: 2021,
    endYear: 2024
  },
  {
    key: "invemo",
    company: "Invemo",
    role: "Senior Software Engineer",
    startYear: 2022,
    endYear: 2023
  },
  {
    key: "enbd",
    company: "Emirates NBD",
    role: "Senior Software Engineer",
    startYear: 2021,
    endYear: 2022
  },
  {
    key: "panates",
    company: "Panates",
    role: "Senior Software Engineer",
    startYear: 2020,
    endYear: 2021
  },
  {
    key: "cool",
    company: "Cool",
    role: "Software Engineer",
    startYear: 2019,
    endYear: 2020
  },
  {
    key: "epam",
    company: "Epam (Formerly EMAKINA.TR)",
    role: "Software Engineer",
    startYear: 2018,
    endYear: 2019
  },
  {
    key: "emse",
    company: "Emse",
    role: "Software Engineer",
    startYear: 2016,
    endYear: 2018
  }
] satisfies Experience[];
