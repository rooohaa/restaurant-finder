import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const getRestaurantsAsync = createAsyncThunk(
   'restaurants/getRestaurants',
   async () => {
      const res = await fetch('http://localhost:8000/api/restaurants');

      if (res.ok) {
         const restaurants = await res.json();

         return { restaurants };
      }
   }
);

export const addRestaurantAsync = createAsyncThunk(
   'restaurants/addRestaurant',
   async (payload: TRestaurantFormData) => {
      const res = await fetch('http://localhost:8000/api/restaurants', {
         method: 'POST',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(payload),
      });

      if (res.ok) {
         const restaurant = await res.json();

         return { restaurant };
      }
   }
);

const initialState: InitState = {
   restaurants: [],
   isLoading: false,
   error: false,
};

const restaurantsReducer = createSlice({
   name: 'restaurants',
   initialState,
   reducers: {},
   extraReducers: {
      [`${getRestaurantsAsync.pending}`]: (state) => {
         state.isLoading = true;
      },
      [`${getRestaurantsAsync.rejected}`]: (state) => {
         state.restaurants = [];
         state.isLoading = false;
         state.error = true;
      },
      [`${getRestaurantsAsync.fulfilled}`]: (state, action) => {
         state.restaurants = action.payload.restaurants;
         state.isLoading = false;
      },
      [`${addRestaurantAsync.fulfilled}`]: (state, action) => {
         state.restaurants.push(action.payload.restaurant);
      },
   },
});

export type TRestaurantsData = {
   id: number;
   name: string;
   location: string;
   price_range: string;
};

type TRestaurantFormData = {
   name: string;
   location: string;
   price_range: string;
};

interface InitState {
   restaurants: TRestaurantsData[];
   isLoading: boolean;
   error: boolean;
}

export default restaurantsReducer.reducer;
