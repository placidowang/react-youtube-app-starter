import React, { Component } from "react";
import MainContainer from './MainContainer.js'
import SearchBar from './Components/SearchBar.js'
import SideContainer from './SideContainer.js'
import keys from './keys.js'
// import sampleResponse from './sampleResponse.json'
import _ from 'lodash'

class App extends Component {
  constructor() {
    super()
    this.state={
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
  }


  componentDidMount() {
    this.getVideos()
  }

  searchVideos = (searchTerm) => {
    // e.preventDefault()
    // const searchTerm = e.target[0].value
    this.setState({
      searchTerm: searchTerm
    },
    () => {
      // console.log(this.state.searchTerm)
      this.getVideos()
    }
    )
    // e.target.reset()
  }

  search = _.debounce(term => { // page is refreshing when you call this method; can't handle passing in events? try to move searchVideos(e) content after e.preventDefault() and before e.target.reset() here? then call this method inside searchVideos(e)?
    // debugger
    // console.log('bouncing')
    this.searchVideos(term);
  }, 2000)
  
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
          searchVideos={this.search} />
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
