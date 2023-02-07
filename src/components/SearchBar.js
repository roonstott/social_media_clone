import React from 'react';

const SearchBar = () => {
  return(
    <form className="space-x-8">
      <input placeholder="Search" type="text" className="outline outline-blue-400 py-2 px-6 rounded-full"></input>
      <button className="bg-white hover:bg-gray-100 text-gray-500 font-semibold py-2 px-4 outline outline-blue-400 rounded-full shadow mx-16" type="submit">Tweet</button>
    </form>
  )
}


export default SearchBar;