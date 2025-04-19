import { Project } from "~/types";

export const projects = [
  {
    key: "syntonym-cloud",
    title: "Syntonym Cloud",
    logo: "/images/projects/syntonym-cloud/logo.png",
    descriptionParagraphs: [
      // First paragraph should be between 125 and 132 characters
      "A cloud-based platform for managing and analyzing large datasets, providing powerful tools for data visualization and machine learning."
    ],
    link: "/projects/syntonym-cloud",
    showcaseImage: "/images/projects/syntonym-cloud/desktop-job-process.png",
    images: [
      "/images/projects/syntonym-cloud/desktop-job-process.png",
      "/images/projects/syntonym-cloud/desktop-account.png",
      "/images/projects/syntonym-cloud/desktop-login.png",
      "/images/projects/syntonym-cloud/mobile-job-process-part-1.png",
      "/images/projects/syntonym-cloud/mobile-job-process-part-2.png",
      "/images/projects/syntonym-cloud/mobile-job-account-part-1.png",
      "/images/projects/syntonym-cloud/mobile-job-account-part-2.png",
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
    key: "innova",
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
  }
] satisfies Project[];
