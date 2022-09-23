import { useEffect, useState } from "react";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { GameBanner } from "../components/GameBanner";
import { Header } from "../components/Header";
import { Game } from "../types/Games";

export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <div className="max-w-[1020px] mx-auto my-20 flex flex-col items-center">
      <Header />
      <div className="grid grid-cols-6 gap-6 mt-16 justify-items-center">
        {games.map((item) => {
          return (
            <GameBanner
              key={item.id}
              title={item.title}
              bannerUrl={item.bannerUrl}
              adsCount={item._count.Ads}
            />
          );
        })}
      </div>
      <CreateAdBanner />
    </div>
  );
};
