import "./App.css";
import MiApi from "./components/MiApi";

function App() {
  return (
    <div>
      <div className="header-div">
        <p>
          En honor a la gran hazaña de Ash Ketchup la semana pasada, en donde
          ganó la Liga Mundial tras 25 años intentándolo, he creado una Api con
          información básica de los pokemones originales de la región de Kanto.
          Recarga la página para descubrirlos a todos!
          <div className="pokeball-div">
            <img
              className="pokeball-img"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Pok%C3%A9_Ball_icon.svg"
              alt=""
            />
          </div>
        </p>
      </div>
      <MiApi />
    </div>
  );
}

export default App;
