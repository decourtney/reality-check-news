import React, { useState, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews from the backend API and update state
    const fetchReviews = async () => {
      try {
        const response = await fetch('/api/reviews');
        const data = await response.json();
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <div>
      <h1>Reviews</h1>
      {reviews.length > 0 ? (
        <div>
          {reviews.map((review) => (
            <Card key={review.id}>
              <CardBody>
                <CardTitle>{review.title}</CardTitle>
                <CardSubtitle>{review.author}</CardSubtitle>
                <p>{review.content}</p>
              </CardBody>
            </Card>
          ))}
        </div>
      ) : (
        <p>No reviews found.</p>
      )}
    </div>
  );
};

export default Reviews;
