"use client";
import { SessionProvider as Provider } from "next-auth/react";
import React from "react";

const props = {
  children: React.ReactNode,
};

export default function SessionProvider({ children }) {
  return <Provider>{children}</Provider>;
}
