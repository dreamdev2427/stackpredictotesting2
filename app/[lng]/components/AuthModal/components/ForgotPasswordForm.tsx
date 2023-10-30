"use client";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { setAuthModalType, setAuthInfo } from "../../../store/Features/auth/authSlice";

function ForgotPassword() {
  const [emailReset, setEmailReset] = useState("");
  const dispatch = useDispatch();

  const resetPasswordHandler = useCallback(() => {
    dispatch(setAuthModalType("email_sent"));
    dispatch(setAuthInfo({ emailToReset: emailReset }));
  }, [emailReset]);

  return (
    <div className="rounded-lg shadow-md">
      <div className="w-full mx-auto flex flex-col items-center px-[77px]">
        <h1 className="w-full text-center mb-1 text-2xl font-bold">
          FORGOT PASSWORD
        </h1>
        <p className="w-full border-blue-500 text-center">
          We will send a password reset link to your email. It is valid for a
          limited time.
        </p>

        <form className="space-y-6 w-full" action="#" method="POST">
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              onChange={(e) => setEmailReset(e.target.value)}
              required
              className="mt-2 block w-full rounded-lg text-base-gray shadow-sm bg-base-black placeholder:text-base-gray sm:text-sm sm:leading-6 p-5 border border-base-gray outline-none"
            />
          </div>

          <div>
            <div
              onClick={resetPasswordHandler}
              className="w-full text-center px-5 py-6 bg-base-yellow text-base-black font-bold rounded-lg"
            >
              RESET PASSWORD
            </div>
          </div>
        </form>
        <div
          onClick={() => dispatch(setAuthModalType("login"))}
          className="w-full text-base-gray text-center px-5 py-6 cursor-pointer"
        >
          TO LOGIN PAGE
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
