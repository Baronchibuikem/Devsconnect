import { combineReducers } from "redux";
import authentication from "./authentication_reducer";
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'


const persistConfig = {
	key: 'root',
	storage,
	whiteList: ["authentication"]
}

const rootReducer = combineReducers({
	authentication
})

export default persistReducer(persistConfig, rootReducer)

