import React from 'react';
import LayoutMain from '@/components/main/commons/LayoutMain';
import ListCardCategory from '@/components/main/commons/ListCardCategory';
import { useState } from 'react';
import { useEffect } from 'react';
import { faker } from '@faker-js/faker';
import { Title } from '@/components/commons';
import { useLocale, useTranslations } from 'next-intl';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import { useForm } from 'react-hook-form';
import { getEventsCategories } from '@/api/event/event_category';
import { useQuery } from '@tanstack/react-query';
import { getEvents } from '@/api/event/event';
import Hero from '@/components/main/commons/Hero';

// TODO: order events by newest and relevance
const Home = () => {
  const t = useTranslations('Public');
  const locale = useLocale();
  const useFormReturn = useForm();
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: getEventsCategories,
  });

  const events = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  console.log('query data ', events?.data);
  const [heroImages, setHeroImages] = useState([]);
  useEffect(() => {
    setHeroImages(
      Array.from({ length: 5 }, () => ({
        image: faker.image.abstract(),
      }))
    );
  }, []);
  return (
    <div className="mb-44 -mt-8">
      <Hero items={heroImages} />
      <div className="mt-16 space-y-16 section-container">
        <ListCardCategory
          items={categories?.data?.map((item) => ({
            name: item.category.find((obj) => obj.lang == locale).name,
            color: item.color,
            image: item.picture,
          }))}
          layout="swiper"
          size="small"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={12}
        />

        <ListCardEvent
          loading={events?.isLoading}
          layout="swiper"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={10}
          title={t('home.featured_events')}
          items={events?.data?.map((item) => ({
            image: 'https://loremflickr.com/640/480/cats',
            name: item.content.find((obj) => obj.lang == locale).name,
            date: item.created_at,
            location: 'Location',
          }))}
          {...useFormReturn}
        />

        <ListCardEvent
          loading={events?.isLoading}
          layout="swiper"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={10}
          title={t('home.new_events')}
          items={events?.data?.map((item) => ({
            image: 'https://loremflickr.com/640/480/cats',
            name: item.content.find((obj) => obj.lang == locale).name,
            date: item.created_at,
            location: 'Location',
            color: 'purple',
          }))}
          {...useFormReturn}
        />
      </div>
    </div>
  );
};

Home.Layout = LayoutMain;

export async function getStaticProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default Home;
