import { configureStore } from "@reduxjs/toolkit"
import vacanciesReducer from './vacanciesSlice'
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from "redux"

export interface IRootState {
    combined: {
        vacancies: {
            title: string,
            description: string,
            id: number,
            closed: boolean,
            english_lvl: "A" | "B" | "C",
            grade: "L1" | "L2" | "L3",
            tags: string[],
            users: string[],
            owner: string
        }[],
        users: {
            current: string,
            data: {
                name: string,
                id: string,
                password: string
            }[]
        }
    }
}

const persistConfig = {
    key: 'root',
    storage,
}

const rootReducer = combineReducers({
    combined: vacanciesReducer,
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false
    }),
})

export const persistor = persistStore(store)
