import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const response = {
    method: 'GET',
    count: 100,
  };

  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const response = {
    method: 'POST',
    count: 100,
  };

  return NextResponse.json(response);
}
