import PageLayout from "@/components/PageLayout";
import { ReactNode } from "react";

export default function ContactLayout({
  children,
  textColor = "text-gray-300", // Default color if not passed
   iconColor= "text-gray-300",
}: {
  children: ReactNode;
  textColor?: string; // Default to white if not passed
   iconColor?: string
}) {
  return (
    <PageLayout textColor={textColor} iconColor={textColor}>
      {children} {/* Render children with the dynamic text color */}
    </PageLayout>
  );
}
