import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import { FiGithub, FiLinkedin, FiInstagram, FiTwitter } from "react-icons/fi";

const Footer = () => {
  return (
    <Container className="p-10 bg-black text-gray-100 flex items-center justify-between">
      <Logo title="Bloggers" className="text-white" />
      <div className="text-gray-300 hidden md:inline-flex items-center gap-7">
        <Link href={"/"} target="blank">
          <FiLinkedin className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"/"} target="blank">
          <FiGithub className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"/"} target="blank">
          <FiInstagram className="text-2xl hover:text-red-500 duration-200" />
        </Link>
        <Link href={"/"} target="blank">
          <FiTwitter className="text-2xl hover:text-red-500 duration-200" />
        </Link>
      </div>
      <p className="text-sm text-gray-300 ">
        ©All rights reserved{" "}
        <Link
          href={"/"}
          target="blank"
          className="hover:text-white font-semibold duration-200"
        >
          @reactjsBD
        </Link>
      </p>
    </Container>
  );
};

export default Footer;
