"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";
import { useCountdown } from "../../hooks/useCountDown";
import useBreakpoints from "../../hooks/useBreakpoints";
import { toggleModal as paymentToggleModal } from "../../store/Features/payment/paymentSlice";
import { toggleModal as authToggleModal } from "../../store/Features/auth/authSlice";

import { RootState } from "../../store";
import { dateHandler } from "../../utils";

interface Props {
  item: {
    sys: {
      id: string;
    };
    fields: {
    };
  };
}

function CarouselChild({ item }: Props): JSX.Element {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const { isMd, isLg } = useBreakpoints();


  const buyButtonHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      if (authInfo.email) {
        return dispatch(paymentToggleModal());
      }
      return dispatch(authToggleModal());
    },
    [authInfo.email, dispatch]
  );

  return (
    <>

    </>
  );
}

export default CarouselChild;
