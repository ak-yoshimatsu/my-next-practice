export async function getIndexApi() {
  const res = await fetch(`http://localhost:3000/api/photos`);
  const result = await res.json();
  return result;
}

export async function getDetailApi(id: number) {
  const res = await fetch(`http://localhost:3000/api/photos/${id}`);
  const result = await res.json();
  return result;
}
