const timeoutDeboucer = debounceTimeout();
onmessage = function (e) {
  console.log(`Worker: Message received from main script with ${e.data.msg}`);
  timeoutDeboucer(e);
};

function debounceTimeout() {
  let t;
  return (e) => {
    clearTimeout(t);
    t = setTimeout(() => {
      postMessage({ msg: `${e.data.msg} - ${Date.now()}`, id: e.data.id });
    }, Math.random() * 5000);
  };
}
