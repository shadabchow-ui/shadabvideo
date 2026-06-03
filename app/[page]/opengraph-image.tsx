import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const revalidate = false;
export const dynamicParams = false;

export function generateStaticParams() {
  return [{ page: "_placeholder" }];
}

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
          fontSize: 48,
          fontWeight: 700
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
