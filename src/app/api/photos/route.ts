import { NextResponse } from 'next/server';

const mock = {
  id: 1,
  name: 'John Smith',
};

export async function GET() {
  return NextResponse.json(mock);
}
