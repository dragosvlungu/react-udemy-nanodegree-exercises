import React from 'react'

const UsersList = (props) => {
  
  return (
    <div>
      <p>Users:</p>
      <ul>
        {props.users.map(user => (
         <li key={user.userName}>{user.userName} played {user.noOfGames} games</li>)
		)}
      </ul>
    </div>
  );

}

export default UsersList;