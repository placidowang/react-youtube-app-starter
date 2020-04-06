import React, { Component } from "react";
import MainContainer from './MainContainer.js'
import SearchBar from './Components/SearchBar.js'
import SideContainer from './SideContainer.js'
import keys from './keys.js'
// import sampleResponse from './sampleResponse.json'

class App extends Component {
  state={
    // videoId: 'F6PhNnlb-14',
    // title: 'JEFF',
    // description: 'ATHLEAN-X DOT COM',
    video: {
      id: {videoId: 'F6PhNnlb-14'},
      snippet: {
        title: 'JEFF',
        description: 'ATHLEAN-X DOT COM'
      }
    },
    searchTerm: 'workout',
    videos: []
  }

  componentDidMount() {
    this.getVideos()
  }

  searchVideos = (e) => {
    e.preventDefault()
    // console.log(e.target[])
    const searchTerm = e.target[0].value
    this.setState({
      searchTerm: searchTerm
    },
    () => {
      // console.log(this.state.searchTerm)
      this.getVideos()
    }
    )
    e.target.reset()
  }

  getVideos = () => {
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${keys.API_KEY}&q=${this.state.searchTerm}&type=video`)
    .then(r => r.json())
    .then(videos => {
      this.setState({
        videos: videos.items
      })
    })
  }

  setMainVideo = (video) => {
    this.setState({
      video: video
    })
  }

  render() {
    // console.log(keys.API_KEY)
    return (
      <div>
        <SearchBar
          searchVideos={this.searchVideos} />
        <MainContainer
          video={this.state.video} />
        <SideContainer
          videos={this.state.videos}
          setMainVideo={this.setMainVideo} />
      </div>
    )
  }
}

export default App;
