import newsArchiveJson from "./newsArchive.json";
import {
  DAY_MS,
  addDays,
  formatSpanishShortDate,
  getMadridCalendarDate,
  parseIsoDateAtNoon,
  toIsoDate,
} from "../lib/madrid-time";

export type TimeRange = "day" | "week" | "month" | "year" | "all";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  date: string;
  displayDate: string;
  category: string;
  interest: string;
  sourceName: string;
  sourceUrl: string;
};

type ParsedNewsItem = NewsItem & { timestamp: number };

const RANGE_TO_MS: Record<Exclude<TimeRange, "all">, number> = {
  day: DAY_MS,
  week: 7 * DAY_MS,
  month: 31 * DAY_MS,
  year: 365 * DAY_MS,
};

function getLatestSourceDate(items: NewsItem[]): string {
  return [...items]
    .sort((a, b) => parseIsoDateAtNoon(b.date).getTime() - parseIsoDateAtNoon(a.date).getTime())[0]
    ?.date ?? toIsoDate(getMadridCalendarDate());
}

function buildRollingNews(now: Date = new Date()): ParsedNewsItem[] {
  const baseItems = newsArchiveJson as NewsItem[];
  const latestSourceDate = getLatestSourceDate(baseItems);
  const dayShift = Math.round(
    (getMadridCalendarDate(now).getTime() - parseIsoDateAtNoon(latestSourceDate).getTime()) / DAY_MS,
  );

  return baseItems
    .map((item) => {
      const shiftedDate = addDays(parseIsoDateAtNoon(item.date), dayShift);

      return {
        ...item,
        date: toIsoDate(shiftedDate),
        displayDate: formatSpanishShortDate(shiftedDate),
        timestamp: shiftedDate.getTime(),
      };
    })
    .sort((a, b) => b.timestamp - a.timestamp);
}

export const newsArchive: ParsedNewsItem[] = buildRollingNews();

export function getNewsByRange(range: TimeRange, now: Date = new Date()): NewsItem[] {
  const items = buildRollingNews(now);

  if (range === "all") {
    return items;
  }

  const cutoff = getMadridCalendarDate(now).getTime() - RANGE_TO_MS[range];

  return items.filter((item) => item.timestamp >= cutoff);
}
