import React from "react";
import codingImage from '../My_React_App.png';

export default function About() {
    return (
      <section id="about">
        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center lg:px-40 ">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
              Hi, I'm Sulek.
              <br className="hidden lg:inline-block" />I love to build amazing
              apps.
            </h1>
            <p className="mb-4 leading-relaxed">
              I have over 10 years of experience in Cross Platform Web
              Applications as lead front end developer.
            </p>
            <p>
              I was responsible for designing and implementing the user-facing aspects
              of a digital product, ensuring that the user experience is
              seamless and visually appealing using Bootstrap or Material UI or any other framework for cross platform applications.
              <br />
              <br />
            </p>

            <div className="flex justify-center">
              <a
                href="#contact"
                className="inline-flex text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
                Work With Me
              </a>
              <a
                href="#projects"
                className="ml-4 inline-flex text-white bg-pink-800 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 hover:text-white rounded text-lg">
                See My Past Work
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src={codingImage}
            />
          </div>
        </div>
      </section>
    );
}