import { registerAs } from '@nestjs/config';
export default registerAs('throttler', () => ({
    active: process.env.THROTTLER_ACTIVE,
    ttl: process.env.THROTTLER_TTL,
    limit: process.env.THROTTLER_LIMIT
}));