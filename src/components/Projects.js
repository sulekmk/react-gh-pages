import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

import { projects } from "../data";



export default function Projects() {
  return (
    <section
      id="projects"
      className="text-black-400 bg-white-900 body-font m-4">
      <div className="container px-5  mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-10">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 mt-24" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base"></p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project, i) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative pic-ctn">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full h-full border-4 border-yellow-800 bg-pink-800 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed text-white font-small">
                    {project.description}
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
