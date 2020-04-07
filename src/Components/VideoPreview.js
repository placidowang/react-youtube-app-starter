import React from "react";

export default class VideoPreview extends React.Component {
  

  render() {
    console.log(this.props.video)
    const video = this.props.video.snippet
    return(
      <div onClick={()=>{this.props.setMainVideo(this.props.video)}} style={{margin: '10px'}}>
        {/* video preview */}
        <img src={video.thumbnails.default.url} alt={video.title}></img>
        <p>{video.title}</p>
        <br></br>
      </div>
    )
  }
}