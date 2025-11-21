export const PhilosophyCircle = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
            El Círculo de la Filosofía
          </h2>
          <p className="text-lg md:text-xl text-foreground/70">
            Nuestra propuesta integra filosofía, cultura y voluntariado en un ciclo continuo de aprendizaje y acción práctica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-square max-w-2xl mx-auto"
            style={{
              animation: "float 6s ease-in-out infinite"
            }}>
            {/* Outer circle */}
            <svg className="w-full h-full animate-scale-in" viewBox="0 0 400 400">
              {/* Background circle - animated pulse */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                opacity="0.2"
              >
                <animate
                  attributeName="r"
                  values="180;185;180"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Central philosophy circle - animated */}
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="hsl(var(--primary))"
                opacity="0.1"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.15;0.1"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
              >
                <animate
                  attributeName="r"
                  values="80;82;80"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Cultura filosófica - top - animated */}
              <circle
                cx="200"
                cy="80"
                r="50"
                fill="hsl(var(--secondary))"
                opacity="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.15;0.25;0.15"
                  dur="3.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="200"
                cy="80"
                r="50"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
              >
                <animate
                  attributeName="r"
                  values="50;52;50"
                  dur="3.5s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Voluntariado filosófico - bottom right - animated */}
              <circle
                cx="304"
                cy="260"
                r="50"
                fill="hsl(var(--accent))"
                opacity="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.15;0.25;0.15"
                  dur="3.5s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="304"
                cy="260"
                r="50"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
              >
                <animate
                  attributeName="r"
                  values="50;52;50"
                  dur="3.5s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Vida práctica - bottom left - animated */}
              <circle
                cx="96"
                cy="260"
                r="50"
                fill="hsl(var(--orange))"
                opacity="0.15"
              >
                <animate
                  attributeName="opacity"
                  values="0.15;0.25;0.15"
                  dur="3.5s"
                  begin="1.5s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle
                cx="96"
                cy="260"
                r="50"
                fill="none"
                stroke="hsl(var(--orange))"
                strokeWidth="2"
              >
                <animate
                  attributeName="r"
                  values="50;52;50"
                  dur="3.5s"
                  begin="1.5s"
                  repeatCount="indefinite"
                />
              </circle>

              {/* Connecting lines - animated */}
              <line
                x1="200" y1="120" x2="200" y2="130"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.5;0.3"
                  dur="2s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="260" y1="234" x2="270" y2="225"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.5;0.3"
                  dur="2s"
                  begin="0.5s"
                  repeatCount="indefinite"
                />
              </line>
              <line
                x1="140" y1="234" x2="130" y2="225"
                stroke="hsl(var(--muted-foreground))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              >
                <animate
                  attributeName="opacity"
                  values="0.3;0.5;0.3"
                  dur="2s"
                  begin="1s"
                  repeatCount="indefinite"
                />
              </line>
            </svg>

            {/* Labels with subtle animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-fade-in">
                <p className="text-2xl font-bold text-primary">Filosofía</p>
              </div>
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-32 animate-fade-in" style={{ animationDelay: "0.5s" }}>
              <p className="text-sm font-semibold text-secondary">Cultura Filosófica</p>
            </div>

            <div className="absolute bottom-16 right-16 text-center w-32 animate-fade-in" style={{ animationDelay: "1s" }}>
              <p className="text-sm font-semibold text-accent">Voluntariado Filosófico</p>
            </div>

            <div className="absolute bottom-16 left-0 text-center w-32 animate-fade-in" style={{ animationDelay: "1.5s" }}>
              <p className="text-sm font-semibold text-orange">Vida Práctica</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-foreground/70 leading-relaxed max-w-2xl mx-auto">
              La filosofía está en el centro, iluminando nuestra cultura y voluntariado, que a su vez nutren una vida práctica con sentido, cerrando el círculo en un proceso continuo de crecimiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
