"use client";
import React, { useState, useCallback, useRef } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "../../store";
import { toggleModal } from "../../store/Features/auth/authSlice";

import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import ForgotPassword from "./components/ForgotPasswordForm";
import EmailSent from "./components/EmailSent";

export default function AuthModal({ showAuthModal, setShowAuthModal }: any) {
  const [modalType, setModalType] = useState({
    formType: "login",
  });
  const { formType, isModalVisible } = useSelector(
    (state: RootState) => state.auth
  );
  const dispatch = useDispatch();

  const typeHandler = useCallback(() => {
    switch (formType) {
      case "login":
        return <LoginForm />;
      case "register":
        return <RegisterForm />;
      case "forgot_password":
        return <ForgotPassword />;
      case "email_sent":
        return <EmailSent />;
      default:
        return <LoginForm />;
    }
  }, [formType]);

  const handleClose = useCallback(
    () => dispatch(toggleModal()),
    [dispatch, toggleModal]
  );

  const handleModalClick = useCallback((e: any) => e.stopPropagation(), []);

  return (
    <>
      {isModalVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-base-black bg-opacity-75 z-50 overflow-y-auto w-full"
          onClick={handleClose}
        >
          <div
            className="bg-base-black w-full"
            onClick={handleModalClick}
          >
            {/* <div className="flex items-center justify-end">
              <div className="cursor-pointer" onClick={handleClose}>
                <XMarkIcon className="w-6 h-6" />
              </div>
            </div> */}
            {typeHandler()}
          </div>
        </div>
      )}
    </>
  );
}
