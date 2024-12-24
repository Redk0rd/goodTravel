import { createAsyncThunk } from '@reduxjs/toolkit';
import authService from '../../../services/authService';
import type { OneUserType } from '../../../types/tourType';

export const updateUserThunk = createAsyncThunk<OneUserType, { user: OneUserType }>(
  'user/updateUser',
  async ({ user }) => {
    const data = await authService.updateUser(user);
    return data;
  },
);
