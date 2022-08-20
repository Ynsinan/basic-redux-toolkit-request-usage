import axios from "axios";
import { CharacterFethAxiosType } from "global";

const baseUrl = "https://rickandmortyapi.com/api";

export const CharactersGET = async () => {
  const { data } = await axios.get<CharacterFethAxiosType>(
    `${baseUrl}/character`
  );
  return data;
};
