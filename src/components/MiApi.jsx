import { useState, useEffect } from "react";
import "./MiApi.css";

function MiApi() {
  const [name, setName] = useState([]);

  const [image, setImage] = useState([]);

  const [weight, setWeight] = useState([]);

  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    consultarInformacion();
  }, []);

  const consultarInformacion = async () => {
    let random_pokemon = Math.floor(Math.random() * 150);
    const url = `https://pokeapi.co/api/v2/pokemon/${random_pokemon}`;
    const response = await fetch(url);
    const data = await response.json();

    setImage(data.sprites.front_default);
    setName(data.name);
    setWeight(data.weight);

    let arrayAbilities = data.abilities;
    let arrayNames = [];
    arrayAbilities.forEach((ability) => {
      arrayNames.push(ability["ability"]["name"]);
    });
    let sortedAbilities = arrayNames.sort();

    setAbilities(sortedAbilities);
  };

  const filtrarAtq = (e) => {
    const listaFiltrada = abilities.filter((ab) => ab === e.target.value);

    if (listaFiltrada.length !== 0) {
      setAbilities(listaFiltrada);
    }
  };

  return (
    <div>
      <div className="info-div">
        <div className="info-content">
          <img className="pokemon-img" src={image} alt="" />
          <h3>Nombre: {name}</h3>
          <p>Peso: {weight} Lb</p>
          <h5>Ataques básicos</h5>
          <ul>
            {abilities.map((ability) => (
              <li key={ability}>{ability}</li>
            ))}
          </ul>
        </div>
        <div className="atq-filter">
          <label className="form-label">
            Filtrar/buscar ataque (escribe nombre del ataque)
          </label>
          <input
            className="form-control input-filter"
            onChange={filtrarAtq}
            type="text"
          />
        </div>
      </div>
    </div>
  );
}
export default MiApi;
