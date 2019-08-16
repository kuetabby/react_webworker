console.log("ivan worker work");
onmessage = ({ data }) => {
  fetch(data)
    .then(res => res.json())
    .then(res => postMessage(res))
    .catch(err => postMessage(err.message));
};
