import { configureStore } from "@reduxjs/toolkit";
import { createWrapper } from "next-redux-wrapper";
import rootApi from "./API/rootAPI";
import rootReducer from "./rootReducer";

export const makeStore = () =>
	configureStore({
		reducer: rootReducer,
		middleware: (gDM) => gDM().concat(rootApi.middleware),
	});

export type AppStore = ReturnType<typeof makeStore>;

export const wrapper = createWrapper<AppStore>(makeStore);
