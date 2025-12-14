import { prisma } from '../config/db.config';

export const create = async (req, res, next) => {
    try {
        const stripePaymentIntent = await prisma.stripePaymentIntent.create({
            data: {
                userId: req.body.userId,
                amount: req.body.amount,
                currency: req.body.currency
            }
        });

        const stripeCustomer = await prisma.stripeCustomer.create({
            data: {
                id: stripePaymentIntent.id,
                email: req.body.email
            }
        });

        res.json({ paymentIntentId: stripePaymentIntent.id });
    } catch (error) {
        return next(error);
    }
};

export const getPaymentIntent = async (req, res, next) => {
    try {
        const stripePaymentIntent = await prisma.stripePaymentIntent.findUnique({
            where: {
                id: req.body.paymentIntentId
            }
        });

        if (!stripePaymentIntent) {
            return res.status(404).json({ message: 'Payment intent not found' });
        }

        res.json(stripePaymentIntent);
    } catch (error) {
        return next(error);
    }
};

export const update = async (req, res, next) => {
    try {
        await prisma.stripePaymentIntent.update({
            where: {
                id: req.body.paymentIntentId
            },
            data: {
                userId: req.body.userId,
                amount: req.body.amount,
                currency: req.body.currency
            }
        });

        res.json({ message: 'Payment intent updated successfully' });
    } catch (error) {
        return next(error);
    }
};

export const deletePaymentIntent = async (req, res, next) => {
    try {
        await prisma.stripePaymentIntent.delete({
            where: {
                id: req.body.paymentIntentId
            }
        });

        res.json({ message: 'Payment intent deleted successfully' });
    } catch (error) {
        return next(error);
    }
};