<p align="center">
<br>
And one cried unto another, and said, Holy, holy, holy, is the LORD of hosts: the whole earth is full of his glory.
<br>
<strong>Isaiah 6:3</strong>

## Getting Started

Parallel Index is built on [Next.js](https://nextjs.org/), [Supabase](https://supabase.io/), and [Prisma](https://www.prisma.io/). To get set up we first need to set up our environment variables:

```bash
# .env
DATABASE_URL=YOUR DATABASE URL
```

```bash
# .env.local
NEXT_PUBLIC_SUPABASE_URL=YOUR DATABASE URL
NEXT_PUBLIC_SUPABASE_KEY=YOUR DATABASE URL
```

Once you have your variables set up run the following commands:

```bash
# Generate Prisma types
npx prisma generate

# Start apps
npm run dev
```

And you're all done! Turborepo should be running the apps and you can make whatever changes you like!
