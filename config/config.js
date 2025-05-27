// config.js
import 'dotenv/config';
import { z } from 'zod';

const envSchema = z.object({
  PORT: z.string().transform(Number),
});

const result = envSchema.safeParse(process.env);

if (!result.success) {
  console.error(
    'Invalid environment variables:',
    result.error.flatten().fieldErrors,
  );
  process.exit(1);
}

export const env = result.data;
