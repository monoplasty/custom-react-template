import { configureStore } from "@reduxjs/toolkit";
import { type TypedUseSelectorHook, useDispatch, useSelector, shallowEqual } from "react-redux";

import counterReducer from "./modules/counter";

export { operateCount } from "./modules/counter";

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const appShallowEqual = shallowEqual;
export default store;
