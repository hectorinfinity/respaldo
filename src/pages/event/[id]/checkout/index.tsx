import React, { useState } from 'react';
import MainLayout from '@/components/layout/main';
import HeaderCheckout from '@/components/main/checkout/HeaderCheckout';
import SidebarCheckout from '@/components/main/checkout/SidebarCheckout';
import StepCheckoutQuantity from '@/components/main/checkout/StepCheckoutQuantity';
import StepCheckoutSeats from '@/components/main/checkout/StepCheckoutSeats';
import StepCheckoutTickets from '@/components/main/checkout/StepCheckoutTickets';
import StepCheckoutPayment from '@/components/main/checkout/StepCheckoutPayment';
import { useQuery } from '@tanstack/react-query';
import { readEvent } from '@/api/event/event';
import { useRouter } from 'next/router';
import { Event } from '@/interfaces/event';
import { useForm } from 'react-hook-form';
import { useLocale } from 'next-intl';
import { faker } from '@faker-js/faker';

const index = () => {
  const router = useRouter();
  const { id } = router.query;
  const locale = useLocale();
  console.log(locale)
  const useFormReturn = useForm();
  const { isLoading, error, data } = useQuery<Event>({
    queryKey: ['event'],
    queryFn: async () => await readEvent(id as any),
    enabled: Boolean(id),
  });
  const [currentStep, setCurrentStep] = useState(1);
  const content = data?.content.find((content) => content.lang == locale);
  return (
    <div className="py-20 section-container ">
      <HeaderCheckout currentStep={currentStep} />
      <div className="flex gap-10 mt-16">
        <div className="basis-3/4">
          {currentStep == 1 ? (
            <StepCheckoutQuantity
              name={content?.name}
              price={100}
              location="Mexico"
              {...useFormReturn}
            />
          ) : (
            <></>
          )}
        </div>
        <SidebarCheckout
          className="basiss-1/4"
          {...{
            image: faker.image.imageUrl(),
            name: faker.name.findName(),
            date: faker.date.future(),
            countTickets: faker.datatype.number(),
            spots: Array.from({ length: 5 }, () => ({
              row: faker.random.alphaNumeric(2),
              seat: faker.datatype.number(20),
              section: faker.datatype.number(10),
            })),
            subtotal: faker.datatype.number(),
            fees: faker.datatype.number(),
            discount: faker.datatype.number(),
            total: faker.datatype.number(),
            currentStep,
            ...useFormReturn,
          }}
        />
      </div>
    </div>
  );
};

index.Layout = MainLayout;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default index;
