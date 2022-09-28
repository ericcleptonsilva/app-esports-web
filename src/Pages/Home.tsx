import { useEffect, useState } from "react";
import { CreateAdBanner } from "../components/CreateAdBanner";
import { GameBanner } from "../components/GameBanner";
import { Header } from "../components/Header";
import { ErrorMessage } from "../components/ErrorMessage";
import { Game } from "../types/Games";
import * as Dialog from "@radix-ui/react-dialog";
import { SelectedCustom } from "../components/SelectedCustom";
import { GameController } from "phosphor-react";
import { Input } from "../components/Form/Input";
import { Button } from "../components/Form/Button";
export const Home = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selected, setSelected] = useState("");

  useEffect(() => {
    fetch("http://localhost:3333/games")
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);

  return (
    <div className="max-w-[1441px] mx-52 my-20 flex flex-col items-center">
      <Header />
      {games.length > 0 ? (
        <div className="grid grid-cols-6 gap-6 mt-12">
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
      ) : (
        <ErrorMessage />
      )}
      <Dialog.Root>
        <CreateAdBanner />
        <Dialog.Portal>
          <Dialog.Overlay className="bg-black/60 inset-0 fixed" />
          <Dialog.Content className="fixed bg-[#2A2634]  text-white py-6 px-8  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg shadow-md shadow-black/25">
            <Dialog.Title className=" text-3xl text-white font-bold ">
              Publique um anúncio
            </Dialog.Title>

            <form className="mt-8 flex flex-col gap-4">
              <div className=" flex flex-col gap-2">
                <label htmlFor="game" className="font-semibold">
                  Qual é seu game?
                </label>
                <SelectedCustom data={games} onChange={setSelected} />
              </div>
              <div className=" flex flex-col gap-2">
                <label htmlFor="name" className="font-semibold ">
                  Seu nome (ou nickname)
                </label>
                <Input id="name" placeholder="Como te Chamam dentro do game?" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="yearsPlaying">Joga há quantos anos?</label>
                  <Input id="game" placeholder="Tudo bem ser ZERO" />
                </div>
                <div className=" flex flex-col gap-2">
                  <label htmlFor="discord">Qual se discord?</label>
                  <Input id="discord" type="text" placeholder="Usuario#0000" />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className=" flex flex-col gap-2">
                  <label htmlFor="weekDays">Quando costuma jogar?</label>

                  <div className="grid grid-cols-4 gap-2">
                    <Button value="D" title="Domingo"/>
                    <Button value="S" title="Segunda"/>
                    <Button value="T" title="Terça"/>
                    <Button value="Q" title="Quarta"/>
                    <Button value="Q" title="Quinta"/>
                    <Button value="S" title="Sexta"/>
                    <Button value="S" title="Sábado"/>
                    
                  </div>
                </div>

                <div className=" flex flex-col gap-2 flex-1">
                  <label htmlFor="hourStart">Qual horário do dia?</label>
                  <div className="grid grid-cols-2 gap-2">
                    <Input id="hourStart" type="time" placeholder="De" />
                    <Input id="hourEnd" type="time" placeholder="Até" />
                  </div>
                </div>
              </div>
              <div className="mt-2 flex gap-2 text-sm  ">
                <Input type="checkbox" />
                Costumo me conectar ao chat de voz.
              </div>
              <footer className="mt-4 flex justify-end gap-6">
                <Dialog.Close 
                type="button"
                className="bg-zinc-500 px-5 h-12 rounded-md font-semibold hover:bg-zinc-600"
                >
                  Cancelar
                </Dialog.Close >
                <button 
                className="bg-violet-500 px-5 h-12 rounded-md font-semibold flex gap-3 items-center hover:bg-violet-600"
                 type="submit"
                 >
                  <GameController size={24} /> Encontrar
                </button>
              </footer>
            </form>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};
