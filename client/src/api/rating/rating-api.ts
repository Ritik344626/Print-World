import api from '@api';

export async function getAllRatings(productId : string | undefined) {
  try {
    console.log('calling api')
    const { data } = await api.get(`/api/ratings/${productId}`);
    console.log(data, 'this is response')
    return data;
  } catch (error: any) {
    console.log(error)

    throw error.response.data;
  }
}

// ######################

export async function rateOrder(productId: string | undefined,  { rating, review }: { rating: number; review: string }) {
  try {
    const { data } = await api.post(`/api/ratings/${productId}`, {rating, review});

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
}