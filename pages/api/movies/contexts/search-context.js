import React, { createContext, useState, useContext } from 'react';

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  const searchByTheatre = async (theaterName, date) => {
  try {
    const apiUrl = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/specific_movie_theater?theater_name=${theaterName}&d_date=${date}`;

    const response = await fetch(apiUrl);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const data = await response.json();
    console.log(data);
    setMovies(data);
  } catch (error) {
    console.error('Error fetching movies', error);
  } 
  };

  const searchByTimeslot = async (theaterName, startDate,endDate) => {
    try {
      const apiUrl = `https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/timeslot?theater_name=${theaterName}&time_start=${startDate}&time_end=${endDate}`;

      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log(data);
      setMovies(data); 
    } catch (error) {
      console.error('Error fetching movies', error);
    }
  };

  return (
    <SearchContext.Provider value={{ movies, searchByTheatre, searchByTimeslot }}>
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => useContext(SearchContext);