import { useState } from "react";
import "./styles/main.css";
import logoImg from "./assets/Logo.svg";
import ItemsCarousel from 'react-items-carousel';

function App(): JSX.Element {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-20">
        Seu{" "}
        <span className=" bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>

      <div className="grid grid-cols-6 gap-6 mt-16 p-10 ">
        <ItemsCarousel></ItemsCarousel>
        <a href="">
          <img src="/game-1.png" alt="LOL" />
        </a>
        <a href="">
          <img src="/game-2.png" alt="dota2" />
        </a>
        <a href="">
          <img src="/game-3.png" alt="cs global" />
        </a>
        <a href="">
          <img src="/game-4.png" alt="fortnine" />
        </a>
        <a href="">
          <img src="/game-5.png" alt="apex legends" />
        </a>
        <a href="">
          <img src="/game-6.png" alt="word worcraft" />
        </a>
      </div>
    </div>
  );
}

export default App;
