export interface CharacterObject {
  id?: number;
  name?: string;
  status?: string;
  species?: string;
  type?: string;
  gender?: string;
  origin?: CharacterOrigin;
  location?: CharacterLocation;
  image?: string;
  episode?: string[] | undefined;
  url?: string;
  created?: string;
  fav?: boolean;
}

export interface CharacterResponse {
  info?: InfoObject;
  results?: CharacterObject[];
}

export interface CharacterOrigin {
  name?: string;
  url?: string;
}

export interface CharacterLocation {
  name?: string;
  url?: string;
}

export interface InfoObject {
  count?: number;
  pages?: number;
  next?: string;
  prev?: string;
}
