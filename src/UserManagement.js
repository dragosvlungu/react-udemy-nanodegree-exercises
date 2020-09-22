import React, { Component } from 'react';
import AddUserForm from './AddUserForm'
import UsersList from './UsersList'

class UserManagement extends Component {
  
  state = {
    users: []
  }

  addUser = (data) => {
    this.setState((prevState) => ({
      users: [...prevState.users, data]
    }));
  }
  
  render() {
    return (
      <div>
        <AddUserForm onAddUser={this.addUser} />
        <UsersList users={this.state.users} />
	  </div>
    );
  }
}

export default UserManagement;
