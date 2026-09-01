import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1c2b24",
          color: "#f3eee6",
          fontSize: 14,
          letterSpacing: -0.5,
          fontWeight: 500,
        }}
      >
        L&S
      </div>
    ),
    { ...size },
  );
}
