import React from 'react'
import VideoPreviewCSS from "./VideoPreview.module.css"

export default function Video(url) {
  return (
    <a href={url["url"]["url"]}>
      <div className="shadow flex" style={{position: "relative"}}>
        <div className={VideoPreviewCSS.overlayDiv}>
          <h2 className="text-white">LAST OF US</h2>
        </div>
        <img src='https://www.allkeyshop.com/blog/wp-content/uploads/THE-LAST-OF-US-TV-SHOW-VS-GAME_1.webp' alt="last_of_us_img"/>
      </div>
    </a>
  )
}
