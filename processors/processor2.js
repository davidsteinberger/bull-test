export default async () => {
  console.log('processor2: start');

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  console.log('processor2: done');
  return Promise.resolve();
};
