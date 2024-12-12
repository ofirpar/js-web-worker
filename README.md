Messaging between a main thread and a web worker.

The `index.html` file loads `main.ts` which adds some basic html dynamically.

The `api.ts` file loads a WebWorker and handles basic communication with it.

- Clicking on the button will trigger the API with the text in the input
- The worker will respond with the input text, with the current time appended to it.
- The result from the worker will be renderd on the screen

Examples:

| Input | Output         |
| ----- | -------------- |
| Cat   | Cat - 11:21:33 |
| Dog   | Dog - 11:24:21 |
