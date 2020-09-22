import React, { Component } from 'react';

class AddUserForm extends Component {
  state = {
    firstName: '',
    lastName: '',
    userName: '',
    noOfGames: 0
  }

  updateFirstName = (text) => {
    this.setState((prevState) => ({
      firstName: text
    }))
  }

  updateLastName = (text) => {
    this.setState((prevState) => ({
      lastName: text
    }))
  }

  updateUserName = (text) => {
    this.setState((prevState) => ({
      userName: text
    }))
  }

  updateNoOfGames = (text) => {
    this.setState((prevState) => ({
      noOfGames: +text
    }))
  }

  addUser = (event) => {
    event.preventDefault()
    this.props.onAddUser(this.state)
  }

  render() {
    return (
      <form>
      	<label for="firstname">First Name: </label>
      	<input
      		id="firstname"
      		type="text"
      		placeholder="First name"
       		value={this.state.firstName}
      		onChange={(event) => this.updateFirstName(event.target.value)}>
		</input>
		<br/>
		<label for="lastname">First Name: </label>
      	<input
      		id="firstname"
      		type="text"
      		placeholder="Last name"
       		value={this.state.lastName}
      		onChange={(event) => this.updateLastName(event.target.value)}>
		</input>
		<br/>
		<label for="username">Username: </label>
      	<input
      		id="username"
      		type="text"
      		placeholder="Username"
       		value={this.state.userName}
      		onChange={(event) => this.updateUserName(event.target.value)}>
		</input>
		<br/>
		<label for="noofgames">No of games: </label>
      	<input
      		id="noofgames"
      		type="text"
      		placeholder="No Of games"
       		value={this.state.noOfGames}
      		onChange={(event) => this.updateNoOfGames(event.target.value)}>
		</input>
		<br/>
		<button onClick={this.addUser}>Add User</button>
      </form>
    );
  }
}

export default AddUserForm;
