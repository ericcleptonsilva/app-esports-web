export interface Game {
    id?: string;
    title: string;
    bannerUrl: string;
    _count: {
      Ads: number;
    };
  }

  export interface GameBannerProps {
    title: string;
    bannerUrl: string;
    adsCount: number;
  }