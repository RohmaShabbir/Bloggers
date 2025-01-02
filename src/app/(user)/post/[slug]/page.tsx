import { groq } from "next-sanity";
import React from "react";
import { Post } from "../../../../../types";
import { client } from "@/sanity/lib/client";
import Container from "@/components/Container";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";
import Link from "next/link";
import { PortableText } from "@portabletext/react";
import { RichText } from "@/components/RichText";

interface Props {
  params: {
    slug: string;
  };
}

export const revalidate = 30;

export const generateStaticParams = async () => {
  const query = groq`*[_type == 'post']{
        slug
    }`;
  const slugs: Post[] = await client.fetch(query);
  const slugRoutes = slugs.map((slug) => slug?.slug?.current);
  return slugRoutes?.map((slug) => ({
    slug,
  }));
};

const SlugPage = async ({ params: { slug } }: Props) => {
  const query = groq`*[_type == 'post' && slug.current == $slug][0]{
    ...,
    body,
    author->
}`;
  const post: Post = await client.fetch(query, { slug });
  
  return (
    <Container className="mb-10">
      <div className="flex items-center mb-10">
        <div className="w-full md:w-2/3">
          <Image
            src={urlFor(post?.mainImage).url()}
            width={500}
            height={500}
            alt="main Image"
            className="object-cover w-full"
          />
        </div>
        <div className="w-1/3 hidden md:inline-flex flex-col items-center gap-5 px-4">
          <Image
            src={urlFor(post?.author?.image).url()}
            width={200}
            height={200}
            alt="author image"
            className="w-32 h-32 rounded-full object-cover"
          />
          <p className="text-3xl text-[#5442ae] font-semibold">
            {post?.author?.name}
          </p>
          <p className="text-center tracking-wide text-sm">
            {post?.author?.description}
          </p>
          <div className="flex items-center gap-3">
            <Link href={"/"} target="blank">
              <FiLinkedin className="w-8 h-8 text-gray-800 text-xl  flex items-center justify-center hover:text-red-500 duration-200" />
            </Link>
            <Link href={"/"} target="blank">
              <FiGithub className="w-8 h-8 text-gray-800 text-xl  flex items-center justify-center hover:text-red-500 duration-200" />
            </Link>
            <Link href={"/"} target="blank">
              <FiInstagram className="w-8 h-8 text-gray-800 text-xl  flex items-center justify-center hover:text-red-500 duration-200" />
            </Link>
            <Link href={"/"} target="blank">
              <FiTwitter className="w-8 h-8 text-gray-800 text-xl  flex items-center justify-center hover:text-red-500 duration-200" />
            </Link>
          </div>
        </div>
      </div>
      <div>
        <PortableText value={post?.body} components={RichText}/>
      </div>
    </Container>
  );
};

export default SlugPage;
