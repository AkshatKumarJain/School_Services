// config.js
import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  DB_HOST: z.string(),
  DB_USER: z.string(),
  DB_PASSWORD: z.string(),
  DB_DATABASE: z.string(),
  PORT: z.string().transform(Number),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error(
    'Invalid environment variables:',
    result.error.format()
  );
  process.exit(1);
}

export const env = result.data;
