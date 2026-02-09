export type NewsHighlight = {
  id: string;
  title: string;
  summary: string;
  date: string;
  periodLabel: "Enero 2025" | "2025";
  interestLabel: "Muy vista" | "Tendencia positiva" | "Alta conversacion";
  sourceName: string;
  sourceUrl: string;
};

export const newsHighlights: NewsHighlight[] = [
  {
    id: "ces-2025-asistencia-global-record",
    title: "CES 2025 cierra con mas de 141.000 asistentes",
    summary:
      "La feria tech de enero reporto fuerte asistencia internacional y miles de startups presentando innovacion aplicada.",
    date: "10 de enero de 2025",
    periodLabel: "Enero 2025",
    interestLabel: "Muy vista",
    sourceName: "CES / CTA",
    sourceUrl:
      "https://www.ces.tech/press-releases/ces-2025-the-global-stage-for-innovation-connecting-the-world-creating-the-future",
  },
  {
    id: "new-glenn-orbita-ng1",
    title: "Blue Origin logra orbita con New Glenn en su vuelo inaugural",
    summary:
      "El cohete New Glenn alcanzo orbita en su primera mision, un hito tecnico relevante y esperanzador para la industria espacial.",
    date: "16 de enero de 2025",
    periodLabel: "Enero 2025",
    interestLabel: "Muy vista",
    sourceName: "Blue Origin",
    sourceUrl: "https://www.blueorigin.com/missions/ng-1",
  },
  {
    id: "ai-action-summit-paris",
    title: "Paris impulsa acciones internacionales de IA para el bien comun",
    summary:
      "La AI Action Week reunio gobiernos, empresas y comunidad cientifica para acelerar medidas de impacto social y economico.",
    date: "10 y 11 de febrero de 2025",
    periodLabel: "2025",
    interestLabel: "Alta conversacion",
    sourceName: "Presidencia de Francia (Elysee)",
    sourceUrl: "https://www.elysee.fr/en/sommet-pour-l-action-sur-l-ia",
  },
  {
    id: "renovables-superan-carbon-2025-iea",
    title: "La IEA proyecta renovables por encima del carbon a finales de 2025",
    summary:
      "El informe Renewables 2025 anticipa un avance fuerte de solar y eolica, con lectura optimista para la transicion energetica.",
    date: "Octubre de 2025 (informe)",
    periodLabel: "2025",
    interestLabel: "Tendencia positiva",
    sourceName: "International Energy Agency",
    sourceUrl: "https://www.iea.org/reports/renewables-2025/renewable-electricity",
  },
  {
    id: "ai-act-primeras-reglas-aplican",
    title: "Las primeras reglas del AI Act comienzan a aplicarse en la UE",
    summary:
      "Desde febrero de 2025 empiezan obligaciones iniciales sobre alfabetizacion en IA y practicas prohibidas, reforzando confianza para su adopcion.",
    date: "2 de febrero de 2025",
    periodLabel: "2025",
    interestLabel: "Alta conversacion",
    sourceName: "Comision Europea",
    sourceUrl:
      "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
  },
];

export const searchTrendHighlights2025: string[] = [
  "Google publico Year in Search 2025 con desglose por pais y categoria, incluyendo Espana.",
  "Las tendencias de busqueda ayudan a priorizar contenidos del blog con temas que la audiencia ya esta consultando.",
  "Puedes usar estos datos para planificar titulares mas atractivos cada semana.",
];
