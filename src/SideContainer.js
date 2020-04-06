import React from "react";
import VideoPreview from './Components/VideoPreview.js'

export default class SideContainer extends React.Component {
  

  render() {
    return(
      <div style={{position: "fixed", top: "0px", right: "0px", width: "200px", backgroundColor: 'white'}}>
        <h3>Search Results</h3>
        {this.props.videos ?
          this.props.videos.map(video => <VideoPreview video={video} setMainVideo={this.props.setMainVideo} />) :
          <p>Loading Search Results...</p>
        }
        {/* <VideoPreview thumbnail={this.props.videos[0]} /> */}
        {/* <VideoPreview />
        <VideoPreview />
        <VideoPreview /> */}
      </div>
    )
  }
}