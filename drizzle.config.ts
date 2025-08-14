import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/db/schema.ts',
  out: './lib/db/migrations',
  driver: 'better-sqlite',
  dbCredentials: {
    url: process.env.DATABASE_URL || 'local.db',
  },
} satisfies Config;
