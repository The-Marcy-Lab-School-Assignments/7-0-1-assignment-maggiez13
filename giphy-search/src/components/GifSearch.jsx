import React, { useState } from 'react';

function GifSearch({ onSearch }) {
  const [searchInput, setSearchInput] = useState(''); // state to store input field value

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchInput); // call the onSearch function with current input value
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="searchInput">Enter a Search Term </label>
      <input 
        type="text" 
        className="form-control" 
        id="searchInput" 
        value={searchInput} 
        onChange={(e) => setSearchInput(e.target.value)} // update state on input change
      />
      <button type="submit" className="btn btn-success">Search</button>
    </form>
  );
}

export default GifSearch;


// re-renders after every new letter in search

// function GifSearch({ onSearch }) {
//   const [searchInput, setSearchInput] = useState('');  

//   // Call onSearch with every change in input
//   const handleChange = (e) => {
//     setSearchInput(e.target.value);
//     onSearch(e.target.value);  // update parent component with new input value
//   };

//   return (
//     <div>
//       <label htmlFor="searchInput">Enter a Search Term </label>
//       <input 
//         type="text" 
//         className="form-control" 
//         id="searchInput" 
//         value={searchInput}  
//         onChange={handleChange}  // update state and notify parent on input change
//       />
//     </div>
//   );
// }




