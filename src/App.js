import React from 'react';
import Navbar from './Navbar';
import VideoBox from './VideoBox';
import useFetch from './useFetch'


function App() {

  const {data, loading, error} = useFetch("http://localhost:5000/get_api_links/?id=100088");
  console.log(data);

  if (error) return error;
  if (loading) return "loading...";

  return (
    <>
      <Navbar></Navbar>
      <VideoBox></VideoBox>
    </>
  );

}

export default App;
