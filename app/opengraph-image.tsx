import { ImageResponse } from "next/og";

export const alt = "Libin Benny and Sneha Johnson Wedding";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1c2b24",
          color: "#f3eee6",
          position: "relative",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#1c2b24",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 10, textTransform: "uppercase", color: "#dccbb8" }}>
            The Groom
          </div>
          <div style={{ fontSize: 92, marginTop: 16 }}>Libin</div>
          <div style={{ fontSize: 32, fontStyle: "italic", color: "#dccbb8", marginTop: 8 }}>
            Benny
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "#3a242c",
          }}
        >
          <div style={{ fontSize: 22, letterSpacing: 10, textTransform: "uppercase", color: "#dccbb8" }}>
            The Bride
          </div>
          <div style={{ fontSize: 92, marginTop: 16 }}>Sneha</div>
          <div style={{ fontSize: 32, fontStyle: "italic", color: "#dccbb8", marginTop: 8 }}>
            Johnson
          </div>
        </div>
        <div
          style={{
            position: "absolute",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            width: 72,
            height: 72,
            borderRadius: 999,
            background: "#f3eee6",
            color: "#c27462",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 40,
            fontStyle: "italic",
          }}
        >
          &
        </div>
      </div>
    ),
    { ...size },
  );
}
