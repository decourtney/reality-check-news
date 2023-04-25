import React, { useState } from 'react';

const Ratings = ({ ratings }) => {
  const [likes, setLikes] = useState(ratings.likes);
  const [dislikes, setDislikes] = useState(ratings.dislikes);

  const handleLikeClick = () => {
    setLikes(likes + 1);
  };

  const handleDislikeClick = () => {
    setDislikes(dislikes + 1);
  };

  return (
    <div className="ratings">
      <button onClick={handleLikeClick}>{likes} Likes</button>
      <button onClick={handleDislikeClick}>{dislikes} Dislikes</button>
    </div>
  );
};

export default Ratings;
