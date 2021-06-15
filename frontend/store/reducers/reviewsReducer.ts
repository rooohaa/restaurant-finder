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

export const postReviewAsync = createAsyncThunk(
   'reviews/postReview',
   async (data: TReviewsFormData) => {
      const res = await fetch(`${BASE_URL}/api/reviews`, {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(data),
      });

      if (res.ok) {
         const review = await res.json();

         return { review };
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
      [`${postReviewAsync.fulfilled}`]: (state, action) => {
         state.reviews.push(action.payload.review);
      },
   },
});

type TReviewsFormData = {
   name: string;
   review: string;
   rating: number;
   restaurant_id: number;
};

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
