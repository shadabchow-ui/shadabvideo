import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const revalidate = false;

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "#0a0a0a",
          color: "white",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
          fontWeight: 700,
          letterSpacing: "-0.04em"
        }}
      >
        Shadab Chow Video Archive
      </div>
    ),
    {
      width: 1200,
      height: 630
    }
  );
}
