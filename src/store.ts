import { configureStore } from '@reduxjs/toolkit';

import rootReducer from './reducers/rootReducer';

const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production', // Enable Redux DevTools in development
});

export default store;