import { createContext, useState, useEffect } from 'react';

const NewReleasesContext = createContext();

const NewReleasesProvider = ({ children }) => {
  const [newReleases, setNewReleases] = useState([]);


  useEffect(() => {
    const today = new Date().toISOString().split('T')[0];
    fetch(`https://821f21ea-3d75-4b17-bac5-f8a0fc587ad2.mock.pstmn.io/new_movies/?r_date=${today}`)
      .then((response) => response.json())
      .then((data) => {
        setNewReleases(data);
      })
      .catch((error) => console.error('Error fetching new releases:', error));
  }, []);

  return (
    <NewReleasesContext.Provider value={newReleases}>
      {children}
    </NewReleasesContext.Provider>
  );
};

export { NewReleasesProvider, NewReleasesContext };
