import React from 'react'
import VideoPreview from './VideoPreview'

export default function VideoBox(url) {
  return (
    <div className="m-5 px-5 d-flex justify-content-between">
        <VideoPreview url={url}></VideoPreview>
    </div>
  )
}
