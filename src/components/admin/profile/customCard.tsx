import { useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import axios from 'axios';
import { useUserAuthObserver } from "@/hooks/auth";

const CustomCard = ({ onSuccess }) => {
    const [error, setError] = useState(null);
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useUserAuthObserver();

    console.log(user)
    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(null);

        if (!stripe || !elements) return;

        const cardElement = elements.getElement(CardElement);
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            setError(error.message);
        } else {
            const { data } = await axios.post('/api/stripe/add-card', {
                paymentMethodId: paymentMethod.id,
            });

            if (data.error) {
                setError(data.error.message);
            } else {
                onSuccess();
            }
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="w-[500px]">
                <CardElement />

            </div>
            <button type="submit" disabled={!stripe}>
                Add Card
            </button>
            {error && <div>{error}</div>}
        </form>
    );
};

export { CustomCard };
