"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useState } from "react";
import {useRouter} from "next/navigation";


const MyForm: React.FC = ({  }) => {

  const router = useRouter()
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    //Bu kod, belirtilen adrese başlık ve içerik verilerini içeren bir istek gönderiyor,
    //ancak hata durumlarını uygun şekilde ele almıyor çünkü fetch işlemi asenkron yapıda çalışıyor.
    try {
      fetch("/api/add-post", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, content }),
      });
    } catch (error) {
      console.error(error);
    }

    setTitle("");
    setContent("");
    // router.refresh()
   
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col border-4 border-black m-20 p-20 items-center gap-5 font-bold"
      >
        <h1 className="flex p-16 text-2xl ">NEW POST AREA</h1>
        <div className="flex flex-col">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-4 w-72"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="content">
            Content:
          </label>
          <textarea
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="border-4 w-72"
          />
        </div>
        <div>
          <Button type="submit"> Submit Post</Button>
        </div>
      </form>
    
    <Link href={"/"}>go to main page</Link>
    </div>
  );
};

export default MyForm;
