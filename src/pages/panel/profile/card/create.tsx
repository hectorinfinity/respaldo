import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { CustomCard } from '@/components/admin/profile/customCard';
import AdminLayout from "@/components/layout/admin";

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_API_KEY);

const CreateCard = () => {
    const router = useRouter();

    const handleSuccess = () => {
        router.push('/panel/profile/card');
    };

    return (
        <div>
            {/* Render your form here */}
            <Elements stripe={stripePromise}>
                <CustomCard onSuccess={handleSuccess} />
            </Elements>
        </div>
    );
};

CreateCard.Layout = AdminLayout;
export default CreateCard;
