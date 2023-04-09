import { NextApiRequest, NextApiResponse } from 'next';
import Stripe from 'stripe';
import { getUserStripeCustomerId, updateUser } from '@/api/user/user';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
    apiVersion: '2022-11-15',
});

export default async (req: NextApiRequest, res: NextApiResponse) => {
    const { paymentMethodId } = req.body;
    const userId = 5
    try {
        // You need to fetch the user and check if they have a Stripe customer ID already
        // If not, create a new customer and save the customer ID in your database
        const customerId = "hector"/* ... */

        // If the user does not have a customer ID, create a new customer
        if (!customerId) {
            const user = { email: "text@tests.com" } /* ... */ // Fetch user data from your database
            const customer = await stripe.customers.create({
                email: user.email,
                payment_method: paymentMethodId,
            });

            // Save the new customer ID in your database
            const newCustomerId = customer.id;
            // ... Save newCustomerId in your database
        } else {
            await stripe.paymentMethods.attach(paymentMethodId, {
                customer: customerId,
            });
        }

        res.status(200).json({ success: true });
    } catch (error) {
        res.status(400).json({ error: { message: error.message } });
    }
};
