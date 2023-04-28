import React from 'react';

const reviewData = [
  {
    id: 1,
    author: 'John Doe',
    avatar: 'https://i.pravatar.cc/150?img=1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque. Duis vulputate commodo lectus, ac blandit elit tincidunt id.'
  },
  {
    id: 2,
    author: 'Jane Smith',
    avatar: 'https://i.pravatar.cc/150?img=2',
    content: 'Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi.'
  },
  {
    id: 3,
    author: 'Bob Johnson',
    avatar: 'https://i.pravatar.cc/150?img=3',
    content: 'Aliquam erat volutpat. Nunc eleifend leo vitae magna. In id erat non orci commodo lobortis. Proin neque massa, cursus ut, gravida ut, lobortis eget, lacus. Sed diam. Praesent fermentum tempor tellus.'
  },
];

const Reviews = () => {
  return (
    <div className="justify-center py-20 px-20 md:px-8 drop-shadow-md">
      <h2 className="text-2xl font-bold mb-4 text-center">Customer Reviews</h2>
      <div className="reviews grid grid-cols-1 md:grid-cols-3 gap-4">
        {reviewData.map(review => (
          <div key={review.id} className="bg-yellow-500 rounded-lg shadow-md p-4">
            <div className="flex items-center mb-4">
              <img src={review.avatar} alt={review.author} className="w-12 h-12 rounded-full mr-4" />
              <div>
                <p className="font-bold text-lg">{review.author}</p>
                <p className="text-gray-600 text-sm">Lorem ipsum dolor sit amet</p>
              </div>
            </div>
            <p>{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
