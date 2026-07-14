import { createSlice } from "@reduxjs/toolkit";
import { normalizedHeadphones } from "../../../constants/normalized-mock";

const initialState = {
  entities: normalizedHeadphones.reduce((acc, headphone) => {
    acc[headphone.id] = headphone;

    return acc;
  }, {}),
  ids: normalizedHeadphones.map(({ id }) => id),
};

console.log(initialState);

export const headphoneSlice = createSlice({
  name: "headphone",
  initialState,
  selectors: {
    selectHeadphoneById: (state, id) => state.entities[id],
    selectHeadphonesIds: (state) => state.ids,
  },
});

// export cosnt selectHeadphoneById = (state) => state[headphoneSlice.name].entities[id];

export const { selectHeadphoneById, selectHeadphonesIds } =
  headphoneSlice.selectors;
