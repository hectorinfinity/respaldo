/** @format */
import React from 'react';
import { GetStaticPropsContext } from 'next';
import LayoutMain from '@/components/main/commons/LayoutMain';

const checkout = () => {
  return <div>checkout</div>;
};

checkout.Layout = LayoutMain;

// export async function getStaticProps({ locale }: GetStaticPropsContext) {
//   return {
//     props: {
//       messages: (await import(`@/messages/${locale}.json`)).default,
//     },
//   };
// }

export default checkout;
