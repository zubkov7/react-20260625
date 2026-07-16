import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";
import { getHeadphoneById } from "./get-headphone-by-id";

const initialState = {
  // ids: normalizedHeadphones.map(({ id }) => id),
  // entities: normalizedHeadphones.reduce((acc, item) => {
  //   acc[item.id] = item;

  //   return acc;
  // }, {}),
  ids: [],
  entities: {},
  requestStatus: "idle",
};

const entityAdapter = createEntityAdapter();

export const headphonesSlice = createSlice({
  name: "headphones",
  initialState: entityAdapter.getInitialState({ requestStatus: "idle" }),
  selectors: {
    selectHeadphonesIds: (state) => state.ids,
    selectHeadphoneById: (state, id) => state.entities[id],
    selectRequestStatus: (state) => state.requestStatus,
  },
  extraReducers: (builder) =>
    builder
      .addCase(getHeadphoneById.pending, (state) => {
        state.requestStatus = "pending";
      })
      .addCase(getHeadphoneById.fulfilled, (state, { payload }) => {
        // state.ids.push(payload.id);
        // state.entities[payload.id] = payload;
        entityAdapter.setOne(state, payload);
        state.requestStatus = "fulfilled";
      })
      .addCase(getHeadphoneById.rejected, (state) => {
        state.requestStatus = "rejected";
      }),
});

export const { selectHeadphonesIds, selectHeadphoneById, selectRequestStatus } =
  headphonesSlice.selectors;
