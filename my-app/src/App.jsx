import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5001/api/message")
      .then(res => res.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Simple React + Python Webpage</h1>
      <p>{message || "Loading..."}</p>
    </div>
  );
}

export default App;
