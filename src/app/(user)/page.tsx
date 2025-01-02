import BlogContent from "@/components/BlogContent";
import Hero from "@/components/Hero";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export const revalidate = 30;

const query = groq`*[_type == 'post']{
  ...,
  author->,
  categories[]->
} | order(_createdAt asc)`;

export default async function Home() {
  const posts = await client.fetch(query)
  // console.log(posts);
  return (
    <main>
      <Hero/>
      <BlogContent posts={posts}/>
    </main>
  );
}
