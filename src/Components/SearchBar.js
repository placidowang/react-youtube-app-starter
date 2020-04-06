import React from "react";
export default class SearchBar extends React.Component {
  

  render() {
    return(
      <div style={{margin: '10px'}}>
        <form onSubmit={(e) => {this.props.searchVideos(e)}}>
          <input type='text' placeholder='Search Video'></input>
          <input type='submit'></input>
        </form>
      </div>
    )
  }
}