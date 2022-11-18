/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';

function UseStateUpdate() {
  const [searchInput, setSearchInput] = useState('');
  const onChange = (e) => {
    setSearchInput(e.target.value);
    // console.logging instead of fetching for the demo purposes
  };
  useEffect(() => {
    console.log(searchInput);
  }, [searchInput]);
  return (
    <>
      <h1 className="text-red-700 mb-7">useState doesn&apos;t update immediately</h1>
      <form className="flex justify-center">
        <label htmlFor="search" className="text-4xl mr-2">Search:</label>
        <input
          className="pl-2 w-60 bg-stone-200 border rounder-lg active:border-black"
          type="text"
          id="search"
          name="search"
          value={searchInput}
          onChange={onChange}
        />
      </form>
    </>
  );
}

export default UseStateUpdate;
