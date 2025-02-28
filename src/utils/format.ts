import { Cell } from "tinybase";

export function formatSeconds(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export function formatMilliseconds(milliseconds: number): string {
  const minutes = Math.floor(milliseconds / 60000);
  const seconds = Math.floor((milliseconds % 60000) / 1000);
  const remainingMilliseconds = milliseconds % 1000;
  return `${minutes}:${seconds.toString().padStart(2, "0")}.${remainingMilliseconds.toString().slice(0, 1)}`;
}

export function slugify(str: Cell) {
  return str
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/--+/g, "-");
}

export function unSlugify(slug: string) {
  return slug
    .toString()
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}
