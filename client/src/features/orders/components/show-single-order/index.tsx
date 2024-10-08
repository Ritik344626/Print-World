// Imports: APIs | Utils
import { useGetSingleOrder } from '@features/orders/hooks/use-orders';
import { IOrderItem } from '@utils/typings/order';

// Imports: Components
import { Separator } from '@components/ui/separator';
import { Loader } from '../common/loaders-ui';
import { OrderItemDetails } from './order-item-details';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useRateProduct } from '../rating/hooks/use-rating';

// API function to rate and review the product
const rateProductApi = async ({
  productId,
  rating,
  review,
}: {
  productId: string;
  rating: number;
  review: string;
}) => {
  const response = await fetch(`/api/products/${productId}/rate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ rating, review }),
  });

  if (!response.ok) {
    throw new Error('Failed to submit review');
  }

  return response.json();
};

export default function ShowSingleOrder() {
  const { order, isLoading, isError, error } = useGetSingleOrder();
  const [rating, setRating] = useState(0); // Manage rating state
  const [review, setReview] = useState(''); // Manage review state
  const { rateProduct, isLoading  : isSubmitting} = useRateProduct(); // Call hook at the top level


  const handleReviewSubmit = async (productId: string) => {
    if (!rating || !review) {
      toast.error('Please provide a rating and review');
      return;
    }

    try {
      await rateProduct({ rating, review, productId });
      toast.success('Review submitted successfully');
    } catch (error) {
      console.error('Failed to submit review:', error);
    }
  };

  if (isLoading) return <Loader />;

  if (isError) {
    return <h1>{error?.message}</h1>;
  }

  return (
    <div>
      <div className="pb-6 space-y-1 border-b mb-7">
        <h2 className="text-lg font-bold">
          Order ID: <span className="text-xs md:text-lg">{order?._id}</span>
        </h2>
      </div>

      <section className="mt-3 space-y-3">
        {order.items.map((item: IOrderItem) => (
          <div key={item._id}>
            <OrderItemDetails item={item} />

            <div className="mt-5">
              <h3 className="text-md font-bold">Rate & Review Product</h3>

              <div className="flex space-x-4 items-center mt-3">
                {/* Rating Input */}
                <select
                  className="border rounded px-3 py-1"
                  value={rating}
                  onChange={(e) => setRating(Number(e.target.value))}
                >
                  <option value={0}>Rate</option>
                  <option value={1}>1 Star</option>
                  <option value={2}>2 Stars</option>
                  <option value={3}>3 Stars</option>
                  <option value={4}>4 Stars</option>
                  <option value={5}>5 Stars</option>
                </select>

                <input
                  type="text"
                  className="border rounded px-3 py-1 flex-grow"
                  placeholder="Write a review"
                  value={review}
                  onChange={(e) => setReview(e.target.value)}
                />

                <button
                  className="bg-green-500 text-white px-4 py-1 rounded"
                  onClick={() => handleReviewSubmit(item.product._id)}
                >
                submit
                </button>
              </div>
            </div>

            <Separator orientation="horizontal" className="my-5" />
          </div>
        ))}
      </section>

      <div>
        <h1 className="float-right text-lg font-semibold text-green-500">
          Total Amount: {order.totalAmount}$
        </h1>
      </div>
    </div>
  );
}
