import { Hero } from "@/components/Hero";
import { WhatIsNA } from "@/components/WhatIsNA";
import { ThreePrinciples } from "@/components/ThreePrinciples";
import { PhilosophyCircle } from "@/components/PhilosophyCircle";
import { CourseSection } from "@/components/CourseSection";
import { SimplifiedLocations } from "@/components/SimplifiedLocations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsNA />
      <ThreePrinciples />
      <PhilosophyCircle />
      <CourseSection />
      <SimplifiedLocations />
      <Footer />
    </div>
  );
};

export default Index;
