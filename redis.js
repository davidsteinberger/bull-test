import redis from 'redis';
import { promisify } from 'util';

export const client = redis.createClient();
export const set = promisify(client.set).bind(client);
export const get = promisify(client.get).bind(client);