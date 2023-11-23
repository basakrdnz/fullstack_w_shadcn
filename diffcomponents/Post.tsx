import React from "react";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

interface PostProps {
  id: string;
  title: string;
  content: string | null;
  authorName: string | null;
}

const Post = ({ id, title, content, authorName }: PostProps) => {
  return (
    <section>
      <div className="border-2 flex p-5 rounded-full border-gray-400">
        <HoverCard>
          <HoverCardTrigger>{title}</HoverCardTrigger>
          <HoverCardContent className="w-auto max-w-xl p-10 m-10 gap-6">
            <h3 className="font-bold">Author: {authorName}</h3>
            <h4 className="font-bold">{title}</h4>
            <p>{content}</p>
          </HoverCardContent>
        </HoverCard>
      </div>
    </section>
  );
};

export default Post;
