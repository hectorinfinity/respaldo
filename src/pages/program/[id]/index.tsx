import { getEvents } from '@/api/event/event';
import MainLayout from '@/components/layout/main';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import ListCardEventRecommendation from '@/components/main/commons/ListCardEventRecommendation';
import CardProgramDetails from '@/components/main/programs/CardProgramDetails';
import HeaderProgram from '@/components/main/programs/HeaderProgram';
import ListProgramDays from '@/components/main/search/ListProgramDays';
import { faker } from '@faker-js/faker';
import { useQuery } from '@tanstack/react-query';
import { useLocale, useTranslations } from 'next-intl';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const ProgramDetailed = () => {
  const useFormReturn = useForm();
  const { control } = useFormReturn;
  const t = useTranslations('Public');
  const locale = useLocale();
  const [cardProgramDetails, setCardProgramDetails] = useState<any>();
  const [eventsRecommendations, setEventsRecommendations] = useState([]);
  const [listProgramDays, setListProgramDays] = useState([]);
  const events = useQuery({
    queryKey: ['events'],
    queryFn: getEvents,
  });
  useEffect(() => {
    setCardProgramDetails({
      image: faker.image.cats(),
      name: faker.lorem.sentence(),
      startDate: faker.date.future(),
      endDate: faker.date.future(),
      location: faker.address.city(),
      description: faker.lorem.sentences(),
    });
    setListProgramDays(
      Array.from({ length: 10 }, () => faker.datatype.datetime())
    );
    setEventsRecommendations(
      Array.from({ length: 4 }, () => ({
        category: faker.lorem.word(),
        image: faker.image.cats(),
        location: faker.address.streetAddress(),
        name: faker.name.jobTitle(),
      }))
    );
  }, []);
  return (
    <div>
      <HeaderProgram
        image="https://loremflickr.com/640/480/cats"
        name="Name of the program"
      />

      <div className="mt-16 mb-44 section-container space-y-16">
        <CardProgramDetails
          className="mt-16"
          description={cardProgramDetails?.description}
          endDate={new Date()}
          image={cardProgramDetails?.image}
          location={cardProgramDetails?.location}
          name={cardProgramDetails?.name}
          startDate={new Date()}
        />

        <ListProgramDays
          items={listProgramDays}
          name="field"
          control={control}
        />
        {/** TODO: controlers are different */}
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
    </div>
  );
};

ProgramDetailed.Layout = MainLayout;

export async function getServerSideProps({ locale }) {
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
    },
  };
}

export default ProgramDetailed;
