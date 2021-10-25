export interface CharacterOrigin {
  name: string;
  url: string;
}

export interface CharacterLocation {
  id: number;
  name: string;
  type: string;
  dimension: string;
  residents: string[];
  url: string;
  created: string;
}

export interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: CharacterOrigin;
  location: CharacterLocation;
  image: string;
  episode: string[];
  url: string;
  created: string;
}
