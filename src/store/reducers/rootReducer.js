
import storage from 'redux-persist/lib/storage'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'
import appReducer from './appReducer'
import userReducer from './userReducer'
import authReducer from './authReducer'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'

const commonConfig = {
    storage,
    stateReconsiler: autoMergeLevel2
}

const authConfig = {
    ...commonConfig,
    key: 'auth',
    whitelist: ['isLogin', 'accessToken']

}

const appConfig = {
    ...commonConfig,
    key: 'app',
    whitelist: ['location', 'wishlist', 'isAdmin']
}

const rootReducer = combineReducers({
    app: persistReducer(appConfig, appReducer),
    auth: persistReducer(authConfig, authReducer),
    user: userReducer,
})


export default rootReducer