import React, { useState, useEffect } from "react";

import { Container, Row, Box } from "./style";

function App() {
  const [message, setMessage] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const myWorker = new Worker("ivan-worker.js");
    const timeOut = setTimeout(() => {
      //------send url to worker
      myWorker.postMessage("https://jsonplaceholder.typicode.com/users");
      //------receive data from worker
      myWorker.onmessage = res => {
        console.log(res, "res");
        setLoading(false);
        setMessage(res.data);
      };
      //------handling error from worker
      myWorker.onerror = err => {
        console.log(err.message, "err");
        setLoading(false);
      };
    }, 500);
    return () => clearTimeout(timeOut);
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  return (
    <Container>
      <Row>
        {message &&
          message.map(val => (
            <Box key={val.id}>
              <p>{val.name}</p>
              <p>{val.username}</p>
              <p>{val.email}</p>
            </Box>
          ))}
      </Row>
    </Container>
  );
}

export default App;
