import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { ThreePrinciples } from "@/components/ThreePrinciples";
import { ThreePillars } from "@/components/ThreePillars";
import { CourseSection } from "@/components/CourseSection";
import { SimplifiedLocations } from "@/components/SimplifiedLocations";
import { Footer } from "@/components/Footer";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Index = () => {
  const { elementRef: principlesRef, isVisible: principlesVisible } = useScrollAnimation();
  const { elementRef: pillarsRef, isVisible: pillarsVisible } = useScrollAnimation();
  const { elementRef: courseRef, isVisible: courseVisible } = useScrollAnimation();
  const { elementRef: locationsRef, isVisible: locationsVisible } = useScrollAnimation();

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <div 
        ref={principlesRef}
        className={`transition-all duration-1000 ${
          principlesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ThreePrinciples />
      </div>
      <div 
        ref={pillarsRef}
        className={`transition-all duration-1000 ${
          pillarsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <ThreePillars />
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
