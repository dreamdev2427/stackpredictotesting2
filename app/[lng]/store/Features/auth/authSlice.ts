import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  formType: string;
  isModalVisible: boolean;
  authInfo: {
    email: string | null;
    emailToReset: string;
  };
}

const initialState: AuthState = {
  formType: "login",
  isModalVisible: false,
  authInfo: {
    email:
      typeof window !== "undefined"
        ? window.localStorage.getItem("email")
        : null,
    emailToReset: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleModal: (state) => {
      state.isModalVisible = !state.isModalVisible;
    },
    setAuthModalType: (state, action: PayloadAction<string>) => {
      state.formType = action.payload;
    },
    setAuthInfo: (
      state,
      action: PayloadAction<{ email?: string; emailToReset?: string }>
    ) => {
      const { email, emailToReset } = action.payload;
      state.authInfo = {
        email: email
          ? email
          : typeof window !== "undefined"
          ? localStorage.getItem("email")
          : null,
        emailToReset: emailToReset ? emailToReset : "",
      };

      email &&
        typeof window !== "undefined" &&
        window.localStorage.setItem("email", email);
    },
  },
});

export const { toggleModal, setAuthModalType, setAuthInfo } = authSlice.actions;
export default authSlice.reducer;
