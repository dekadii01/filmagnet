import React, { useEffect, useState } from "react";
import LogoFilmagnet from "/img/logo-filmagnet.svg";
import { IoSearch } from "react-icons/io5";
import { Link, useLocation, useParams } from "react-router-dom";
import useSearch from "../../hooks/useSearch";
import { initFlowbite } from "flowbite";

const Navbar = ({ setResults, setQuerySearch }) => {
  const { query, setQuery, handleSearch, results } = useSearch(setResults, setQuerySearch);
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const location = useLocation();

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await handleSearch(e);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "instant",
    });
    setIsSearchVisible(false);
  };

  useEffect(() => {
    initFlowbite();
  }, []);

  return (
    <nav className="bg-transparent">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-4">
        <Link to={"/"} className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={LogoFilmagnet} className="h-8" alt="Filmagnet Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white font-homenaje">Filmagnet</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex items-center">
            {location.pathname === "/" && (
              <>
                <form className="max-w-md mx-auto hidden md:block" onSubmit={onSubmit}>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                      </svg>
                    </div>
                    <input
                      type="search"
                      id="default-search"
                      autoFocus
                      value={query}
                      autoComplete="off"
                      onChange={(e) => setQuery(e.target.value)}
                      className="block w-full p-4 ps-10 text-sm text-white placeholder-white bg-transparent rounded-lg border-transparent  dark:focus:ring-transparent dark:focus:border-transparent"
                      placeholder="Search Movie..."
                      required
                    />
                  </div>
                </form>
                <IoSearch className="text-white w-12 h-5 cursor-pointer block md:hidden" onClick={toggleSearchVisibility} />
              </>
            )}
            <button type="button" className="text-white bg-transparent border-2 border-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-6 py-2 text-center ">
              SIGN IN
            </button>
          </div>
          <button
            data-collapse-toggle="navbar-search"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-search"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
            </svg>
          </button>
        </div>
        <div className={`items-center justify-between ${isSearchVisible ? "block" : "hidden"} w-full md:flex md:w-auto md:order-1`} id="navbar-search">
          <div className="relative mt-3 md:hidden">
            {location.pathname === "/" && (
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg className="w-4 h-4 text-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
            )}

            {location.pathname === "/" && (
              <form onSubmit={onSubmit}>
                <input
                  type="text"
                  id="search-navbar"
                  autoFocus
                  value={query}
                  autoComplete="off"
                  onChange={(e) => setQuery(e.target.value)}
                  required
                  className="block w-full p-2 ps-10 text-sm text-white placeholder-white bg-transparent rounded-lg border-gray-700 focus:ring-gray-700 border dark:focus:ring-transparent dark:focus:border-transparent"
                  placeholder="Search..."
                />
              </form>
            )}
          </div>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:mt-0 md:border-0 border-gray-700 font-poppins">
            <li className="md:px-7">
              <Link to={"/"} className="block py-2 px-3 md:p-0 text-white bg-primary rounded md:bg-transparent md:text-primary md:dark:text-primary font-normal" aria-current="page">
                HOME
              </Link>
            </li>
            <li className="md:px-7">
              <Link to={"/"} className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary font-normal">
                ABOUT
              </Link>
            </li>
            <li className="md:px-7">
              <Link to={"/"} className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary font-normal">
                MOVIE
              </Link>
            </li>
            <li className="md:px-7">
              <Link to={"/"} className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary font-normal">
                WEB SERIES
              </Link>
            </li>
            <li className="md:px-7">
              <Link to={"/"} className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-primary font-normal">
                PREMIUM
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
