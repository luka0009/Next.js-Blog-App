import { Post } from "@prisma/client";
import { Snippet } from "next/font/google";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
  imageHeight: string;
  isSmallCard?: boolean;
  isLongForm?: boolean;
  post: Post,
};

const Card = ({
  className,
  imageHeight,
  isSmallCard = false,
  isLongForm = false,
  post
}: Props) => {
  const date = new Date(post?.createdAt);
  const options = { year: 'numeric', month: 'long', day: 'numeric' } as any;
  const formattedDate = date.toLocaleDateString('en-Us', options);


  return (
    <div className={className}>
      <Link className="basis-full hover:opacity-70" 
      href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
        <div className={`relativew-auto mb-3 ${imageHeight}`}>Image</div>
      </Link>
      <div className="basis-full">
        <Link href={`${process.env.NEXT_PUBLIC_URL}/post/${post?.id}`}>
          <h4
        className={`px-2 py-1 font-bold text-accent-green 
        ${isSmallCard ? "text-base" : "text-lg"}
        ${isSmallCard ? "line-clamp-2" : ""}
        `}
          >
            {post?.title}
          </h4>
        </Link>
        <div className={`${isSmallCard ? "my-2" : "flex my-3"} gap-3`}>
          <h5 className="font-semibold text-xs px-2">{post?.author}</h5>
          <h6 className="text-wh-300 text-xs">{formattedDate}</h6>
        </div>
        <p
          className={`text-white px-2 py-1 ${
            isLongForm ? "line-clamp-5" : "line-clamp-3"
          }`}
        >
          {post?.snippet}
        </p>
      </div>
    </div>
  );
};

export default Card;
