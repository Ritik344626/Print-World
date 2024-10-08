import api from '@api';

export async function createCheckoutSession() {
  try {
    const { data } = await api.post('/api/checkout/');

    return data;
  } catch (error: any) {
    throw error.response.data;
  }
}