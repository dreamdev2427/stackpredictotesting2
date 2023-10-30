import React from "react";
import { useSelector } from "react-redux";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { RootState } from "../../../store";

function EmailSent() {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  return (
    <div className="rounded-lg shadow-md">
      <div className="w-full mx-auto flex flex-col items-center px-[75px]">
        <h1 className="w-full text-center mb-1 text-2xl font-bold">
          Email sent
        </h1>
        <p className="w-full border-blue-500 text-center">
          We have sent instructions for setting a new password to{" "}
          <span className="text-base-yellow">{authInfo?.emailToReset}</span>
        </p>
      </div>
    </div>
  );
}

export default EmailSent;
