export interface IHeroComic {
  id: number;
  title: string;
  issueNumber: number;
  thumbnail: IThumbnail;
  prices: IPrices[];
}

export interface IThumbnail {
  path: string;
  extension: string;
}

export interface IPrices {
  type: string;
  price: string;
}

export interface IHero {
  id: number;
  name: string;
  thumbnail: IThumbnail;
}

export interface IHeroContext {
  heros: IHero[];
  reloadHeros: Function;
}
