import { useState } from "react";
import ReactHlsPlayer from "react-hls-player";
import useFetch from "./useFetch";

export default function Player(video) {
 // const url = video.video.url;
 // console.log(url);
 // const {data} = useFetch(url);
 // console.log(data);
 // const [hlsUrl, setHlsUrl] = useState(
 //   video.url
 // );
//
 // if (data) {
 //   if (!data.includes("window.atob(")) {
 //     const [before, after] = data.split('<meta name="robots" content="noindex,nofollow">');
 //     const dataBase = before + '<base href='+url+'></base>' + after;
 //     const [more, less] = dataBase.split(' method="post">');
 //     const another = more + " action='"+url + "'" + less;
 //     console.log(another);
 //     return (
 //       <iframe title={video.video.title} srcDoc={another}></iframe>
 //     );
 //   }
//
 //   console.log("RESPONSE");
 //   const realLink = data.split("window.atob(")[1].split("\"")[0];
 //   console.log(realLink);
 // }


  return (
    <div className="row justify-content-center">
      <ReactHlsPlayer
        src={"lol.pg"}
        autoPlay={false}
        controls={true}
        width="60%"
        height="auto"
      />
    </div>
  );
}
