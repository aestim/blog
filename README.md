# MinBlog

Welcome to **MinBlog**, my personal technical blog and portfolio built with modern web technologies. This project serves as a platform to share my knowledge on software engineering, data analysis, and more, while showcasing my development skills.

## Features

- **Framework**: Built with [Next.js 14](https://nextjs.org/) (App Router) for performance and SEO.
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) for utility-first styling and [Shadcn UI](https://ui.shadcn.com/) for accessible, reusable components.
- **Content Management**: [Velite](https://velite.js.org/) for type-safe MDX content management.
- **MDX Support**: Write content in MDX with support for syntax highlighting (rehype-pretty-code), math equations (KaTeX), and more.
- **Dark Mode**: Integrated dark mode support using `next-themes`.
- **Animations**: Smooth transitions powered by [Framer Motion](https://www.framer.com/motion/).

## Tech Stack

- **Core**: React, Next.js, TypeScript
- **Styling**: Tailwind CSS, Tailwind Typography, Class Variance Authority (CVA)
- **UI Components**: Radix UI (via Shadcn UI)
- **Content**: Velite, MDX
- **Icons**: Lucide React

## Getting Started

To run this project locally, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/noodlemin/blog.git
    cd blog
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    yarn install
    # or
    pnpm install
    # or
    bun install
    ```

3.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Content

Content is managed in the `content` directory using MDX files. Velite processes these files and generates type-safe data for the application.

## Author

**Minsung Kim**

- [GitHub](https://github.com/aestim)
- [LinkedIn](https://www.linkedin.com/in/minkimdg/)
- [Personal Site](https://minsungkim.pro)

## License

This project is open source and available under the [MIT License](LICENSE).