import React from "react";
export default class SearchBar extends React.Component {
  
  render() {
    return(
      <div style={{width: '100%', margin: '10px'}}>
        <form onChange={(e) => {this.props.searchVideos(e.target.value)}}>
          <input type='text' placeholder='Search Video'></input>
          {/* <input type='submit'></input> */}
        </form>
      </div>
    )
  }
}