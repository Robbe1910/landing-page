export const MADRID_TIME_ZONE = "Europe/Madrid";
export const DAY_MS = 24 * 60 * 60 * 1000;

type DateParts = {
  year: number;
  month: number;
  day: number;
};

function getDatePartsInTimeZone(date: Date, timeZone: string): DateParts {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);

  return {
    year: Number(parts.find((part) => part.type === "year")?.value),
    month: Number(parts.find((part) => part.type === "month")?.value),
    day: Number(parts.find((part) => part.type === "day")?.value),
  };
}

export function parseIsoDateAtNoon(isoDate: string): Date {
  const [year, month, day] = isoDate.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

export function getMadridCalendarDate(now: Date = new Date()): Date {
  const { year, month, day } = getDatePartsInTimeZone(now, MADRID_TIME_ZONE);
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

export function addDays(date: Date, days: number): Date {
  return new Date(date.getTime() + days * DAY_MS);
}

export function toIsoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}

export function formatSpanishLongDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    timeZone: MADRID_TIME_ZONE,
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(date);
}

export function formatSpanishShortDate(date: Date): string {
  return new Intl.DateTimeFormat("es-ES", {
    timeZone: MADRID_TIME_ZONE,
    day: "numeric",
    month: "short",
    year: "numeric",
  })
    .format(date)
    .replaceAll(".", "");
}

export function getDayShift(baseIsoDate: string, now: Date = new Date()): number {
  const baseDate = parseIsoDateAtNoon(baseIsoDate);
  const madridToday = getMadridCalendarDate(now);

  return Math.round((madridToday.getTime() - baseDate.getTime()) / DAY_MS);
}
