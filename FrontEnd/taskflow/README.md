# TaskFlow Public Website

TaskFlow is a project and task management workspace for people who want a clear view of what needs to happen next. It keeps project context, tasks, and progress together so teams spend less time searching through scattered updates and more time completing meaningful work.

The public landing page explains the product purpose, shows the core workflow, and sends visitors to the existing AdminCMS login and signup routes.

## Structure

- `app/page.js`: Server-rendered landing page and public navigation.
- `app/layout.js`: Root layout and SEO metadata.
- `app/globals.css`: Responsive visual system shared by the landing page.
- `src/lib/site-content.js`: Reusable workflow content for the landing page.

## Why TaskFlow

TaskFlow helps users manage projects by giving each project a clear home, breaking larger goals into actionable tasks, and making progress visible. This creates a simple rhythm: shape the work, choose the next step, and see the project pulse.

## Getting Started

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
