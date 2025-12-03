import { useEffect } from "react";
import { PageLayout } from "@/components/layouts/PageLayout";
import { SEO } from "@/components/SEO";

const Privacidad = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <PageLayout>
      <SEO
        title="Política de Privacidad"
        description="Conoce cómo Nueva Acrópolis Perú protege tus datos personales conforme a la Ley N° 29733 de Protección de Datos Personales."
        keywords="política de privacidad, protección de datos, ley 29733, datos personales, nueva acrópolis perú, ARCO"
        url="https://acropolisperu.org/privacidad"
        breadcrumbs={[{ name: "Política de Privacidad", url: "https://acropolisperu.org/privacidad" }]}
      />
      
      <div className="bg-background py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Política de Privacidad
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground/70">
              Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <p className="text-lg">
              Nueva Acrópolis Perú respeta tu privacidad y se compromete a proteger tus datos 
              personales de acuerdo con la Ley N° 29733, Ley de Protección de Datos Personales 
              del Perú, y su Reglamento aprobado mediante Decreto Supremo N° 003-2013-JUS.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Responsable del Tratamiento
              </h2>
              <p>
                La Asociación Cultural Nueva Acrópolis del Perú es responsable del tratamiento 
                de los datos personales recogidos a través de este sitio web.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Denominación:</strong> Asociación Cultural Nueva Acrópolis del Perú</li>
                <li><strong>Correo electrónico:</strong> informes@acropolisperu.org</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Datos Personales que Recopilamos
              </h2>
              <p>
                Recopilamos datos personales cuando completas nuestros formularios de contacto 
                o inscripción. Los datos que podemos recopilar incluyen:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Datos de identificación:</strong> nombre completo</li>
                <li><strong>Datos de contacto:</strong> correo electrónico, número de teléfono</li>
                <li><strong>Datos de interés:</strong> área de interés (filosofía, cultura, voluntariado)</li>
                <li><strong>Ubicación preferida:</strong> sede de Nueva Acrópolis de tu preferencia</li>
                <li><strong>Mensaje:</strong> cualquier información adicional que desees compartir</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Finalidad del Tratamiento
              </h2>
              <p>Utilizamos tus datos personales para las siguientes finalidades:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Responder a tus consultas e solicitudes de información</li>
                <li>Gestionar tu inscripción en cursos, actividades culturales o programas de voluntariado</li>
                <li>Enviarte información sobre nuestras actividades cuando lo hayas solicitado</li>
                <li>Contactarte a través de la sede más cercana a tu ubicación</li>
                <li>Mejorar nuestros servicios y la experiencia del usuario</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Base Legal del Tratamiento
              </h2>
              <p>
                El tratamiento de tus datos personales se basa en tu consentimiento expreso, 
                el cual otorgas al completar y enviar nuestros formularios de contacto o inscripción. 
                Este consentimiento cumple con los requisitos establecidos en el artículo 13.5 
                de la Ley N° 29733.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Destinatarios de los Datos
              </h2>
              <p>
                Tus datos personales pueden ser compartidos con:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Sedes locales:</strong> para atender tu solicitud en la ubicación más cercana</li>
                <li><strong>Proveedores de servicios:</strong> utilizamos servicios de terceros para 
                el envío de correos electrónicos (Resend) y almacenamiento de datos (Supabase), 
                quienes procesan los datos bajo nuestras instrucciones y con medidas de seguridad adecuadas</li>
              </ul>
              <p className="mt-4">
                No vendemos, alquilamos ni compartimos tus datos personales con terceros 
                para fines de marketing sin tu consentimiento expreso.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Plazo de Conservación
              </h2>
              <p>
                Conservamos tus datos personales durante el tiempo necesario para cumplir 
                con las finalidades para las que fueron recogidos y para cumplir con 
                obligaciones legales aplicables. Los datos de inscripción se conservan 
                mientras mantengas interés en nuestras actividades o hasta que solicites 
                su eliminación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Tus Derechos ARCO
              </h2>
              <p>
                De acuerdo con la Ley N° 29733, tienes derecho a:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Acceso:</strong> conocer qué datos personales tenemos sobre ti</li>
                <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos</li>
                <li><strong>Cancelación:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios</li>
                <li><strong>Oposición:</strong> oponerte al tratamiento de tus datos en determinadas circunstancias</li>
              </ul>
              <p className="mt-4">
                Para ejercer estos derechos, puedes contactarnos a través del correo electrónico 
                informes@acropolisperu.org, indicando claramente tu solicitud y adjuntando 
                una copia de tu documento de identidad.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                8. Medidas de Seguridad
              </h2>
              <p>
                Implementamos medidas técnicas y organizativas apropiadas para proteger 
                tus datos personales contra el acceso no autorizado, pérdida, alteración 
                o destrucción. Estas medidas incluyen:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Cifrado de datos en tránsito mediante HTTPS</li>
                <li>Control de acceso a los sistemas que almacenan datos personales</li>
                <li>Políticas de seguridad de la información (Row Level Security)</li>
                <li>Almacenamiento en servidores seguros con respaldo regular</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                9. Cookies
              </h2>
              <p>
                Este sitio web puede utilizar cookies técnicas necesarias para su correcto 
                funcionamiento. No utilizamos cookies de seguimiento o publicidad de terceros. 
                Puedes configurar tu navegador para rechazar cookies, aunque esto puede afectar 
                algunas funcionalidades del sitio.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                10. Menores de Edad
              </h2>
              <p>
                No recopilamos intencionalmente datos personales de menores de 14 años sin 
                el consentimiento de sus padres o tutores legales. Si eres menor de 14 años, 
                por favor no envíes ningún dato personal sin el consentimiento de tus padres 
                o tutores.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                11. Cambios en esta Política
              </h2>
              <p>
                Nos reservamos el derecho de modificar esta Política de Privacidad en cualquier 
                momento. Los cambios entrarán en vigor desde su publicación en este sitio web. 
                Te recomendamos revisar periódicamente esta página para estar informado de 
                cualquier actualización.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                12. Autoridad de Control
              </h2>
              <p>
                Si consideras que el tratamiento de tus datos personales no cumple con la 
                normativa vigente, puedes presentar una reclamación ante la Autoridad Nacional 
                de Protección de Datos Personales (ANPDP), perteneciente al Ministerio de 
                Justicia y Derechos Humanos del Perú.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                13. Contacto
              </h2>
              <p>
                Para cualquier consulta relacionada con esta Política de Privacidad o el 
                tratamiento de tus datos personales, puedes contactarnos a través de:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Correo electrónico:</strong> informes@acropolisperu.org</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default Privacidad;
