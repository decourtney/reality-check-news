import React from 'react';

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <img src={user.profilePicture} alt={user.username} />
      <h2>{user.username}</h2>
      <p>{user.bio}</p>
      <button>Follow</button>
    </div>
  );
};

export default UserCard;
