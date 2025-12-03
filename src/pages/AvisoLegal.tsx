import { PageLayout } from "@/components/layouts/PageLayout";
import { SEO } from "@/components/SEO";

const AvisoLegal = () => {
  return (
    <PageLayout>
      <SEO
        title="Aviso Legal"
        description="Información legal sobre el sitio web de Nueva Acrópolis Perú, incluyendo términos de uso, propiedad intelectual y condiciones de acceso."
        keywords="aviso legal, términos de uso, propiedad intelectual, nueva acrópolis perú, condiciones legales"
        url="https://acropolisperu.org/aviso-legal"
        breadcrumbs={[{ name: "Aviso Legal", url: "https://acropolisperu.org/aviso-legal" }]}
      />
      
      <div className="bg-background py-16 md:py-24">
        <div className="container px-4 sm:px-6 max-w-4xl">
          <h1 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8">
            Aviso Legal
          </h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <p className="text-sm text-muted-foreground/70">
              Última actualización: {new Date().toLocaleDateString('es-PE', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                1. Información del Titular
              </h2>
              <p>
                Este sitio web es operado por la Asociación Cultural Nueva Acrópolis del Perú, 
                organización filosófica, cultural y de voluntariado sin fines de lucro, 
                inscrita en los Registros Públicos del Perú.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Denominación:</strong> Asociación Cultural Nueva Acrópolis del Perú</li>
                <li><strong>Correo electrónico:</strong> informes@acropolisperu.org</li>
                <li><strong>Sitio web:</strong> acropolisperu.org</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                2. Objeto y Ámbito de Aplicación
              </h2>
              <p>
                El presente Aviso Legal regula el uso del sitio web acropolisperu.org 
                (en adelante, "el Sitio Web"), que Nueva Acrópolis Perú pone a disposición 
                de los usuarios de Internet con el fin de proporcionar información sobre 
                sus actividades filosóficas, culturales y de voluntariado.
              </p>
              <p className="mt-4">
                El acceso y uso del Sitio Web implica la aceptación plena y sin reservas 
                de todas las disposiciones incluidas en este Aviso Legal. Si no está de 
                acuerdo con estas condiciones, le rogamos que no utilice el Sitio Web.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                3. Propiedad Intelectual e Industrial
              </h2>
              <p>
                Todos los contenidos del Sitio Web, incluyendo, sin limitación, textos, 
                fotografías, gráficos, imágenes, iconos, tecnología, software, links y demás 
                contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, 
                son propiedad intelectual de Nueva Acrópolis Perú o de terceros que han autorizado 
                su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de 
                explotación sobre los mismos más allá de lo estrictamente necesario para el 
                correcto uso del Sitio Web.
              </p>
              <p className="mt-4">
                Las marcas, nombres comerciales y signos distintivos son propiedad de 
                Nueva Acrópolis Perú o de terceros, sin que pueda entenderse que el acceso 
                al Sitio Web atribuye ningún derecho sobre las citadas marcas, nombres 
                comerciales y/o signos distintivos.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                4. Condiciones de Uso
              </h2>
              <p>El usuario se compromete a utilizar el Sitio Web de conformidad con:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>La ley, la moral y el orden público</li>
                <li>Las presentes condiciones de uso</li>
                <li>No utilizar el Sitio Web con fines ilícitos o contrarios al contenido del presente Aviso Legal</li>
                <li>No realizar ninguna acción que cause daño o alteraciones en los contenidos del Sitio Web</li>
                <li>No introducir virus informáticos, archivos defectuosos o cualquier otro software o programa informático que pueda causar daños o alteraciones en los contenidos o sistemas</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                5. Responsabilidad
              </h2>
              <p>
                Nueva Acrópolis Perú no garantiza la disponibilidad y continuidad del 
                funcionamiento del Sitio Web. Cuando ello sea razonablemente posible, 
                se advertirá previamente de las interrupciones en el funcionamiento del Sitio Web.
              </p>
              <p className="mt-4">
                Nueva Acrópolis Perú no se hace responsable de los daños y perjuicios de 
                cualquier naturaleza que pudieran derivarse de la falta de disponibilidad 
                o continuidad del funcionamiento del Sitio Web, aunque realizará sus mejores 
                esfuerzos para mantener la disponibilidad del mismo.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                6. Enlaces a Terceros
              </h2>
              <p>
                El Sitio Web puede contener enlaces a sitios web de terceros. Nueva Acrópolis 
                Perú no asume ninguna responsabilidad por el contenido, veracidad o funcionamiento 
                de los sitios web de terceros a los que se pueda acceder a través de enlaces 
                desde este Sitio Web. Estos enlaces se proporcionan únicamente para informar 
                al usuario sobre la existencia de otras fuentes de información.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                7. Modificaciones
              </h2>
              <p>
                Nueva Acrópolis Perú se reserva el derecho de efectuar sin previo aviso las 
                modificaciones que considere oportunas en el Sitio Web, pudiendo cambiar, 
                suprimir o añadir tanto los contenidos y servicios que se presten a través 
                del mismo como la forma en la que éstos aparezcan presentados o localizados.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                8. Legislación Aplicable y Jurisdicción
              </h2>
              <p>
                El presente Aviso Legal se rige por la legislación peruana. Para la resolución 
                de cualquier controversia relacionada con el uso del Sitio Web, las partes se 
                someten a la jurisdicción de los tribunales de Lima, Perú, renunciando 
                expresamente a cualquier otro fuero que pudiera corresponderles.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mt-8 mb-4">
                9. Contacto
              </h2>
              <p>
                Para cualquier consulta relacionada con este Aviso Legal, puede contactarnos a través de:
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

export default AvisoLegal;
