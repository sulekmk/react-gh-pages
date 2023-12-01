/** @format */

import React from "react";
import { ArrowCircleDownIcon } from "@heroicons/react/solid";

export default function Contact() {
  
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact" }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section
      id="contact"
      className="relative">
      <div className="container px-5 mx-auto text-center">
        <ArrowCircleDownIcon className="w-10 inline-block mb-4" />
        <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
          Hire Me{" "}
        </h1>
      </div>
      <div className="container px-8 py-12 mx-auto flex sm:flex-nowrap flex-wrap lg:px-40">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed/v1/place?q=1873+Masuda+Landing,+San+Jose,+CA,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </div>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 bg-pink-800 relative rounded-lg">
          <form
            netlify
            name="contact"
            onSubmit={handleSubmit}
            className="flex flex-col md:ml-auto w-full lg:py-4 px-4 mt-8 md:mt-0 text-left">
            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                ADDRESS
              </h2>
              <p className="mt-1 text-indigo-400 leading-relaxed">
                1873 Masuda Landing, <br />
                San Jose, CA - 95132 , USA.
              </p>
            </div>

            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                EMAIL
              </h2>
              <p>
                <a className="text-indigo-400 leading-relaxed">
                  sulekmulay@gmail.com
                </a>
              </p>
            </div>
            <div className="lg:w-1/2 px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="text-indigo-400 leading-relaxed">669-249-1687</p>
            </div>
            <div className="lg:w-1/2 px-6"></div>
            <div className="lg:w-1/8 px-4">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKEDIN ID
              </h2>
              <p>
                {" "}
                <a
                  className="text-indigo-400 leading-relaxed"
                  href="https://www.linkedin.com/in/sulek-mulay-kulkarni-63395b41">
                  https://www.linkedin.com/in/sulek-mulay-kulkarni-63395b41
                </a>
              </p>
            </div>
            <div className="lg:w-1/8 px-4 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                MY PORTFOLIO{" "}
              </h2>
              <p>
                {" "}
                <a
                  className="text-indigo-400 leading-relaxed"
                  href="https://sulekmk.github.io/react-gh-pages-myPortfolio/">
                  {" "}
                  https://sulekmk.github.io/react-gh-pages-myPortfolio/
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
