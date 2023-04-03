import { getEvents, readEvent } from '@/api/event/event';
import { getEventsCategories } from '@/api/event/event_category';
import MainLayout from '@/components/layout/main';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import ListCardEventRecommendation from '@/components/main/commons/ListCardEventRecommendation';
import CardEventDetails from '@/components/main/event/CardEventDetails';
import CardEventLocation from '@/components/main/event/CardEventLocation';
import SidebarEvent from '@/components/main/event/SidebarEvent';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const EventDetailed = () => {
  const useFormReturn = useForm();
  const [eventsRecommendations, setEventsRecommendations] = useState([]);
  const t = useTranslations('Public');

  const events = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  const categories = useQuery({
    queryKey: ['categories'],
    queryFn: getEventsCategories,
  });

  const category = categories?.data?.[0];

  const locale = useLocale();
  const event = events?.data?.[0];
  const info = event?.info.content.find((obj) => obj.lang == locale);

  useEffect(() => {
    setEventsRecommendations(
      Array.from({ length: 4 }, () => ({
        category: faker.lorem.word(),
        image: faker.image.cats(),
        location: faker.address.streetAddress(),
        name: faker.name.jobTitle(),
      }))
    );
  }, []);
  console.log(event);
  return (
    <div className="section-container space-y-16 mt-16 mb-44">
      <div className="flex justify-between gap-10">
        {/** TODO: event does not have `location` attribute or similar */}
        <CardEventDetails
          className="flex-1"
          details={
            event?.content?.find((obj) => obj.lang == locale).description
          }
          access={info?.access_limit}
          general={info?.general}
          observations={info?.observations}
          restrictions={info?.restrictions}
          services={info?.services}
          id={event?._id}
          image="https://loremflickr.com/640/480/cats"
        />
        <SidebarEvent
          className="h-max hidden md:block"
          category={category?.content?.find((obj) => obj.lang == locale).name}
          color={category?.color}
          cost={300}
          startDate={new Date()}
          endDate={new Date()}
          startTime="1:00"
          endTime="12:00"
          id={event?._id}
          isLoggedIn
          location="Location"
          name={event?.content?.find((obj) => obj.lang == locale).name}
          willAttend
        />
      </div>

      {/** TODO: tags does not have `lang` attribute */}
      <CardEventLocation
        location="Location"
        origin={{
          lat: -2.18331,
          lng: -79.8833,
        }}
        tags={event?.tags?.map((tag) => tag.tag)}
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
      {/** TODO: no fetch function found for CardRecommendation data */}
      <ListCardEventRecommendation
        items={eventsRecommendations}
        setCurrentPage={() => {}}
        setPageSize={() => {}}
        totalDocs={10}
      />
    </div>
  );
};

EventDetailed.Layout = MainLayout;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default EventDetailed;
