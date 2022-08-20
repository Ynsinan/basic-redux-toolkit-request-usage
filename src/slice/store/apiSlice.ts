import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataFetch } from "src/api";
import { RootState } from "../../app/store";

export interface ApiState {
  selectedCharacter: any[];
  characters: any;
  loading: boolean;
  error: string | null;
}
const initialState: ApiState = {
  selectedCharacter: [],
  characters: [],
  loading: true,
  error: null,
};

export const fetchData = createAsyncThunk("api/getCharacters", async () => {
  try {
    const response = await dataFetch.CharactersGET();
    console.log(response);

    return response.results;
  } catch (error) {
    return error;
  }
});

export const CharacterSlice = createSlice({
  name: "Character",
  initialState,
  reducers: {
    setSelectedCharacter: (state, action) => {
      return {
        ...state,
        selectedCharacter: state.selectedCharacter.find(
          (character) => character.id === action.payload.id
        )
          ? state.selectedCharacter.map((selecTedcharacter) =>
              selecTedcharacter === action.payload
                ? action.payload
                : selecTedcharacter
            )
          : [...state.selectedCharacter, action.payload],
      };
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.characters = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = `${action.error.message}`;
    });
  },
});

export const loadingSelector = (state: RootState) => state.character.loading;
export const getCharacters = (state: RootState) => state.character.characters;
export const getSelectedCharacter = (state: RootState) =>
  state.character.selectedCharacter;

export const { setSelectedCharacter } = CharacterSlice.actions;
export default CharacterSlice.reducer;
