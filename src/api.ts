const myWorker = new Worker(new URL('./worker.ts', import.meta.url), {
  type: 'module',
});

// Examples for worker usage; Comment out if you want
myWorker.postMessage('Message to worker');
myWorker.addEventListener('message', (ev) => {
  console.info(`message from worker event listener with data ${ev.data}`);
});
myWorker.onmessage = (ev) => {
  resolverMap[ev.data.id](ev.data.msg);
};

const resolverMap = {};

let count = 0;
const enhanceMessage = async (msg): Promise<string> => {
  const localCount = count;
  return new Promise((resolve) => {
    resolverMap[localCount] = resolve;

    myWorker.postMessage({ msg, id: localCount });
    count++;
  });
};

export const API = {
  enhanceMessage,
};
