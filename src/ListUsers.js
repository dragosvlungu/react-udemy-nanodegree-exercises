import React, { Component } from 'react'

class ListUsers extends Component {
  render() {
    var content;
    console.log(this.props.users)
    if (this.props.users.length > 0) {
    	content = (
          <div>
            <p>Liked By:</p>
            <ul>
              {this.props.users.map(user => 
               <li key={user.id}>{user.name}</li>)
              }
            </ul>
    	  </div>
          )
    } else {
        content = <p>None of the current users liked this movie</p>
    }

	return content;
  }
}

export default ListUsers;