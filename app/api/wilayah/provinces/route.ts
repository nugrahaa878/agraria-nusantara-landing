export async function GET() {
  const res = await fetch("https://wilayah.id/api/provinces.json", {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return Response.json({ data: [] }, { status: 502 });
  }

  const json = await res.json();
  return Response.json(json);
}
