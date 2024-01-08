import './SearchBar.css';
import { useState } from 'react';
import { useMyContext } from "../context/gptContext";
import Spinner from "./Spinner";

export default function SearchBar() {
  const [value, setValue] = useState('');

  const {blogGenerate, spinner} = useMyContext();

  const handleSearch = ()=> {
    blogGenerate(value);
  } 

  return (
    <>
    <div className='search-container'>
      <input type="text" className='search-bar rounded-3' onChange={(e)=> setValue(e.target.value)} placeholder='Search here' />
      <button className='search-btn' onClick={handleSearch}>search</button>
    </div>
    {spinner? <Spinner/>: ''}
    </>
  )
}
