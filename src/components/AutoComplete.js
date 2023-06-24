// import React, { useState } from "react";

// const AutoComplete = ({ fruits }) => {
//   const [inputText, setinputText] = useState("");
//   const [filteredArray, setFilteredArray] = useState([]);

//   const handleInput = (e) => {
//     const input = e.target.value;
//     setinputText(input);

//     if (input.length > 0) {
//       const filtered = fruits.filter((item) =>
//         item.toLowerCase().startsWith(input.toLowerCase())
//       );
//       setFilteredArray(filtered);
//     }else
//         setFilteredArray(fruits);
//     }
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         onChange={handleInput}
//         value={inputText}
//         placeholder="Search ..."
//       />
//       <ul>
//         {filteredArray.map((val, i) => (
//           <li key={i}>{val}</li>
//         ))}
//       </ul>
//     </div>
//   );


// export default AutoComplete;
