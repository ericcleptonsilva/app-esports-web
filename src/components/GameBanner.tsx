import { GameBannerProps } from "../types/Games";

export const GameBanner = ({ title, bannerUrl, adsCount }: GameBannerProps) => {
  return (
    <a
      href=""
      className="flex flex-col   shadow-md box-decoration-slice scale-100 transform-gpu hover:scale-110"
    >
      <img src={bannerUrl} alt={title} />
      <h3 className="text-white font-semibold text-md">{title}</h3>
      <h4 className="text-gray-400 font-semibold text-1xl ">
        {adsCount > 1 ? adsCount + " Anúncios" : adsCount + " Anúncio"}
      </h4>
    </a>
  );
};
