import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { CardElement, Elements, useElements, useStripe } from '@stripe/react-stripe-js';
import { useQueryClient } from "@tanstack/react-query";

export const CardForm = () => {
    const [name, setName] = useState("");
    const [secret, setSecret] = useState("");

    const stripe = useStripe();
    const elements = useElements();
    const router = useRouter();

    // get stripe secret
    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData(["user"])
    useEffect(() => {
        console.log(secret)
        setSecret(userData?.[0]?.user?.payment_data?.stripe)
    }, [])

    const handleNameChange = (event: any) => {
        setName(event.target.value);
    }

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, setupIntent } = await stripe.confirmCardSetup(secret, {
            payment_method: {
                card: cardElement,
                // billing_details: {
                //     name: name,
                // }
            },
        });

        if (error) {
            console.error('Error:', error.message);
        } else {
            console.log('Payment successful:', setupIntent);
            router.push('/panel/profile/card');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={handleNameChange} />
            </div> */}
            <CardElement />
            <button type="submit" disabled={!stripe}>
                Submit
            </button>
        </form>
    );
};

