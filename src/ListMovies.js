import React, { Component } from 'react'
import ListUsers from './ListUsers'

class ListMovies extends Component {
  render() {
    return Object.keys(this.props.movies)
      .map(key => this.props.movies[key])
      .map(movie => {
      	return (
         <div key={movie.id}>
         	<h2>{movie.name}</h2>
      		<ListUsers users={this.props.profiles.filter(profile => +profile.favoriteMovieID === movie.id).map(profile => this.props.users[profile.userID])} />
         </div>
        )
	  }
	  )
  }
}

export default ListMovies;