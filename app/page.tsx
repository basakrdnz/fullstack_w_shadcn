import { Prisma, PrismaClient } from "@prisma/client";
import Post from "./components/Post";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { cache } from "react";



const prisma = new PrismaClient();
export const revalidate = 1;
async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: { author: { select: { name: true } } },
  });
  return posts;
}

export default async function Home() {
  const posts = await getPosts();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="font-bold text-3xl">Feed</h1>
      <div className="flex my-auto gap-20 text-xl cursor-pointer">
        {posts.map((post) => (
          <Post
            id={post.id}
            title={post.title}
            content={post.content}
            authorName={"Basak"}
            key={post.id}
          ></Post>
        ))}
      </div>{" "}
      <Link href={"/add-post"}>
        <Button>Add Post</Button>
      </Link>
    </main>
  );
}
