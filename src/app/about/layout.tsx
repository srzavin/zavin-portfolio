// src/app/about/layout.tsx

import { ReactNode } from "react";
import PageLayout from "@/components/PageLayout";

export default function AboutLayout({
  children,
  textColor = "text-gray-300", // Default color if not passed
   iconColor= "text-gray-300",
   logo ="/logo.png",
}: {
  children: ReactNode;
  textColor?: string; // Default to white if not passed
   iconColor?: string;
   logo?: string
}) {
  return (
    <PageLayout textColor={textColor} iconColor={textColor} logo={logo}>
      {children} {/* Render children with the dynamic text color */}
    </PageLayout>
  );
}
