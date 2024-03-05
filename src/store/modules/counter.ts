import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IState {
  count: number;
}

const initialState: IState = {
  count: 0,
};

const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    operateCount: (state, action: PayloadAction<number>) => {
      state.count += action.payload;
    },
  },
});

export const { operateCount } = counterSlice.actions;
export default counterSlice.reducer;
