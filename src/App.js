import React from 'react';
import Navbar from './Navbar';
import VideoBox from './VideoBox';
import useFetch from './useFetch'


function App() {

  const {data, loading, error} = useFetch("http://localhost:5000/get_api_links/?id=100088");

  if (error) return "error";
  if (loading) return "loading...";
  if (!data) return "data not available";

  return (
    <>
      <Navbar></Navbar>
      <VideoBox url={data["response"]}></VideoBox>
    </>
  );

}

export default App;
