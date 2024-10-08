// Imports: Libraries
import { Link } from 'react-router-dom';

// Imports: APIs | Utils

// Imports: Components
import { ConfirmOrderError, Loader } from '../common/loaders-ui';
import { Button } from '@components/ui/button';

export default function ConfirmOrder() {

  return (
    <div>
      <div className="w-full px-4 py-3 mx-auto mt-3 space-y-4 text-green-700 bg-green-100 border-l-4 border-green-500 rounded-md shadow-md md:w-1/2">
        <h2 className="text-lg font-semibold">Order Successfully Purchased!</h2>
        <p className="mt-2">Your order details:</p>

        <Button asChild>
          <Link to="/account/orders">Show All Orders</Link>
        </Button>
      </div>
    </div>
  );
}
