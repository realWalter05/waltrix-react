import React from 'react';
import Player from './Player'
import useFetch from './useFetch'


function App() {

  const {data, loading, error} = useFetch("https://seapi.link/?type=tmdb&id=634649&max_results=1");
	const first = data?.results.filter(result => result.server == "upstream");

  if (error || !first) return error;
  if (loading) return "loading...";

	const video = first[0];

  return (
    <>
      <h3>LOL</h3>
      <Player video={video}></Player>
    </>
  );

}

export default App;
