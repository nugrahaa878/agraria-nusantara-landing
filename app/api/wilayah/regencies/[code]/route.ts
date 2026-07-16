type Params = {
  params: Promise<{ code: string }>;
};

export async function GET(_request: Request, { params }: Params) {
  const { code } = await params;

  if (!/^\d{2}$/.test(code)) {
    return Response.json({ data: [] }, { status: 400 });
  }

  const res = await fetch(`https://wilayah.id/api/regencies/${code}.json`, {
    next: { revalidate: 86400 },
  });

  if (!res.ok) {
    return Response.json({ data: [] }, { status: 502 });
  }

  const json = await res.json();
  return Response.json(json);
}
