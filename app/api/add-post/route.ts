import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function POST(request:any) {
  try {
    const res = await request.json();
    const { title, content } = res;
    console.log({ res });

    const result = await prisma.post.create({
      data: {
        title,
        content,
        published:true,
        author: { create: { name: 'Basak' } },
      },
    });

    return NextResponse.json({ result });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
