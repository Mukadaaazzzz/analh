/* eslint-disable prettier/prettier */
import React from 'react';

import config from '../config/index.json';

const About = () => {
  const { about } = config;
  const { socialMedia, sections } = about;

  return (
    <div
      id="about"
      className="container mx-auto px-4 py-12 lg:px-20 xl:px-24"
    >
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          About Us
        </h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
          Discover our story and connect with us.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-8">
        {sections.map((section, index) => (
          <div
            key={`${section.name}-${index}`}
            className="text-center max-w-xs"
          >
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
              {section.name}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              {section.content}
            </p>
          </div>
        ))}
      </div>

      <div className="flex justify-center gap-6 mt-10">
        <a
          aria-label="Facebook"
          href={socialMedia.facebook}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-8 h-8 text-gray-800 hover:text-primary dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.403c0-.845.235-1.42 1.457-1.42H18V0h-2.793C12.987 0 12 1.126 12 3.093V8z" />
          </svg>
        </a>
        
        <a
          aria-label="LinkedIn"
          href={socialMedia.linkedin}
          target="_blank"
          rel="noreferrer"
        >
          <svg
            className="w-8 h-8 text-gray-800 hover:text-primary dark:text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
          </svg>
        </a>
      </div>

      <footer className="text-center mt-12">
        <p className="text-xs text-gray-600 dark:text-gray-400">
          &copy; {new Date().getFullYear()} AnalHorology
          
        </p>
      </footer>
    </div>
  );
};

export default About;
