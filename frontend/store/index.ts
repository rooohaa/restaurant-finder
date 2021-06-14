import { configureStore } from '@reduxjs/toolkit';

import restaurantsReducer from './reducers/restaurantsReducer';
import reviewsReducer from './reducers/reviewsReducer';

const store = configureStore({
   reducer: {
      restaurantsReducer,
      reviewsReducer,
   },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
