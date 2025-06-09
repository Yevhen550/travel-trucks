import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchCampers } from "../API/campersApi";

export const getCampers = createAsyncThunk(
  "campers/getCampers",
  async (page, thunkAPI) => {
    try {
      const data = await fetchCampers(page);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const initialState = {
  items: [],
  page: 1,
  hasMore: true,
  loading: false,
  error: null,
};

const campersSlice = createSlice({
  name: "campers",
  initialState,
  reducers: {
    resetCampers: (state) => {
      state.items = [];
      state.page = 1;
      state.hasMore = true;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCampers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getCampers.fulfilled, (state, action) => {
        const newItems = Array.isArray(action.payload)
          ? action.payload
          : Array.isArray(action.payload?.items)
          ? action.payload.items
          : [];

        state.items = [...state.items, ...newItems];
        state.page += 1;
        state.hasMore = newItems.length > 0;
        state.loading = false;
      })
      .addCase(getCampers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { resetCampers } = campersSlice.actions;
export default campersSlice.reducer;
