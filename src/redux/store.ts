import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {jobReducer} from "./slices";

const rootReducer = combineReducers({
    jobReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

type RootState = ReturnType<typeof rootReducer>
type AppStore = ReturnType<typeof setupStore>
type AppDispatch = AppStore['dispatch']

export type {
    RootState,
    AppStore,
    AppDispatch
}


export {
    setupStore
}
