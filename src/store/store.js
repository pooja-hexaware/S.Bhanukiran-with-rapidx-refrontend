import { configureStore } from '@reduxjs/toolkit'
import sampleentityReducer from '../views/sampleentity/store/sampleentitySlice'
import shopReducer from '../views/shops/store/shopSlice';
import itemReducer from '../views/home/store/menuslice';
import { createLogger } from 'redux-logger'
import notificationReducer from '../middleware/notification/store/notificationSlice'
let middlewares = []
if (process.env.NODE_ENV === `development`) {
    const logger = createLogger({
        collapsed: (getState, action, logEntry) => !logEntry.error,
    })
    middlewares.push(logger)
}
export default configureStore({
    reducer: {
        notification: notificationReducer,
        sampleentity: sampleentityReducer,
        shops: shopReducer,
        items: itemReducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(middlewares),
    devTools: process.env.NODE_ENV !== 'production',
})
