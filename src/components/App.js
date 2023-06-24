import React, { useState } from 'react';

const fruits = ["apple", "banana", "cherry", "date", "elderberry", "fig"];

function AutoComplete() {
  const [inputValue, setInputValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleInputChange = (event) => {
    const value = event.target.value;
    setInputValue(value);
    if (value.length > 0) {
      const filteredSuggestions = fruits.filter(fruit => fruit.toLowerCase().startsWith(value.toLowerCase()));
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <ul>
        {suggestions.map(suggestion => <li key={suggestion}>{suggestion}</li>)}
      </ul>
    </div>
  );
}

export default AutoComplete;
