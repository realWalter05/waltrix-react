import React from 'react';
import Player from './Player'
import useFetch from './useFetch'


function App() {

  const {data, loading, error} = useFetch("?tmdb_id=634649");
  console.log(data);
  if (data) {
    const deciphered = window.atob(data.pirate_link);
    console.log(deciphered);
  }

  if (error) return error;
  if (loading) return "loading...";

  return (
    <>
      <h3>LOL</h3>
    </>
  );

}

export default App;
