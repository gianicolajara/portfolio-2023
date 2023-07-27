"use client";

import ExperienceSection from "./components/ExperienceSection";
import Footer from "./components/Footer";
import InformationPage from "./components/InformationSection";

export default function Home() {
  return (
    <main className=" max-w-[1200px] w-full mx-auto relative p-4">
      <InformationPage />
      <ExperienceSection />
      <Footer />
    </main>
  );
}
