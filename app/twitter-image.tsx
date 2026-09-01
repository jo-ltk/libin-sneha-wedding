import { createMonogramImageResponse, ogAlt, ogContentType, ogSize } from "@/lib/og-monogram";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default async function TwitterImage() {
  return createMonogramImageResponse();
}
