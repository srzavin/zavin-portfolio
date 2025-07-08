import PageLayout from "@/components/PageLayout";

// app/about/layout.tsx
import { ReactNode } from "react";

export default function ContactLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
        <PageLayout>
      {children} {/* Render children with the dynamic text color */}
    </PageLayout>
  );
}
