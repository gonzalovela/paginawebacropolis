export const WhoWeAreVideo = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="aspect-video rounded-2xl overflow-hidden shadow-elegant">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/NgxhR_ppPmI"
          title="¿Qué es Nueva Acrópolis?"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};
