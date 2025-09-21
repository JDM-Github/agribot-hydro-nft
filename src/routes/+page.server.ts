import RequestHandler from '$lib/utils/request';
import type { PageServerLoad } from './$types';
import { REDIS_URL } from '$env/static/private';
import Redis from 'ioredis';

const redis = new Redis(REDIS_URL);
const CACHE_KEY = 'plantAll';
const CACHE_EXPIRATION = 60 * 60 * 24;

export const load: PageServerLoad = async () => {
    try {
        const cached = await redis.get(CACHE_KEY);
        if (cached) {
            return {
                plants: JSON.parse(cached),
                cached: true
            };
        }

        const response = await RequestHandler.fetchData('GET', 'plant/get-all');

        if (response.success) {
            await redis.set(CACHE_KEY, JSON.stringify(response.plants), 'EX', CACHE_EXPIRATION);

            return {
                plants: response.plants,
                cached: false
            };
        }

        return {
            plants: [],
            error: response.message
        };
    } catch (error: any) {
        console.error('Load error:', error);
        return {
            plants: [],
            error: 'Failed to load plants'
        };
    }
};
