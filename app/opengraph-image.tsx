import { ImageResponse } from "next/og";
import { NeatoOgImage, ogAlt, ogSize } from "@/src/components/og/NeatoOgImage";

export const alt = ogAlt;
export const size = ogSize;
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(<NeatoOgImage />, size);
}
