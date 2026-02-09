export type PoetrySlot = "desayuno" | "comida" | "cena";

export type PoetryEntry = {
  id: string;
  title: string;
  excerpt: string;
  lines: string[];
  slot: PoetrySlot;
  targetMealTimeSpain: string;
  publishTimeSpain: string;
  timezone: "Europe/Madrid";
  cadence: "Diario";
};

export const poetryEntries: PoetryEntry[] = [
  {
    id: "poesia-desayuno-luz-quieta",
    title: "Luz quieta",
    excerpt:
      "Poema corto para arrancar el dia con calma y enfoque antes del desayuno.",
    lines: [
      "La manana abre su puerta de lino,",
      "el barrio respira sin ruido ni prisa,",
      "y en la taza tibia cabe un destino,",
      "pequeno, firme, posible: sonreir.",
    ],
    slot: "desayuno",
    targetMealTimeSpain: "08:30",
    publishTimeSpain: "07:30",
    timezone: "Europe/Madrid",
    cadence: "Diario",
  },
  {
    id: "poesia-comida-centro-del-dia",
    title: "Centro del dia",
    excerpt:
      "Pieza de mediodia para resetear energia antes de la comida.",
    lines: [
      "A mitad del sol la calle se inclina,",
      "el pulso del mundo cambia de marcha,",
      "si escuchas un segundo, todo se alinea,",
      "y vuelve la fuerza con nombre de casa.",
    ],
    slot: "comida",
    targetMealTimeSpain: "14:30",
    publishTimeSpain: "13:30",
    timezone: "Europe/Madrid",
    cadence: "Diario",
  },
  {
    id: "poesia-cena-ciudad-en-calma",
    title: "Ciudad en calma",
    excerpt:
      "Texto de cierre del dia para entrar en la cena con tono esperanzador.",
    lines: [
      "Cuando baja la tarde y cede el ruido,",
      "la noche cose el margen de las horas,",
      "queda una luz pequena en lo vivido,",
      "promesa de manana entre farolas.",
    ],
    slot: "cena",
    targetMealTimeSpain: "21:30",
    publishTimeSpain: "20:30",
    timezone: "Europe/Madrid",
    cadence: "Diario",
  },
];
