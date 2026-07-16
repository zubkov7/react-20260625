import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectHeadphoneById } from "./slice";

export const getHeadphoneById = createAsyncThunk(
  "headphone/getHeadphoneById",
  async (id, { rejectWithValue, dispatch, getState }) => {
    const response = await fetch(`http://localhost:3001/api/product/${id}`);

    const result = await response.json();

    if (!result) {
      rejectWithValue("not found");
      return;
    }

    return result;
  },
  {
    condition: (id, { getState }) => {
      const headphone = selectHeadphoneById(getState());

      return !headphone;
    },
  },
);

// getHeadphoneById(params)
