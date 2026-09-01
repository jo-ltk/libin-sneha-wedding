import { ImageResponse } from "next/og";

export const ogAlt = "Libin & Sneha — Wedding";
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

async function loadGoogleFont(weight: number, style: "normal" | "italic") {
  const css = await fetch(
    `https://fonts.googleapis.com/css2?family=Bodoni+Moda:ital,wght@${style === "italic" ? "1" : "0"},${weight}&display=swap`,
    {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_6_8; de-at) AppleWebKit/533.21.1 (KHTML, like Gecko) Version/5.0.5 Safari/533.21.1",
      },
    },
  ).then((res) => res.text());

  const match = css.match(/src: url\((.+?)\) format\('(?:opentype|truetype|woff2)'\)/);
  if (!match) {
    throw new Error(`Failed to load Bodoni Moda ${weight}`);
  }

  return fetch(match[1]).then((res) => res.arrayBuffer());
}

export async function createMonogramImageResponse() {
  const [regular, italic] = await Promise.all([
    loadGoogleFont(400, "normal"),
    loadGoogleFont(400, "italic"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#2a3d32",
          color: "#faf9f7",
          position: "relative",
          fontFamily: "Bodoni Moda",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(106,173,201,0.22) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(58,82,68,0.65) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(44,58,66,0.55) 0%, transparent 50%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid rgba(184, 212, 188, 0.22)",
            borderRadius: 4,
            display: "flex",
          }}
        />

        <p
          style={{
            position: "relative",
            margin: 0,
            fontSize: 22,
            letterSpacing: 12,
            textTransform: "uppercase",
            color: "#b8d4bc",
            fontFamily: "Outfit",
          }}
        >
          Together with their families
        </p>

        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 36,
            gap: 28,
          }}
        >
          <span
            style={{
              fontSize: 220,
              lineHeight: 1,
              letterSpacing: -8,
              color: "#faf9f7",
            }}
          >
            L
          </span>

          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 999,
              background: "#faf9f7",
              color: "#6aadc9",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontStyle: "italic",
              marginTop: 24,
              boxShadow: "0 18px 48px rgba(26,35,40,0.35)",
            }}
          >
            &
          </div>

          <span
            style={{
              fontSize: 220,
              lineHeight: 1,
              letterSpacing: -8,
              color: "#b8d4bc",
            }}
          >
            S
          </span>
        </div>

        <p
          style={{
            position: "relative",
            margin: 0,
            marginTop: 40,
            fontSize: 64,
            letterSpacing: -2,
            fontStyle: "italic",
            color: "#faf9f7",
          }}
        >
          Libin & Sneha
        </p>

        <p
          style={{
            position: "relative",
            margin: 0,
            marginTop: 18,
            fontSize: 24,
            letterSpacing: 10,
            textTransform: "uppercase",
            color: "#6aadc9",
            fontFamily: "Outfit",
          }}
        >
          Wedding
        </p>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        {
          name: "Bodoni Moda",
          data: regular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Bodoni Moda",
          data: italic,
          weight: 400,
          style: "italic",
        },
      ],
    },
  );
}
