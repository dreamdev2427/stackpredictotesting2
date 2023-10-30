"use client";

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Features/counter/counterSlice";
import paymentSlice from "./Features/payment/paymentSlice";
import authSlice from "./Features/auth/authSlice";

export const store = configureStore({
  reducer: {
    counter: counterSlice,
    payment: paymentSlice,
    auth: authSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
