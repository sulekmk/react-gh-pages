import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import MyPhoto from "../My_photo.jpeg";


export default function Navbar() {
  return (
    <header className="bg-yellow-500 md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <img
          className="object-cover object-center rounded w-12 h-12"
          alt="Sulek Kulkarni"
          src={MyPhoto}
        />
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a
            href="#about"
            className="ml-3 text-xl">
            Sulek Kulkarni
          </a>
          <p className="font-small text-center ml-3"> Front End Developer </p>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a
            href="#projects"
            className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 hover:text-white text-white">
            Past Work
          </a>
          <span className="text-black">|</span>
          <a
            href="#skills"
            className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 hover:text-white text-white">
            Skills
          </a>
          <span className="text-black">|</span>
          <a
            href="#testimonials"
            className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 hover:text-white text-white">
            Client Testimonials
          </a>
          <span className="text-black">|</span>
          <a
            href="#certifications"
            className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 hover:text-white text-white">
            Certifications
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center  border-0 py-1 px-3 focus:outline-none hover:bg-pink-700 rounded text-base mt-4 md:mt-0 hover:text-white text-white">
          Contact
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}