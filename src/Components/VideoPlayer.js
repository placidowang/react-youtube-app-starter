import React from 'react'

export default class Video extends React.Component {

  render() {
    // console.log(this.props.video)
    const embedUrl = `https://www.youtube.com/embed/${this.props.video.id.videoId}`
    return(
      <div style={{margin: '20px', width: '900px'}}>
        <iframe title='VideoPlayer' src={embedUrl} style={{height: '500px', width: '100%'}}></iframe>
        <h1>{this.props.video.snippet.title}</h1>
        <h3>{this.props.video.snippet.description}</h3>
      </div>
    )
  }
}