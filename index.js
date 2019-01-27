import { queue1 } from './queues';

const run = async () => {
  await queue1.clean(0);
  queue1.add(null);
  queue1.add(null, {
    removeOnComplete: true,
    removeOnFail: true,
    repeat: { cron: '*/1 * * * *' },
  });
};

run();