import React from "react";

const Footer = () => {
  return (
    <footer className="bg-wh-900 text-wh-50 py-5 px-10 mt-[300px]">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0">
          <p className="text-xs sm:text-lg">&copy; 2023</p>
        </div>
        <div className="flex items-center justify-center md:justify-end space-x-6">
          <a
            className="text-xs sm:text-lg underline hover:text-secondary transition-colors duration-300"
            href="https://github.com/luka0009"
            target="_blank"
            rel="noopener noreferrer"
          >
            Github
          </a>
          <a
            className="text-xs sm:text-lg underline hover:text-secondary transition-colors duration-300"
            href="https://portfolio-luka0009.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
