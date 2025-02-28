# Game Time Plus

A Next.js application with TinyBase for local state management.

## TinyBase Implementation

This project uses TinyBase for managing team names with local storage persistence. The implementation includes:

- A TinyBase store with a teams table
- Local storage persistence for the teams data
- A custom React hook (`useTeams`) for easy integration with components

### Key Files

- `src/lib/store.ts` - Core TinyBase store implementation with localStorage persistence
- `src/hooks/useTeams.ts` - Custom React hook for using the teams store
- `src/components/TeamNameForm.tsx` - Example component using the TinyBase store

### Usage

The `TeamNameForm` component demonstrates how to use the TinyBase store to:
1. Add new team names
2. Display existing team names
3. Persist data between page refreshes using localStorage

## Getting Started

First, run the development server:

```bash
npm install
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
