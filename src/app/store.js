import { combineReducers, configureStore } from "@reduxjs/toolkit";
import outletReducer from "../features/Outlet/outlet.slice";
import {
  serviceListenerMiddleware,
  // serviceMiddleware,
} from "./middleware/serviceMiddleware";

const rootReducer = combineReducers({
  outlet: outletReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .prepend(serviceListenerMiddleware.middleware)
      // .concat(serviceMiddleware),
});
