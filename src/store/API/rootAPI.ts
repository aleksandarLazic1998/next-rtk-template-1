import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

const rootApi = createApi({
	tagTypes: [],
	reducerPath: "api",
	extractRehydrationInfo(action, { reducerPath }) {
		if (action.type === HYDRATE) return action.payload[reducerPath];
	},
	baseQuery: fetchBaseQuery({
		baseUrl: "/",
		prepareHeaders: (headers) => {
			headers.append("Content-Type", "application/json");
			return headers;
		},
	}),
	endpoints: () => ({}),
});

export default rootApi;
