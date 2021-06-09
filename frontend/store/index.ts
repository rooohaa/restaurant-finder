import { configureStore } from '@reduxjs/toolkit';

import restaurantsReducer from './reducers/restaurantsReducer';

const store = configureStore({
   reducer: {
      restaurantsReducer,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
