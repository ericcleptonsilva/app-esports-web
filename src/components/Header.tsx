import logoImg from "../assets/Logo.svg";

export const Header = () => {
  return (
    <>
      <img src={logoImg} alt="" />
      <h1 className="text-6xl text-white font-black mt-14">
        Seu{" "}
        <span className=" bg-nlw-gradient bg-clip-text text-transparent">
          duo
        </span>{" "}
        está aqui.
      </h1>
    </>
  );
};
