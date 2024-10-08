// Imports: Libraries
import { useMutation, useQuery } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import { useEffect } from 'react';

// Imports: APIs | Utils
import {
  createCheckoutSession as createCheckoutSessionApi,
} from '@api/checkout/checkout-api';
import { useNavigate } from 'react-router-dom';

// ------------------------
// ---- Handle create new checkout session
// ------------------------
export function useCreateCheckoutSession() {
  const navigate = useNavigate();
  const { mutateAsync: createCheckoutSession, isPending: isLoading } =
    useMutation({
      mutationFn: createCheckoutSessionApi,

      onSuccess: (data) => {
        toast.success('Redirecting...');
        navigate('/success')
      },

      onError: (error: any) => {
        toast.error(String(error.message));
      },
    });

  return { createCheckoutSession, isLoading };
}
