import { createSlice } from "@reduxjs/toolkit";

export interface PaymentState {
  isModalVisible: boolean;
}

const initialState: PaymentState = {
  isModalVisible: false,
};

export const paymentSlice = createSlice({
  name: "payment",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalVisible = !state.isModalVisible;
    },
  },
});

export const { toggleModal } = paymentSlice.actions;
export default paymentSlice.reducer;
