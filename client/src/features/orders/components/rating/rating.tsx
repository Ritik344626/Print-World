import React, { useEffect, useState } from 'react';
import { useGetRatings } from '@features/orders/components/rating/hooks/use-rating';

// Utility to convert rating to star icons (or emojis for simplicity)
const renderStars = (rating: number) => {
  return '★'.repeat(rating) + '☆'.repeat(5 - rating);
};

// Interface for review data
export interface IReview {
  user: {
    name: string;
    profilePicture: string;
  };
  rating: number;
  review: string;
  createdAt: string; // Date of rating submission
}

export const ProductReviews: React.FC = () => {
const { ratings, isLoading, isError } =
    useGetRatings();
  const [reviews, setReviews] = useState<IReview[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (ratings) {
      setReviews(ratings);
    }
    if(isError){
        setError('Failed to fetch Ratings')
    }
  }, [ratings]); 

  if (isLoading) return <p>Loading reviews...</p>;

  if (error) return <p>{error}</p>;

  if (!reviews || !reviews.length) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-6">
      {reviews.map((review, index) => (
        <div key={index} className="p-4 border rounded-lg shadow-sm space-y-2">
          <div className="flex items-center space-x-4">
            <img
              src={review.user.profilePicture || 'https://as2.ftcdn.net/v2/jpg/04/10/43/77/1000_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'}
              alt={`${review.user.name}'s profile`}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h4 className="text-lg font-semibold">{review.user.name}</h4>
              <p className="text-sm text-gray-500">
                {new Date(review.createdAt).toLocaleString()} {/* Display formatted date */}
              </p>
            </div>
          </div>

          {/* Rating in Stars */}
          <div className="flex items-center space-x-1 text-yellow-500">
            <span className="text-lg">{renderStars(review.rating)}</span>
            <span className="text-sm text-gray-600">({review.rating} / 5)</span>
          </div>

          {/* Review Text */}
          <p className="text-md text-gray-700">{review.review}</p>
        </div>
      ))}
    </div>
  );
};
