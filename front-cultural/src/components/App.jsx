import { useState } from "react";
import reactLogo from "../assets/rec_antigo.jpg";
import "./App.css";

export function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Projeto Cultural</h1>

      <div className="card">
      <h2>Quero visitar um:</h2>
        <button onClick={() => null}><a>museu</a></button>
        <button onClick={() => null}><a>tatro</a></button>
        <button onClick={() => null}><a>café</a></button>
        <button onClick={() => null}><a>jardim botanico</a></button>

      </div>
    </>
  );
}
