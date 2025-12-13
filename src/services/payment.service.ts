import { StripeService } from '@stripe/stripe-js';
import StripeServiceOptions from './StripeServiceOptions';

class PaymentService {
  private stripeService: StripeService;

  constructor(options: StripeServiceOptions) {
    this.stripeService = new StripeService(options.stripeSecretKey);
  }

  async processPayment(user_id: number, paymentIntentId?: string): Promise<void> {
    if (!user_id) {
      throw new Error('User ID is required');
    }
    const paymentMethod = await this.stripeService.paymentMethods.create({
      type: 'card',
      card: {
        number: user_id.toString(),
        exp_month: Math.floor(Math.random() * 12),
        exp_year: Math.floor(Math.random() * 2000) + 2000,
        cvc: Math.floor(Math.random() * 10000),
      },
    });
    const paymentIntent = await this.stripeService.paymentIntents.retrieve(paymentIntentId);
    if (!paymentIntent || !paymentIntent.client_secret) {
      throw new Error('Payment Intent is invalid');
    }
    return this.stripeService.paymentIntents.confirm(
      paymentIntent.id,
      { payment_method: paymentMethod.id },
    );
  }

  async cancelPayment(user_id: number, paymentIntentId?: string): Promise<void> {
    if (!user_id) {
      throw new Error('User ID is required');
    }
    const paymentIntent = await this.stripeService.paymentIntents.retrieve(paymentIntentId);
    if (!paymentIntent || !paymentIntent.client_secret) {
      throw new Error('Payment Intent is invalid');
    }
    return this.stripeService.paymentIntents.cancel(
      paymentIntent.id,
      { reason: 'Cancel', payment_method: null },
    );
  }

  async createOrder(user_id: number, orderTotal: number): Promise<void> {
    if (!user_id) {
      throw new Error('User ID is required');
    }
    const clientSecret = await this.stripeService.orders.create({
      user: user_id.toString(),
      currency: 'usd',
      line_items: [
        {
          price_data: {
            currency: 'usd',
            unit_amount: Math.floor(orderTotal * 100),
            product_details: { name: `Order #${Math.floor(Math.random() * 10)}` },
          },
          quantity: 1,
        },
      ],
    });
    return clientSecret;
  }
}

export default PaymentService;