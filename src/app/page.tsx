"use client";

import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import InformationPage from "./components/InformationSection";

export default function Home() {
  return (
    <main className="p-2 max-w-[1200px] w-full mx-auto relative">
      <InformationPage />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
