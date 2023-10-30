"use client";

import React from "react";
import { Provider as ReactReduxProvider } from "react-redux";
import { store } from ".";

export function Provider({ children }: any) {
  return <ReactReduxProvider store={store}>{children}</ReactReduxProvider>;
}
