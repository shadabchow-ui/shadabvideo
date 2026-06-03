export const dynamic = "force-static";

export async function GET() {
  return Response.json({
    ok: false,
    message: "Revalidation is disabled for the static raw video archive."
  });
}
