import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";

import { fetchShortener } from "../../services/axios.shortener";

export interface LinkItem {
  id: string;
  originalURL: string;
  shortUrl: string;
}

interface shortenerState {
  links: LinkItem[];
  originalURL: string;
  loading: boolean;
  shortUrl: string;
  longUrl: string;
  error: boolean;
}

const initialState: shortenerState = {
  links: [],
  originalURL: "",
  error: false,
  loading: false,
  shortUrl: "",
  longUrl: "",
};

export const fetchSearch = createAsyncThunk<string, string>(
  "shortener/fetchShortener",

  async (longUrl: string) => {
    try {
      const data = await fetchShortener(longUrl);

      console.log("Que hay aca", data);

      return data;
    } catch (error) {
      console.log("Mensaje no encontrado", error);
      throw error;
    }
  },
);

export const shortenerSlice = createSlice({
  name: "cardShortener",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setSearchResult: (state, action: PayloadAction<string>) => {
      state.originalURL = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchSearch.pending, (state) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchSearch.fulfilled, (state, action) => {
      state.loading = false;
      state.shortUrl = action.payload;
      state.longUrl = action.meta.arg;
      state.error = false;

      state.links.unshift({
        id: crypto.randomUUID(),
        originalURL: action.meta.arg,
        shortUrl: action.payload,
      });
    });
    builder.addCase(fetchSearch.rejected, (state) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export const { setLoading, setSearchResult } = shortenerSlice.actions;

export default shortenerSlice.reducer;
