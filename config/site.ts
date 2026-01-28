export const siteConfig = {
  name: "Building Code",
  url: "https://example.com",
  description: "Nextjs 14 blog using velite, tailwind, and shadcn",
  author: "Minsung Kim",
  links: {
    github: "https://github.com/aestim",
    linkedin: "https://www.linkedin.com/in/minkimdg/",
    personalSite: "https://minsung.dev",
  },
  hero: {
    title: "Minsung Kim",
    subtitle: "Informatics & Real Estate Development",
    description: "Integrated Master of Informatics graduate from the University of Edinburgh. Currently leveraging data analytics and automation to optimize Real Estate Development projects.",
    bio: {
      part1: "Integrated Master of Informatics graduate from the ",
      highlight1: "University of Edinburgh",
      part2: ". Currently leveraging data analytics and automation to optimize ",
      highlight2: "Real Estate Development",
      part3: " projects.",
    }
  },
  ui: {
    latestPosts: "Latest Posts",
    viewAllPosts: "See all posts →",
    readMore: "Read more →",
    viewBlog: "View Blog",
    nothingToSee: "Nothing to see here yet",
  },
};

export type SiteConfig = typeof siteConfig;