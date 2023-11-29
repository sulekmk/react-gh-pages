/** @format */

import React from "react";
import { AcademicCapIcon, TerminalIcon } from "@heroicons/react/solid";
import { certifications } from "../data";

export default function Certifications() {
    return (
      <section id="certifications">
        <div className="container px-5 py-10 mx-auto text-center">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
            My Certifications{" "}
          </h1>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {certifications.map((certification) => (
              <a
                href={certification.link}
                key={certification.image}
                className="sm:w-1/2 w-100 p-4">
                <div className="flex relative">
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={certification.image}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                      {certification.subtitle}
                    </h2>
                    <h1 className="title-font text-lg font-medium text-white mb-3">
                      {certification.title}
                    </h1>
                    <p className="leading-relaxed text-white font-small">
                      {certification.description}
                    </p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
}
