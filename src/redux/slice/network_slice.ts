import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   status: false,
};

export const networkSlice = createSlice({
   initialState,
   name: "NetworkStatus",
   reducers: {
      resetNetwork: () => initialState,
      setNetwork: (state, action) => {
         if (action.payload.networkStatus) {
            state.status = action.payload.NetworkStatus;
         }
      },
   },
});

export const { resetNetwork, setNetwork } = networkSlice.actions;

export const selectFolloweeProducts = (state: { network: { status: boolean } }) => state.network;

export default networkSlice.reducer;
