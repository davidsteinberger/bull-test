import Queue from 'bull';
import { join } from 'path';

export const queue1 = new Queue('queue1');
export const queue2 = new Queue('queue2');

queue1.process(join(__dirname, './processors/processor1.js'));
queue2.process(join(__dirname, './processors/processor2.js'));