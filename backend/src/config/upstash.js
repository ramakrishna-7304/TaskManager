import {Ratelimit} from '@upstash/ratelimit' // for deno: import { Ratelimit } from "@upstash/ratelimit/mod.ts"
import { Redis } from '@upstash/redis' // for deno: import { Redis } from "@upstash/redis/mod.ts"

import dotenv from 'dotenv';
dotenv.config();

// export const redis = new Redis({
//   url: process.env.UPSTASH_REDIS_REST_URL,
//   token: process.env.UPSTASH_REDIS_REST_TOKEN,
// });

// Create a new ratelimiter, that allows 10 requests per 20 seconds
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(5, '10 s'), // 10 requests per 20 seconds
//   analytics: true,
//   prefix: '@upstash/ratelimit',
});

export default ratelimit;