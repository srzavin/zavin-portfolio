"use client";  
import { useEffect, useState, useRef } from "react";
import AboutLayout from "./layout"; // Import the layout
import Main from './main';
import Page2 from './page2';

export default function AboutPage() {
  const [textColor, setTextColor] = useState("text-gray-300"); // Default color (for Main)
    const [iconColor, setIconColor] = useState("text-gray-300"); // Default color (for Main)
  const mainRef = useRef(null); // Reference for the Main section
  const page2Ref = useRef(null); // Reference for the Page2 section

  // Intersection Observer to change the text color based on which section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target === mainRef.current && entry.isIntersecting) {
            setTextColor("text-gray-300"); // Main section is in view
            setIconColor("text-gray-300");
          }
          if (entry.target === page2Ref.current && entry.isIntersecting) {
            setTextColor("text-gray-700"); // Page2 section is in view
            setIconColor("text-gray-700");
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the section is in view
    );

    if (mainRef.current) observer.observe(mainRef.current);
    if (page2Ref.current) observer.observe(page2Ref.current);

    // Cleanup observer on component unmount
    return () => {
      if (mainRef.current) observer.unobserve(mainRef.current);
      if (page2Ref.current) observer.unobserve(page2Ref.current);
    };
  }, []);

  return (
    <AboutLayout textColor={textColor} iconColor={iconColor}> {/* Pass dynamic text color */}
      <div className="scrollbar-thin snap-y overflow-y-auto snap-mandatory h-full w-full">
        <div
          ref={mainRef}
          className="snap-always snap-center"
        >
          <Main />
        </div>
        <div
          ref={page2Ref}
          className="snap-always snap-center"
        >
          <Page2 />
        </div>
      </div>
    </AboutLayout>
  );
}
