import React, { ussState, useEffect, useState } from 'react';
import './App.css';

function App() {

  const [contador, setContador] = useState(0);
  const [tareas, settareas] = useState([]);

  const incrementar = () => {
    setContador(prevContador => prevContador + 1);
  }

  const incrementarTareas = () => {
    settareas(["Nueva tarea", ...tareas]);
  }

// componente para montar
  useEffect(() => {
    cargarListaPaises();
  }, [])

  useEffect(() => {
    console.log("Nueva tarea ha sido añadida")
  }, [tareas])

//llamada a una API externa
const cargarListaPaises = async () => {
  const data = await fetch('https://covid19.mathdro.id/api/countries');
  const paises = await data.json();

}



  return (
    <div className="App">
      {contador}
      <button onClick={incrementar}>Sumar</button>
      <button onClick={incrementarTareas}>Añadir Tarea</button>
    </div>
  );
}

export default App;
