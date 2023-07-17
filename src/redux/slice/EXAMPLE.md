import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   exampleArray: [],
};

export const exampleSlice = createSlice({
   initialState,
   name: "exampleTitle",
   reducers: {
      resetExample: () => initialState,
      setExample: (state, action) => {
         if (action.payload.example_title) {
            state.exampleArray = action.payload.exampleTitle;
         }
      },
   },
});

export const { resetExample, setExample } = exampleSlice.actions;

export const selectFolloweeProducts = (state: { example: { exampleArray: any; }; }) => state.example.exampleArray;

export default exampleSlice.reducer;
