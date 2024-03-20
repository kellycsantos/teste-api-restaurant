import "./App.css";
import { useState, useEffect } from "react";
import {useParams, useNavigate, Link, Routes, Route} from 'react-router-dom'
import Prato from "./view/Prato";

function App() {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    fetch("https://kellycsantos.github.io/free-fake-api/restaurant/db.json")
      .then((response) => response.json())
      .then((data) => {
        setPratos(data.pratos);
      
      });
  }, []);
  console.log(pratos)
  return (
    <div className="App">
      <h1>Res</h1>
      <div className="pai">
        {pratos?.map((prato, index) => (
          <Link to={`/prato/${prato.id}`} key={index}>
          <li className="teste"  >
            <h4>{prato.name}</h4>
            <img  src={prato.img} alt={prato.name} />
            <p>{prato.description}</p>
          </li>
          </Link>
        ))}

      </div>
        <Routes>
          <Route path="/prato/:id" Component={Prato} />
        </Routes>
    </div>
  );
}

export default App;
