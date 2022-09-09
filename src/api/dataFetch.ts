import axios from "axios";
import { RootObject } from "global";

const baseUrl = "https://sportprogram.iddaa.com/SportProgram/filter/1/1";

export const CharactersGET = async () => {
  const { data } = await axios.get<RootObject>(`${baseUrl}`);
  return data;
};
