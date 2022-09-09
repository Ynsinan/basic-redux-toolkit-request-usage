import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { dataFetch } from "src/api";
import { RootState } from "../../app/store";

export interface ApiState {
  sportPrograms: any;
  loading: boolean;
  error: string | null;
}
const initialState: ApiState = {
  sportPrograms: [],
  loading: true,
  error: null,
};

export const fetchData = createAsyncThunk("api/getCharacters", async () => {
  try {
    const response = await dataFetch.CharactersGET();

    return response;
  } catch (error) {
    return error;
  }
});

export const sportProgramSlice = createSlice({
  name: "sportsPrograms",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.loading = false;
      state.sportPrograms = action.payload;
      state.error = "";
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false;
      state.error = `${action.error.message}`;
    });
  },
});

export const getSportProgram = (state: RootState) =>
  state.sportProgram.sportPrograms;

export default sportProgramSlice.reducer;
