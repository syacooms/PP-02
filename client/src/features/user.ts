import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface userState {
  name: string;
  email: string;
  imageUrl: string;
}

const initialStateValue: userState = { name: '', email: '', imageUrl: '' } as userState;

export const userSlice = createSlice({
  name: 'user',
  initialState: { value: initialStateValue },
  reducers: {
    login: (state, action: PayloadAction<userState>) => {
      state.value = action.payload;
    },

    logout: (state) => {
      state.value = initialStateValue;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
