import React from "react";

const UserCard = ({ userData }) => {
  return (
    <div className="p-4 shadow-md">
      <img
        className="rounded-full h-24 w-24 object-cover"
        src={`https://ui-avatars.com/api/?background=random&name=${userData.username}`}
        alt={`${userData.username} profile`}
      />
      <h3 className="text-xl mb-2">{userData.username}</h3>
      <p className="text-gray-400">{userData.email}</p>
    </div>
  );
};

export default UserCard;
