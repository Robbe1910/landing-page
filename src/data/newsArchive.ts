import newsArchiveJson from "./newsArchive.json";

export type TimeRange = "day" | "week" | "month" | "year" | "all";

export type NewsItem = {
  id: string;
  title: string;
  summary: string;
  date: string; // ISO (YYYY-MM-DD)
  displayDate: string; // human readable
  category: string;
  interest: string;
  sourceName: string;
  sourceUrl: string;
};

type ParsedNewsItem = NewsItem & { timestamp: number };

const DAY_MS = 24 * 60 * 60 * 1000;

const parsedNews: ParsedNewsItem[] = (newsArchiveJson as NewsItem[])
  .map((item) => ({
    ...item,
    timestamp: new Date(item.date).getTime(),
  }))
  .sort((a, b) => b.timestamp - a.timestamp);

export const newsArchive: ParsedNewsItem[] = parsedNews;

const RANGE_TO_MS: Record<Exclude<TimeRange, "all">, number> = {
  day: DAY_MS,
  week: 7 * DAY_MS,
  month: 31 * DAY_MS,
  year: 365 * DAY_MS,
};

export function getNewsByRange(range: TimeRange, now: Date = new Date()): NewsItem[] {
  if (range === "all") return newsArchive;

  const maxAge = RANGE_TO_MS[range];
  const cutoff = now.getTime() - maxAge;

  return newsArchive.filter((item) => item.timestamp >= cutoff);
}
