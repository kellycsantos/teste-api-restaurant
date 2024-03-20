import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Prato() {
  const params = useParams();
  const [prato, setPrato] = useState([]);

  useEffect(() => {
    fetch("https://kellycsantos.github.io/free-fake-api/restaurant/db.json")
      .then((response) => response.json())
      .then((data) => {
        setPrato(data.pratos);
      });
  }, []);
  return (
    <>
      <h2 style={{ textTransform: "capitalize" }}>
        Prato : {prato[params.id].name}
      </h2>
      <div style={{ textAlign: "left" }}>
        nome: {prato[params.id].name} <br />
        descrição: {prato[params.id].description} <br />
      </div>
    </>
  );
}
