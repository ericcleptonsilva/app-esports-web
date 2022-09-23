import "./styles/main.css";
import { Home } from "./Pages/Home";
import { useEffect, useState } from "react";

function App() {
  const [games, setGames] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3333/games').then(response => response.json()).then(data => setGames(data))
  },[])

  return (<Home  />);
}

export default App;
