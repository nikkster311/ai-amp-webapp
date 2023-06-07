import { useEffect, useState } from "react";
import "./App.css";
import IndexPage from "./components/IndexPage";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>{message}</h1>
      <IndexPage />
    </div>
  );
}

export default App;
