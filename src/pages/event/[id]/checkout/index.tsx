
import MainLayout from '@/components/layout/main';
import React from 'react';

const index = () => {
  return (
    <div className="section-container"></div>
  );
};

index.Layout = MainLayout;

export async function getServerProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default index;
  