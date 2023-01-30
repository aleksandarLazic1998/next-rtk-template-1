import { combineReducers } from "@reduxjs/toolkit";
import rootApi from "./API/rootAPI";

const rootReducer = combineReducers({
	[rootApi.reducerPath]: rootApi.reducer,
});

export default rootReducer;
