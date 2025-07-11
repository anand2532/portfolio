import { ImageResponse } from "next/og";
import { SITE } from "@/data/site";

export const runtime = "edge";

export const alt = `${SITE.brand} — ${SITE.title}`;
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#0b0f0c",
          padding: 72,
          fontFamily: "monospace",
        }}
      >
        <div
          style={{
            color: "#3dd68c",
            fontSize: 22,
            letterSpacing: 4,
            textTransform: "uppercase",
            marginBottom: 24,
          }}
        >
          {SITE.title}
        </div>
        <div
          style={{
            color: "#e8efe9",
            fontSize: 64,
            fontWeight: 600,
            lineHeight: 1.1,
            marginBottom: 20,
          }}
        >
          {SITE.brand}
        </div>
        <div
          style={{
            color: "#e8b84a",
            fontSize: 24,
            marginBottom: 16,
            fontFamily: "monospace",
          }}
        >
          {SITE.name}
        </div>
        <div
          style={{
            color: "#8a9a8e",
            fontSize: 28,
            maxWidth: 900,
            lineHeight: 1.35,
          }}
        >
          {SITE.headline}
        </div>
        <div
          style={{
            marginTop: 48,
            color: "#e8b84a",
            fontSize: 20,
          }}
        >
          {SITE.brand}
        </div>
      </div>
    ),
    { ...size }
  );
}
