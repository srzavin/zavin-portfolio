// src/components/AboutLayout.tsx
"use client";
import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";

export default function Layout({
  children,
  textColor,
  iconColor,
  logo,
}: {
  children: ReactNode;
  textColor: string;
  iconColor: string;
  logo: string;
}) {
  return (
    <PageLayout textColor={textColor} iconColor={iconColor} logo={logo}>
      {children}
    </PageLayout>
  );
}
