import { AppStore } from "@/src/store/store";

export type RootState = ReturnType<AppStore["getState"]>;
