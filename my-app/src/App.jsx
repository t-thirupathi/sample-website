import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [message, setMessage] = useState("");

  // Auto-pick backend URL
  const backendUrl =
    import.meta.env.MODE === "development"
      ? "http://127.0.0.1:5001" // local Flask
      : "https://flask-backend-625384235966.us-central1.run.app"; // deployed backend

  useEffect(() => {
    fetch(`${backendUrl}/api/message`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => console.error(err));
  }, [backendUrl]);

  return (
    <div className="app-container">
      <h1 className="app-title">Simple React + Python Webpage</h1>
      <p className="app-message">{message || "Loading..."}</p>
    </div>
  );
}

export default App;
