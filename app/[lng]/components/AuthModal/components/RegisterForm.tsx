"use client";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { setAuthModalType } from "../../../store/Features/auth/authSlice";

const Register = ({ setModalType }: any) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, [setIsPasswordVisible]);

  const handleLogin = useCallback((e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    typeof window !== "undefined" &&
      window.localStorage.setItem("email", email);
    window.location.reload();
  }, []);

  return (
    <div className="pt-8 rounded-lg shadow-md">
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="w-full text-center mb-1 text-2xl font-bold">REGISTER</h1>
        <div className="w-full">
          <button className="w-full border border-base-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FaFacebook className="text-[#0A7AFF] mr-4" />
            <p className="text-base-black">Login with Facebook</p>
          </button>

          <button className="w-full border border-base-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FcGoogle className="mr-4" />
            <p className="text-base-black">Login with Google</p>
          </button>

          <button className="w-full border border-base-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FaApple className="text-base-black mr-4" />
            <p className="text-base-black">Login with Apple</p>
          </button>
        </div>

        <div className="w-full flex py-5 items-center justify-between">
          <div className="w-[45%] border-t border-base-gray"></div>
          <span className="self-top h-5 text-base-gray">or</span>
          <div className="w-[45%] border-t border-base-gray"></div>
        </div>

        <form
          className="space-y-6 w-full"
          action="#"
          method="POST"
          onSubmit={handleLogin}
        >
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="mt-2 block w-full rounded-lg text-base-gray shadow-sm bg-base-black placeholder:text-base-gray sm:text-sm sm:leading-6 p-5 border border-base-gray focus:border-base-gray focus:ring-0"
            />
          </div>

          <div className="flex mt-2 items-center justify-evenly border border-base-gray rounded p-3 pr-5">
            <input
              id="password"
              name="password"
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-11/12 text-base-gray shadow-sm bg-base-black placeholder:text-base-gray sm:text-sm sm:leading-6 border-transparent focus:border-transparent focus:ring-0"
            />
            {isPasswordVisible ? (
              <EyeSlashIcon
                className="text-base-gray cursor-pointer w-6 h-6"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeIcon
                className="text-base-gray cursor-pointer w-6 h-6"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex flex-col justify-between">
              <div className="flex items-center mb-4">
                <input
                  className="mr-1"
                  type="checkbox"
                  id="certify_age"
                  name="certify_age"
                  value="check"
                  required
                />
                <label className="label_remember">
                  I&#39;m certify that I am 18 years of age or older *
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  className="mr-1"
                  type="checkbox"
                  id="terms_and_conditions"
                  name="terms_and_conditions"
                  required
                  value="check"
                />
                <label className="label_remember">
                  I accept the Terms and Conditions *
                </label>
              </div>
              <div className="flex items-center mb-4">
                <input
                  className="mr-1"
                  type="checkbox"
                  id="receive_information"
                  name="receive_information"
                  value="check"
                />
                <label className="label_remember">
                  I want to receive information about tickets, games and news by
                  Email
                </label>
              </div>
            </div>
          </div>

          <div>
            <span className="text-base-gray">* required for confirmation</span>
            <button
              type="submit"
              className="w-full text-center px-5 py-6 bg-base-yellow text-base-black font-bold rounded-lg mt-4"
            >
              REGISTER
            </button>
            <div
              onClick={() => dispatch(setAuthModalType("login"))}
              className="w-full text-center px-5 py-6 cursor-pointer"
            >
              LOG IN
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
