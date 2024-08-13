// import { useState } from "react";
// import axiosInstance from "../api/axiosInstance";

// const useSearch = () => {
//   const [query, setQuery] = useState("");
//   const [results, setResults] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [isSearching, setIsSearching] = useState(false);

//   const handleSearch = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError(null);
//     setIsSearching(true);

//     try {
//       const response = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?query=${query}`);
//       setResults(response.data.results);
//     } catch (error) {
//       setError(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { results, loading, error, setQuery, handleSearch, query, isSearching };
// };

// export default useSearch;

// hooks/useSearch.js
import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosInstance";

const useSearch = (setResults, setQuerySearch) => {
  const [query, setQuery] = useState("");
  const [results, setLocalResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setIsSearching(true);

    try {
      const response = await axiosInstance.get(`https://api.themoviedb.org/3/search/movie?query=${query}`);
      setLocalResults(response.data.results);
      setResults(response.data.results);
      setQuerySearch(query);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { results, loading, error, setQuery, handleSearch, query, isSearching };
};

export default useSearch;
