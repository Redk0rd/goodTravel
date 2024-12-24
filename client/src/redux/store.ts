import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/auth/authSlice';
import tourSlice from './slices/categoryTour/tourSlice';
import commentSlice from './slices/comments/commentSlice';
import favoriteSlice from './slices/favorites/favoriteSlice';
import equipmentSlice from './slices/equipment/equipmentSlice';
import userSlice from './slices/user/userSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    tour: tourSlice,
    comment: commentSlice,
    favorite: favoriteSlice,
    equipment: equipmentSlice,
    user: userSlice,
  },
});

export type StoreType = typeof store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
