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
          background: "#faf8f4",
          color: "#3d4a50",
          position: "relative",
          fontFamily: "Bodoni Moda",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(ellipse at 50% 35%, rgba(133,189,214,0.28) 0%, transparent 55%), radial-gradient(ellipse at 20% 80%, rgba(168,200,172,0.35) 0%, transparent 50%), radial-gradient(ellipse at 80% 80%, rgba(133,189,214,0.2) 0%, transparent 50%)",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 48,
            border: "1px solid rgba(197, 220, 200, 0.55)",
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
            color: "#6f7d82",
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
              color: "#3d4a50",
            }}
          >
            L
          </span>

          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 999,
              background: "#85bdd6",
              color: "#faf8f4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 48,
              fontStyle: "italic",
              marginTop: 24,
              boxShadow: "0 18px 48px rgba(61,74,80,0.12)",
            }}
          >
            &
          </div>

          <span
            style={{
              fontSize: 220,
              lineHeight: 1,
              letterSpacing: -8,
              color: "#a8c8ac",
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
            color: "#3d4a50",
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
            color: "#6aa8c9",
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
