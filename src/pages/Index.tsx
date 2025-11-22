import { Hero } from "@/components/Hero";
import { WhatIsNA } from "@/components/WhatIsNA";
import { ThreePrinciples } from "@/components/ThreePrinciples";
import { CourseSection } from "@/components/CourseSection";
import { SimplifiedLocations } from "@/components/SimplifiedLocations";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { elementRef: whatIsRef, isVisible: whatIsVisible } = useScrollAnimation();
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();
  const { elementRef: locationsRef, isVisible: locationsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Hero />
      <div 
        ref={whatIsRef}
        className={`transition-all duration-1000 ${
          whatIsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <WhatIsNA />
      </div>
      <div 
        ref={principlesRef}
        className={`transition-all duration-1000 ${
          principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ThreePrinciples />
      </div>
      <div 
        ref={courseRef}
        className={`transition-all duration-1000 ${
          courseVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <CourseSection />
      </div>
      <div 
        ref={locationsRef}
        className={`transition-all duration-1000 ${
          locationsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <SimplifiedLocations />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
