import React from 'react'
import "./style.css"

const SearchBar = () => {
  return (
    <form className='searchBar'>
  <label>
   
    <input type="text" name="name" />
  </label>
  <input type="submit" value="Submit" />
</form>
  )
}

export default SearchBar