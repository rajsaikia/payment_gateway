import { loadStripe } from '@stripe/stripe-js';
const StripePromise = loadStripe(process.env.REACT_APP_SECRAT_KEY);

export default StripePromise;
