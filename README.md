This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).
## Project Overview
In this technical test, the candidate is required to design and develop a Next.js application that incorporates Firebase Authentication for user login and registration. The application's main feature is a GIF search functionality powered by the GIPHY API. Additionally, the candidate has the option to implement additional tasks, such as marking GIFs as favorites, hot searching, loading animations, and hosting the app on Vercel or GitHub Pages.

## Authentication Requirements
Users must be able to log in using their email and password or sign up for a new account.

Firebase Authentication web SDK should be used for implementing the authentication process. Create your own Firebase account to set up the authentication.

Reference: https://firebase.google.com/docs/auth

## GIF Search and Gallery
The application should use the GIPHY API to display a gallery of GIFs based on user-searched keywords.

API Documentation: https://developers.giphy.com/branch/master/docs/api

## TO-DO
Marking GIFs as favorites
Hot searching, loading animations
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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
