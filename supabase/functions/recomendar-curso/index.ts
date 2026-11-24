import { createOpenAI } from "npm:@ai-sdk/openai";
import { streamText, Output, jsonSchema } from "npm:ai";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};
const json = (b: unknown, s = 200) =>
  new Response(JSON.stringify(b), { status: s, headers: { ...cors, "Content-Type": "application/json" } });

const SYSTEM = `Eres el orientador de Nueva Acrópolis Perú. Recomiendas, en español cercano y breve, los aprendizajes y actividades del curso "Conócete a Ti Mismo" más afines a lo que la persona busca.
Aprendizajes del curso: 1) Conocerte a ti mismo y descubrir tus fortalezas interiores. 2) Dominar tus emociones y pensamientos. 3) Encontrar sentido y propósito de vida. 4) Tomar decisiones acertadas. 5) Mejorar tus relaciones con los demás. 6) Aplicar la sabiduría de grandes pensadores (Platón, Sócrates, estoicos, Oriente) en la vida diaria.
Actividades: prácticas y dinámicas en clase, diálogo filosófico en grupo, Acrópolis Channel gratis 3 meses, voluntariado, actividades culturales (arte, teatro, música). Curso de 24 horas, presencial.
No inventes fechas, precios ni datos. Si el texto no tiene relación con el curso, responde amablemente orientando hacia lo que el curso ofrece.`;

const schema = jsonSchema({
  type: "object", additionalProperties: false, required: ["intro", "aprendizajes", "actividades"],
  properties: {
    intro: { type: "string" },
    aprendizajes: { type: "array", items: { type: "object", additionalProperties: false, required: ["titulo", "porque"], properties: { titulo: { type: "string" }, porque: { type: "string" } } } },
    actividades: { type: "array", items: { type: "string" } },
  },
});

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: cors });
  try {
    const { texto } = await req.json();
    if (typeof texto !== "string" || texto.trim().length < 5 || texto.length > 600)
      return json({ error: "Cuéntanos en 5 a 600 caracteres qué buscas aprender." }, 400);
    const apiKey = Deno.env.get("LOVABLE_API_KEY");
    if (!apiKey) return json({ error: "Servicio no configurado." }, 500);
    const openai = createOpenAI({
      apiKey, baseURL: "https://ai.gateway.lovable.dev/v1",
      headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    });
    const result = streamText({
      model: openai.responses("openai/gpt-6.1-sol"),
      system: SYSTEM + '\nResponde SOLO con JSON válido: {"intro":string,"aprendizajes":[{"titulo":string,"porque":string}],"actividades":[string]}',
      prompt: texto.trim(),
      abortSignal: req.signal,
      providerOptions: { openai: { forceReasoning: true, reasoningEffort: "low", store: false } },
    });
    const text = await result.text;
    const m = text.replace(/```(?:json)?/g, "").match(/\{[\s\S]*\}/);
    if (!m) throw new Error("sin JSON: " + text.slice(0, 200));
    return json(JSON.parse(m[0]));
  } catch (e) {
    const status = (e as { statusCode?: number })?.statusCode;
    if (status === 429) return json({ error: "Muchas consultas ahora, intenta en un momento." }, 429);
    if (status === 402) return json({ error: "El servicio de IA no está disponible por ahora." }, 402);
    console.error("recomendar-curso error", status, String((e as Error)?.message).slice(0, 500));
    return json({ error: "No pudimos generar tu recomendación." }, 500);
  }
});
