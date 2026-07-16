import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Agratara — Kedaulatan Pangan untuk Kesejahteraan Bangsa";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  const iconBuffer = await readFile(join(process.cwd(), "public/small-icon.png"));
  const iconSrc = `data:image/png;base64,${iconBuffer.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 56,
          background: "#0e1a17",
        }}
      >
        <img src={iconSrc} width={200} height={200} alt="" />
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 96,
              fontWeight: 800,
              color: "#ffffff",
              lineHeight: 1,
            }}
          >
            Agratara
          </div>
          <div
            style={{
              marginTop: 20,
              fontSize: 32,
              fontWeight: 500,
              color: "#9fd6cd",
            }}
          >
            Kedaulatan Pangan untuk Kesejahteraan Bangsa
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
