import * as React from "react";
import * as request from "superagent";
import AlbumsList from "./AlbumsList";
import { connect } from "react-redux";
import { addAlbum } from "../actions/addAlbum";

class AlbumsListContainer extends React.Component {
  state = {};

  componentDidMount() {
    request("https://jsonplaceholder.typicode.com/albums").then(
      response => {
          console.log(response.body)
          response.body.map(album => this.props.addAlbum(album.id, album.title))
    })
    
    this.props.addAlbum(1, "Seriously Alice")
  }

  render() {
    if (!this.props.albums) return "Loading...";
    return <AlbumsList albums={this.props.albums} />;
  }
}

const mapStateToProps = (state)=>{
    return {
        albums: state.albums
    }
}

export default connect( mapStateToProps, { addAlbum } )(AlbumsListContainer);
