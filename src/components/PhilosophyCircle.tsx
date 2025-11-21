export const PhilosophyCircle = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-subtle">
      <div className="container px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-primary mb-6">
            El Círculo de la Filosofía
          </h2>
          <p className="text-lg md:text-xl text-foreground/80">
            Nuestra propuesta integra filosofía, cultura y voluntariado en un ciclo continuo de aprendizaje y acción práctica.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative aspect-square max-w-2xl mx-auto">
            {/* Outer circle */}
            <svg className="w-full h-full animate-scale-in" viewBox="0 0 400 400">
              {/* Background circle */}
              <circle
                cx="200"
                cy="200"
                r="180"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.2"
              />

              {/* Central philosophy circle */}
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="hsl(var(--primary))"
                opacity="0.1"
              />
              <circle
                cx="200"
                cy="200"
                r="80"
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="3"
              />

              {/* Cultura filosófica - top */}
              <circle
                cx="200"
                cy="80"
                r="50"
                fill="hsl(var(--secondary))"
                opacity="0.15"
              />
              <circle
                cx="200"
                cy="80"
                r="50"
                fill="none"
                stroke="hsl(var(--secondary))"
                strokeWidth="2"
              />

              {/* Voluntariado filosófico - bottom right */}
              <circle
                cx="304"
                cy="260"
                r="50"
                fill="hsl(var(--accent))"
                opacity="0.15"
              />
              <circle
                cx="304"
                cy="260"
                r="50"
                fill="none"
                stroke="hsl(var(--accent))"
                strokeWidth="2"
              />

              {/* Vida práctica - bottom left */}
              <circle
                cx="96"
                cy="260"
                r="50"
                fill="hsl(var(--turquoise))"
                opacity="0.15"
              />
              <circle
                cx="96"
                cy="260"
                r="50"
                fill="none"
                stroke="hsl(var(--turquoise))"
                strokeWidth="2"
              />

              {/* Connecting lines */}
              <line
                x1="200" y1="120" x2="200" y2="130"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              />
              <line
                x1="260" y1="234" x2="270" y2="225"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              />
              <line
                x1="140" y1="234" x2="130" y2="225"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                opacity="0.3"
                strokeDasharray="5,5"
              />
            </svg>

            {/* Labels */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <p className="text-2xl font-bold text-primary">Filosofía</p>
              </div>
            </div>

            <div className="absolute top-6 left-1/2 -translate-x-1/2 text-center w-32">
              <p className="text-sm font-semibold text-secondary">Cultura Filosófica</p>
            </div>

            <div className="absolute bottom-16 right-16 text-center w-32">
              <p className="text-sm font-semibold text-accent">Voluntariado Filosófico</p>
            </div>

            <div className="absolute bottom-16 left-0 text-center w-32">
              <p className="text-sm font-semibold text-turquoise">Vida Práctica</p>
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
