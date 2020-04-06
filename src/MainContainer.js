import React from "react";
import VideoPlayer from './Components/VideoPlayer.js'

export default class MainContainer extends React.Component {
  render() {
    return(
      <VideoPlayer
        video={this.props.video}
        // videoId={this.props.video.id.videoId}
        // title={this.props.video.title}
        // description={this.props.video.description}
         />
    )
  }
}
