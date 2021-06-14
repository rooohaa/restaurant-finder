import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:8000';

export const getReviewsAsync = createAsyncThunk(
   'reviews/getReviews',
   async () => {
      const res = await fetch(`${BASE_URL}/api/reviews`);

      if (res.ok) {
         const reviews = await res.json();

         return { reviews };
      }
   }
);

const initialState: InitState = {
   reviews: [],
};

const reviewsSlice = createSlice({
   name: 'reviews',
   initialState,
   reducers: {},
   extraReducers: {
      [`${getReviewsAsync.fulfilled}`]: (state, action) => {
         state.reviews = action.payload.reviews;
      },
   },
});

export type TReviewsData = {
   id: number;
   name: string;
   review: string;
   rating: number;
   restaurant_id: number;
};

interface InitState {
   reviews: TReviewsData[];
}

export default reviewsSlice.reducer;
