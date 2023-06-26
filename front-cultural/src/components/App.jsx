import { useState } from "react";
import reactLogo from "../assets/rec_antigo.jpg";
import "./App.css";

export function App() {
  //const [count, setCount] = useState(0);

  return (
    <>
      <img src={reactLogo} className="logo react" alt="React logo" />

      <h1>Apoie uma iniciativa em:</h1>

      <div className="card">
        <button onClick={() => null}><a>Boa Vista</a></button>
        <button onClick={() => null}><a>Boa Viagem</a></button>
        <button onClick={() => null}><a>Ilha do Leite</a></button>
        <button onClick={() => null}><a>Joana Bezerra</a></button>
        <button onClick={() => null}><a>Tancredo Neves</a></button>
        <button onClick={() => null}><a>Madalena</a></button>

      </div>
    </>
  );
}
