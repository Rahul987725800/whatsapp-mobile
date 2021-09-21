import { createSlice, PayloadAction } from '@reduxjs/toolkit';
const initialState = {
  showMainPopup: false,
};
const generalSlice = createSlice({
  name: 'general',
  initialState: initialState,
  reducers: {
    setShowMainPopup(state, action: PayloadAction<boolean>) {
      state.showMainPopup = action.payload;
    },
  },
});

export const { setShowMainPopup } = generalSlice.actions;
export default generalSlice.reducer;
