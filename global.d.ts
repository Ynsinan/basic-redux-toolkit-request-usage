export type EpisodeTypes = {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
};

export type LocationTypes = {
  type: string;
  dimension: string;
  residents: string[];
  id: number;
  name: string;
};

export type CharacterTypes = {
  id: number;
  name: string;
  image: string;
  origin: { name: string };
  gender: string;
  species: string;
  status: string;
  location: { name: string };
};
export interface Info {
  count: number;
  pages: number;
  next: string;
  prev: string;
}
export type EpisodeFethAxiosType = {
  results: EpisodeTypes[];
  info: Info;
};

export type LocationFethAxiosType = {
  results: LocationTypes[];
  info: Info;
};

export type CharacterFethAxiosType = {
  results: CharacterTypes[];
  info: Info;
};
