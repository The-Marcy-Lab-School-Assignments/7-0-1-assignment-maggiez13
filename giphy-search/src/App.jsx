import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import GifContainer from './components/GifContainer';
import GifSearch from './components/GifSearch';
import { handleFetch } from './utils';  
import API_KEY from "./config";


function App() {
  const [gifs, setGifs] = useState([]); // state to store fetched GIFs
  const [searchTerm, setSearchTerm] = useState(''); // state to store current search term

  useEffect(() => {
    const fetchGifs = async () => { // async function to fetch GIFs
      const endpoint = searchTerm 
        ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&rating=g`
        : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

      const [data, error] = await handleFetch(endpoint); // fetch data 

      if (data) setGifs(data.data); // update gifs state if data is successfully fetched
      if (error) console.error("Error fetching GIFs:", error); // log errors if any 
    };

    fetchGifs(); 
  }, [searchTerm]); // dependency array: runs when searchTerm changes

  const handleSearchSubmit = (term) => { 
    setSearchTerm(term); // update searchTerm state with new term 
  };

  return (
    <div>
      <NavBar color='black' title="Giphy Search" />
      <div className="ui container">
        <GifSearch onSearch={handleSearchSubmit} />
        <br />
        <GifContainer gifs={gifs} />
      </div>
    </div>
  );
}

export default App;

/*
// when user types a search item and submits form, `searchTerm` in `App` is updated
// `useEffect` in `App` detects change in `searchTerm` and triggers new fetch request
// GIFs from API are set in state and passed to `GifContainer` to be displayed on page
*/


// re-renders after every new letter in search

// function App() {
//   const [gifs, setGifs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState('');  

//   useEffect(() => {
//     const fetchGifs = async () => {
//       const endpoint = searchTerm 
//         ? `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${searchTerm}&limit=3&rating=g`
//         : `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=3&rating=g`;

//       const [data, error] = await handleFetch(endpoint);

//       if (data) setGifs(data.data);  
//       if (error) console.error("Error fetching GIFs:", error);
//     };

//     fetchGifs();  
//   }, [searchTerm]);

//   return (
//     <div>
//       <NavBar color='black' title="Giphy Search" />
//       <div className="ui container">
//         <GifSearch onSearch={setSearchTerm} />  {/* Pass setSearchTerm as onSearch */}
//         <br />
//         <GifContainer gifs={gifs} /> 
//       </div>
//     </div>
//   );
// }

