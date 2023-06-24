
import React from "react";
import './../styles/App.css';
import AutoComplete from "./AutoComplete";

const App = () => {
  const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

  return (
    <div>
        <h1>Search item</h1>
        <AutoComplete fruits={fruits}/>
    </div>
  )
}

export default App

// import React, { useState } from 'react';

// const Autocomplete = ({ suggestions }) => {
//   const [inputValue, setInputValue] = useState('');
//   const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  
//   const handleInputChange = (event) => {
//     const userInput = event.target.value;
//     setInputValue(userInput);
    
//     // Filter the suggestions based on the user input
//     const filtered = suggestions.filter(
//       (fruit) =>
//         fruit.toLowerCase().indexOf(userInput.toLowerCase()) > -1
//     );
//     setFilteredSuggestions(filtered);
//   };
  
//   const handleSuggestionClick = (suggestion) => {
//     setInputValue(suggestion);
//     setFilteredSuggestions([]);
//   };
  
//   return (
//     <div>
//       <input
//         type="text"
//         value={inputValue}
//         onChange={handleInputChange}
//         placeholder="Search for a fruit..."
//       />
//       <ul>
//         {filteredSuggestions.map((suggestion, index) => (
//           <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
//             {suggestion}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig","orange","aam"];
  
//   return (
//     <div>
//       <h1>Autocomplete Example</h1>
//       <Autocomplete suggestions={fruits} />
//     </div>
//   );
// };

// export default App;

