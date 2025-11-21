import { Hero } from "@/components/Hero";
import { WhatIsNA } from "@/components/WhatIsNA";
import { ThreePrinciples } from "@/components/ThreePrinciples";
import { PhilosophyCircle } from "@/components/PhilosophyCircle";
import { AppliedPhilosophy } from "@/components/AppliedPhilosophy";
import { CourseSection } from "@/components/CourseSection";
import { CultureActivities } from "@/components/CultureActivities";
import { Volunteering } from "@/components/Volunteering";
import { Locations } from "@/components/Locations";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <WhatIsNA />
      <ThreePrinciples />
      <PhilosophyCircle />
      <AppliedPhilosophy />
      <CourseSection />
      <CultureActivities />
      <Volunteering />
      <Locations />
      <Footer />
    </div>
  );
};

export default Index;
