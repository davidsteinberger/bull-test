import { queue2 } from '../queues';

export default async () => {
  console.log('processor1: start');

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  queue2.add(null);
  console.log('processor1: done');
  return Promise.resolve();
};
