import { Injectable } from '@nestjs/common';
import { stripeService } from './stripe.service';

@Injectable()
export class BookingService {
  async bookBook(user_id: number, book_id: number) {
    const stripePaymentIntent = await stripeService.createPaymentIntent({
      user_id,
      book_id,
    });

    return stripePaymentIntent;
  }
}

// stripe.service.ts
import { Stripe } from '@stripe/stripe-js';

const stripe = new Stripe(
  'YOUR_STRIPE_PUBLISHABLE_KEY',
  {
    apiVersion: '2022-08-28',
  },
);

export const stripeService = async () => {
  return stripe;
};