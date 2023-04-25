import React, { useState } from 'react';

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    setComments([...comments, newComment]);
    setNewComment('');
  };

  return (
    <div className="comments">
      <h2>Comments ({comments.length})</h2>
      {comments.map((comment, index) => (
        <p key={index}>{comment}</p>
      ))}
      <form onSubmit={handleCommentSubmit}>
        <textarea
          placeholder="Add a comment"
          value={newComment}
          onChange={handleCommentChange}
        />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default Comments;
