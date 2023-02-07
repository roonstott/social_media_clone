import React from 'react';
import NavBar from './NavBar';
import SearchBar from './SearchBar';

const Header = () => {
  return(
    <div className="flex justify-between py-6">
      <NavBar></NavBar>
      <SearchBar></SearchBar>
    </div>
  )
}

export default Header;