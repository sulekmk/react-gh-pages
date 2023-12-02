/** @format */

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="container px-5 py-10 mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 mt-20" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
          Client Testimonials
        </h1>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {testimonials.map((testimonial) => (
            <div className="p-4 md:w-1/2 w-full">
              <div className="h-full bg-pink-800  p-8 rounded">
                <TerminalIcon className="block w-8 text-yellow-500 mb-4" />
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote1}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote2}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote3}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote4}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote5}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote6}
                </p>
                <p className="leading-relaxed mb-6 text-white text-left">
                  {testimonial.quote7}
                </p>

                <div className="inline-flex items-center">
                  <span className="flex-grow flex flex-col pl-4">
                    <span className="title-font font-medium text-white">
                      {testimonial.name}
                    </span>
                    <span className="text-blue-500 text-sm uppercase">
                      {testimonial.company}
                    </span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
