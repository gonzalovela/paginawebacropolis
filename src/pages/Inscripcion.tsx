import { Navigation } from "@/components/Navigation";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { SEO, seoConfig } from "@/components/SEO";
import { ParallaxImage } from "@/components/ParallaxImage";
import bannerInscripcion from "@/assets/banner-inscripcion.jpg";

const Inscripcion = () => {
  return (
    <>
      <SEO 
        {...seoConfig.inscripcion}
        url="https://acropolisperu.org/inscripcion"
      />
      <div className="min-h-screen">
        <Navigation />

        {/* Hero Banner */}
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden mt-16 md:mt-20">
          <ParallaxImage
            src={bannerInscripcion}
            alt="Grupo de personas caminando juntas hacia una escuela de filosofía al atardecer - Nueva Acrópolis Perú"
            speed={0.5}
            isHero
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-[1]" />
          
          {/* Decorative orange graphic elements */}
          <div className="absolute inset-0 z-[2] pointer-events-none hidden md:block">
            <div className="absolute top-0 right-0 w-64 lg:w-96 h-64 lg:h-96 bg-secondary/40 rounded-full blur-3xl animate-float-slow"></div>
            <div className="absolute bottom-0 left-0 w-72 lg:w-[400px] h-72 lg:h-[400px] bg-orange/30 rounded-full blur-3xl animate-pulse-glow"></div>
            <div className="absolute top-16 right-16 w-32 lg:w-48 h-32 lg:h-48 border-4 border-secondary/50 rounded-full animate-float-slower"></div>
            <div className="absolute bottom-24 right-1/4 w-24 lg:w-32 h-24 lg:h-32 bg-secondary/40 rotate-45 animate-float-slow"></div>
            
            <svg className="absolute top-1/3 right-10 w-40 lg:w-64 h-40 lg:h-64 opacity-50" viewBox="0 0 200 200">
              <circle cx="100" cy="100" r="80" fill="none" stroke="hsl(35, 90%, 55%)" strokeWidth="3" />
              <circle cx="100" cy="100" r="50" fill="hsl(35, 90%, 55%)" opacity="0.3" />
            </svg>
            
            <div className="absolute top-32 right-1/3 w-10 lg:w-14 h-10 lg:h-14 bg-secondary rounded-full opacity-60"></div>
            <div className="absolute bottom-36 left-1/5 w-6 lg:w-10 h-6 lg:h-10 bg-orange rounded-full opacity-50 animate-pulse-glow"></div>
          </div>

          <div className="container px-4 md:px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-4 md:space-y-6">
              <div className="inline-block px-4 py-2 md:px-6 md:py-3 bg-secondary/90 backdrop-blur-sm text-white rounded-full text-xs md:text-sm font-bold mb-2 md:mb-4 shadow-lg">
                INSCRIPCIÓN
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg px-2">
                Contáctanos
              </h1>
              <p className="text-base sm:text-lg md:text-2xl text-white/95 leading-relaxed drop-shadow-md px-2">
                Completa el formulario y nos pondremos en contacto contigo. 
                Estamos aquí para acompañarte en tu camino filosófico.
              </p>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <ContactForm />
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default Inscripcion;
