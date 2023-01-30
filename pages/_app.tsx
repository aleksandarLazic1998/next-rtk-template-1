import { wrapper } from "@/src/store/store";
import type { AppProps } from "next/app";
import { Provider } from "react-redux";

const App = ({ Component, ...rest }: Omit<AppProps, "pageProps">) => {
	const { store, props } = wrapper.useWrappedStore(rest);
	return (
		<Provider store={store}>
			<Component {...props.pageProps} />
		</Provider>
	);
};

export default App;
