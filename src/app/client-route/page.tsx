"use client";

import React from "react";
import { useTheme } from "@/components/theme-provider";
import { clienSlideFunction } from "@/utils/client-utils";

export default function ClientRoutePage() {
  const theme = useTheme();
  const result = clienSlideFunction();

  return <h1>client route {result}</h1>;
}
