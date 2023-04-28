import Image from "next/image";
import { Inter } from "next/font/google";
import Trending from "./(home)/Trending";
import Tech from "./(home)/Tech";
import Literature from "./(home)/Literature";
import Other from "./(shared)/Other";
import { prisma } from "./api/client";
import { Post } from "@prisma/client";

// export const revalidate = 100;

const getPosts = async () => {
  const posts: Post[] = await prisma.post.findMany();

  return posts;
};


export default async function Home() {
  const posts = await getPosts();

  const formatPosts = () => {
    const trendingPosts: Post[] = [];
    const techPosts: Post[] = [];
    const literaturePosts: Post[] = [];
    const otherPosts: Post[] = [];

    posts.forEach((post: Post, index: number) => {
      // if((index < 11) && (index > 3) && (index % 2 === 0)) {
      //   return trendingPosts.push(post);
      // };
      if (index === 3 || index === 8 || index === 9 || index === 12) {
        trendingPosts.push(post);
      }

      if(post?.category === "Tech") {
        techPosts.push(post);
      } else if(post?.category === "Literature") {
        literaturePosts.push(post);
      } else {
        otherPosts.push(post);
      }
    });
    return [trendingPosts, techPosts, literaturePosts, otherPosts];
  };

  const [trendingPosts, techPosts, literaturePosts, otherPosts] = formatPosts();

  return (
    <main className="px-10 leading-7 md:mx-3">
      <Trending trendingPosts={trendingPosts} />
      <Tech techPosts={techPosts}/>
      <Literature literaturePosts={literaturePosts}/>
      <Other otherPosts={otherPosts} />
      {/* <div className="md:flex gap-10 mb-5">
      <div className="basis-3/4">
        <div className="hidden md:block">
          <Subscribe />
        </div>
      </div>
      <div className="basis-1/4">
        <Sidebar />
      </div>
    </div> */}
    </main>
  );
}
