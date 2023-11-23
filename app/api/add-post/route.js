import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request) {
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
    return NextResponse.error(error.message, { status: 500 });
  }
}
