// Imports: Libraries
import { useMutation, useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';

// Imports: APIs | Utils
import { IProduct } from '@utils/typings/product';
import { getAllRatings, rateOrder } from '@api/rating/rating-api';
import toast from 'react-hot-toast';

// ------------------------
// ---- Handle fetch all products
// ------------------------
export function useGetRatings() {
  const { productId } = useParams();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => getAllRatings(productId),
    retry: false,
  });

  const ratings: any[] = data?.data?.ratings;

  return {
    ratings,
    isLoading,
    isError
  };
}

// ------------------------
// ---- Handle Rate product
// ------------------------
export function useRateProduct() {
  const { mutateAsync: rateProduct, isPending:isLoading } = useMutation({
    mutationFn: ({productId, rating, review }: {productId: string, rating: number; review: string }) => 
      rateOrder(productId, { rating, review }), // Call rateOrder with both productId and data

    onSuccess: () => {
      toast.success('Rating submitted successfully!');
    },

    onError: (error: any) => {
      toast.error(String(error.message || 'An error occurred'));
    },
  });

  return { rateProduct, isLoading };
}
