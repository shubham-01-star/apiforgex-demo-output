import { Injectable } from '@nestjs/common';
import * as stripe from 'stripe';

@Injectable()
export class PaymentService {
  private stripeKey = process.env.STRIPE_SECRET_KEY;

  constructor() {}

  async createPaymentIntent(userId: number) {
    const stripeCustomer = await this.getStripeCustomer(userId);
    if (!stripeCustomer) return null;
    const paymentIntent = await stripe.paymentIntents.create({
      customer: stripeCustomer.id,
      amount: 1000,
    });
    return paymentIntent.id;
  }

  async getStripeCustomer(userId: number): Promise<stripe.Customer> {
    try {
      const user = await this.getUserRepository().findOne({ where: { id: userId } });
      if (!user) throw new Error('User not found');
      const stripeCustomer = await stripe.customers.retrieve(user.stripeCustomerId);
      return stripeCustomer;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  async getPaymentIntentId(userId: number): Promise<string> {
    try {
      const paymentIntent = await this.createPaymentIntent(userId);
      if (!paymentIntent) return '';
      return paymentIntent.id;
    } catch (error) {
      console.error(error);
      return '';
    }
  }

  async createOrderPaymentIntent(stripeToken: string, userId: number): Promise<string> {
    try {
      const paymentIntentId = await this.getPaymentIntentId(userId);
      if (!paymentIntentId) throw new Error('No existing payment intent found');
      const paymentIntent = await stripe.paymentIntents.modify(
        paymentIntentId,
        {
          customer: userId,
          amount: 1000,
        },
      );
      return paymentIntent.id;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createOrder(stripeToken: string, userId: number): Promise<stripe.Order> {
    try {
      const paymentIntentId = await this.createOrderPaymentIntent(stripeToken, userId);
      if (!paymentIntentId) throw new Error('Failed to create order');
      const order = await stripe.orders.create({
        customer: userId,
        payment_intent: paymentIntentId,
      });
      return order;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async refundOrder(orderId: string, userId: number): Promise<stripe.Refund> {
    try {
      const stripeRefund = await stripe.refunds.create({
        order: orderId,
        amount: 1000,
      });
      return stripeRefund;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  private getUserRepository(): any {
    // implement custom database repository
    return null;
  }
}