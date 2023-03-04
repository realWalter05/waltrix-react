import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import useFetch from "./useFetch";

export default function Player(video) {
  const url = video.video.url;
  console.log(url);
  const {data} = useFetch(url);
  console.log(data);
  if (data) {
    console.log("RESPONSE");
    const realLink = data.split("windows.atob(");
    console.log(realLink);
  }

  const [hlsUrl, setHlsUrl] = useState(
    video.url
  );

  return (
    <div className="row justify-content-center">
      <ReactHlsPlayer
        src={hlsUrl}
        autoPlay={false}
        controls={true}
        width="60%"
        height="auto"
      />
    </div>
  );
}
