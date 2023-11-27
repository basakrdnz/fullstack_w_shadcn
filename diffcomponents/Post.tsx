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
      <div className="flex border-4 border-gray-300 rounded-full cursor-pointer container  flex-wrap">
        <HoverCard>
          <HoverCardTrigger className="p-6 flex text-2xl ">{title}</HoverCardTrigger>
          <HoverCardContent>
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
