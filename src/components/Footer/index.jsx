import React from "react";

const Footer = () => {
  return (
    <footer className="bg-neutral-950 flex flex-col justify-center items-center p-4">
      <div className="container">
        <div className="max-w-5xl w-full my-10">
          <h4 className="text-white font-imprima">
            Filmagnet is an online movie streaming platform that offers pirated content that is not released. It has a huge collection of latest movies and films that still not available on the market and YouTube. You can watch and download
            all contents free of costs, but they are illegal, so you have to take some precautions. It is not available in all countries so you can use VPN and choose a location with access to Filmagnet. Here, we will discuss the Filmagnet.
          </h4>
        </div>
        <div className="flex flex-wrap justify-center space-x-4 text-white my-10 ">
          <a href="" className="">
            About us
          </a>
          <span className="px-1">|</span>
          <a href="" className="">
            Vlog
          </a>
          <span className="px-1">|</span>
          <a href="" className="">
            Contact
          </a>
          <span className="px-1">|</span>
          <a href="" className="">
            Report broken links
          </a>
          <span className="px-1">|</span>
          <a href="" className="">
            Disclaimer
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
