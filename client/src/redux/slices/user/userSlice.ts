import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { UserStateType, UserType } from '../../../types/authType';
import { updateUserThunk } from './userThunkActrion';

type InitialUserStateProps = {
  editUser: UserStateType | null;
};

const initialState: InitialUserStateProps = {
  editUser: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserStateType | null>) => {
      state.editUser = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(updateUserThunk.fulfilled, (state, action) => {
      state.editUser = null;
    });
  },
});
export const { setUser } = userSlice.actions;

export default userSlice.reducer;
