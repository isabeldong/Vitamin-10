// Part 4: Connect React Frontend to Flask Backend
import React, { useState } from "react";

function App() {
  const [quote, setQuote] = useState("");

  const fetchQuote = async () => {
    try {
      const res = await fetch("https://vitamin-10.onrender.com/api/quote");
      const data = await res.json();
      setQuote(data.quote);
    } catch (error) {
      setQuote("Failed to fetch quote.");
      console.error(error);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "5rem" }}>
      <h1>Quote of the Day</h1>
      <button onClick={fetchQuote}>Get Quote</button>
      <p style={{ marginTop: "2rem", fontStyle: "italic", fontSize: "1.5rem" }}>
        {quote}
      </p>
    </div>
  );
}

export default App;
