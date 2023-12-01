/** @format */
import React from "react";
import { AcademicCapIcon, BadgeCheckIcon } from "@heroicons/react/solid";
import { useTheme } from "@table-library/react-table-library/theme";
import { nodes } from "../data";

export default function Certifications() {
 
  return (
    <>
      {
        <div>
          <section id="certifications">
            <div className="container px-5 py-8 mx-auto">
              <div className="text-center mb-10">
                <AcademicCapIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
                  Certifications{" "}
                </h1>
              </div>
              <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                {nodes.map((node) => (
                  <div
                    key={node}
                    className="p-2 sm:w-1/2 w-full">
                    <div className="bg-pink-800	 rounded flex p-6 h-full items-center text-white">
                      <a
                        className="leading-relaxed mb-6"
                        href={node.link}>
                        <BadgeCheckIcon className="text-yellow-400 w-6 h-6 flex-shrink-0 mr-4"/>
                      </a>
                      <span className="title-font font-medium text-white">
                        <a
                        className="leading-relaxed mb-6"
                        href={node.link}>
                                    {node.title}
                                    </a>
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      }
    </>
  );
}
