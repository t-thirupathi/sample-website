import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Auto-pick backend URL
  const backendUrl =
    import.meta.env.MODE === "development"
      ? "http://127.0.0.1:5001" // local Flask
      : "https://flask-backend-625384235966.us-central1.run.app"; // deployed backend

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
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
