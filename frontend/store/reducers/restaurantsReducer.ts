import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const BASE_URL = 'http://localhost:8000';

export const getRestaurantsAsync = createAsyncThunk(
   'restaurants/getRestaurants',
   async () => {
      const res = await fetch(`${BASE_URL}/api/restaurants`);

      if (res.ok) {
         const restaurants = await res.json();

         return { restaurants };
      }
   }
);

export const addRestaurantAsync = createAsyncThunk(
   'restaurants/addRestaurant',
   async (payload: TRestaurantFormData) => {
      const res = await fetch(`${BASE_URL}/api/restaurants`, {
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

export const deleteRestaurantAsync = createAsyncThunk(
   'restaurants/deleteRestaurant',
   async (id: number) => {
      const res = await fetch(`${BASE_URL}/api/restaurants/${id}`, {
         method: 'DELETE',
      });

      if (res.ok) {
         const restaurant = await res.json();

         return { restaurant };
      }
   }
);

export const updateRestaurantAsync = createAsyncThunk(
   'restaurants/updateRestaurant',
   async (payload: TRestaurantsData) => {
      const res = await fetch(`${BASE_URL}/api/restaurants/${payload.id}`, {
         method: 'PUT',
         headers: {
            'Content-type': 'application/json',
         },
         body: JSON.stringify(payload),
      });

      if (res.ok) {
         const updatedRestaurant = await res.json();

         return { restaurant: updatedRestaurant };
      }
   }
);

const initialState: InitState = {
   restaurants: [],
   isLoading: false,
   error: false,
   sortProperty: '',
};

const restaurantsReducer = createSlice({
   name: 'restaurants',
   initialState,
   reducers: {
      setSortProp(state, action) {
         state.sortProperty = action.payload;
      },
   },
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
      [`${deleteRestaurantAsync.fulfilled}`]: (state, action) => {
         const restId = action.payload.restaurant.id;
         state.restaurants = state.restaurants.filter((el) => el.id !== restId);
      },
      [`${updateRestaurantAsync.fulfilled}`]: (state, action) => {
         const idx = state.restaurants.findIndex(
            (el) => el.id === action.payload.restaurant.id
         );

         state.restaurants[idx] = action.payload.restaurant;
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
   sortProperty: string;
}

export const { setSortProp } = restaurantsReducer.actions;

export default restaurantsReducer.reducer;
