import { IEpisode } from '@/components/episode/models';

export interface IContentInfo {
  title: string;
  description: string;
  extras: ContentInfoExtras;
  heroBackground: any;
  mobileHeroBackground: any;
  cover: any;
  channel: any;
  seasons: Season[];
}

export interface Season {
  name: string;
  episodes: IEpisode[];
}

export interface ContentInfoExtras {
  likes: number;
  imdb: number;
  duration: number;
  productionTime: string;
  country: string;
  seasons: string;
  translation: string;
  age: string;
  genres: string[];
}
