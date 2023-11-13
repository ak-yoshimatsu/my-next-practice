import { NextResponse } from "next/server";

const mock = {
  id: 1,
  type: 'detail',
  name: 'John Smith',
};

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  console.log(request.url);
  console.log(params);

  return NextResponse.json({...mock, id: params.id });
}