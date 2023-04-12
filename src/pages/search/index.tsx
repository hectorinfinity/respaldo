import { getEvents } from '@/api/event/event';
import {
  getEventsCategories,
  readEventCategory,
} from '@/api/event/event_category';
import { Title } from '@/components/commons';
import MainLayout from '@/components/layout/main';
import CardAdvertisment from '@/components/main/commons/CardAdvertisment';
import Hero from '@/components/main/commons/Hero';
import ListCardEvent from '@/components/main/commons/ListCardEvent';
import SidebarSearch from '@/components/main/commons/SidebarSearch';
import HeaderCategory from '@/components/main/search/HeaderCategory';
import HeaderSearch from '@/components/main/search/HeaderSearch';
import { useEventCategories } from '@/hooks/event/event_category';
import { useEvents, useInfinteEvents } from '@/hooks/event/event';
import { Event } from '@/interfaces/event';
import { faker } from '@faker-js/faker';
import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useLocale, useTranslations } from 'next-intl';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

const Search = ({ categories }) => {
  const useFormReturn = useForm<any>({
    defaultValues: {
      initial_date: 'dd/mm/aaaa',
      finish_date: 'dd/mm/aaaa',
    },
  });
  const { watch } = useFormReturn;
  const locale = useLocale();
  const { replace, push, query: queryObj } = useRouter();
  const t = useTranslations('Public');
  const query = watch('query');
  const [pagination, setPagination] = useState<any>({});
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState();
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
    status,
    error,
    isLoading,
  } = useInfinteEvents({
    searchword: queryObj?.category,
    searchkey: query,
    page: pagination?.page,
    size: pagination?.size,
  });
  const events = useEvents({
    searchword: queryObj?.category,
    searchkey: query,
    page: pagination?.page,
    size: pagination?.size,
  });
  const refetch = events?.refetch;

  const category = categories?.find((item) =>
    item.category.find((obj) => obj.name == queryObj?.category)
  );

  useEffect(() => {
    setPagination(queryObj);
    refetch();
  }, [
    query,
    queryObj?.category,
    queryObj?.sub_category,
    queryObj?.sub_sub_category,
    queryObj?.initial_date,
    queryObj?.finish_date,
    queryObj?.page,
    queryObj?.size,
  ]);

  return (
    <div className="-mt-8 mb-44">
      <Hero
        items={[
          {
            image: '/images/slides/search-slide.png',
            url: '/images/slides/search-slide.png',
          },
        ]}
      />

      <div className="mt-16 space-y-16 section-container">
        <HeaderSearch
          className="max-w-5xl mx-auto"
          items={categories?.map((item) => ({
            name: item.category.find((obj) => obj.lang == locale)?.name,
            color: item.color,
            image: item.picture,
          }))}
          layout="swiper"
          size="small"
          setCurrentPage={() => {}}
          setPageSize={() => {}}
          totalDocs={0}
          {...useFormReturn}
        />

        {typeof queryObj?.category == 'string' && queryObj?.category !== '' && (
          <HeaderCategory
            color={category?.color}
            image={category?.picture}
            name={category?.category?.find((obj) => obj.lang == locale)?.name}
            size="large"
          />
        )}
        <div className="grid grid-cols-6 gap-5 md:gap-10">
          <SidebarSearch
            categories={categories}
            className="hidden col-span-2 md:block sticky top-0"
            {...useFormReturn}
          />
          {events?.data?.items?.length == 0 &&
          isLoading == false &&
          query != '' ? (
            <div className="col-span-6 space-y-10 md:col-span-4">
              <div className="flex flex-col gap-2">
                <Title level="h5">
                  {t('commons.search_no_results', {
                    query,
                  })}
                </Title>
                <p>{t('commons.check_words')}</p>
                <hr className="border-gray-400" />
              </div>

              <ListCardEvent
                categories={categories}
                className="col-span-6 md:col-span-4"
                loading={isLoading}
                layout="grid"
                setCurrentPage={setCurrentPage}
                setPageSize={setPageSize}
                totalDocs={data?.pages?.[0]?.total}
                isFetchingNextPage={isFetchingNextPage}
                hasNextPage={hasNextPage}
                fetchNextPage={fetchNextPage}
                title={t('commons.recommended_events')}
                items={data?.pages?.flatMap((page) =>
                  page.items.map((item) => ({
                    image: 'https://loremflickr.com/640/480/cats',
                    name:
                      item.content.find((obj) => obj.lang == locale)?.name ||
                      item.content.find((obj) => obj.lang == 'es')?.name,
                    startDate: new Date(),
                    startTime: '1:00',
                    endTime: '12:00',
                    location: 'Location',
                    color: item.category_id?.color,
                    id: item._id,
                  }))
                )}
                {...useFormReturn}
              />
            </div>
          ) : (
            <ListCardEvent
              categories={categories}
              className="col-span-6 md:col-span-4"
              loading={isLoading}
              layout="grid"
              setCurrentPage={setCurrentPage}
              setPageSize={setPageSize}
              totalDocs={data?.pages?.[0]?.total}
              isFetchingNextPage={isFetchingNextPage}
              hasNextPage={hasNextPage}
              fetchNextPage={fetchNextPage}
              title={t('commons.recommended_events')}
              items={data?.pages?.flatMap((page) =>
                page.items.map((item) => ({
                  image: 'https://loremflickr.com/640/480/cats',
                  name:
                    item.content.find((obj) => obj.lang == locale)?.name ||
                    item.content.find((obj) => obj.lang == 'es')?.name,
                  startDate: new Date(),
                  startTime: '1:00',
                  endTime: '12:00',
                  location: 'Location',
                  color: item.category_id?.color,
                  id: item._id,
                }))
              )}
              {...useFormReturn}
            />
          )}
        </div>
      
        <CardAdvertisment
          size="large"
          image="/images/advertisements/anunciate_aqui.png"
        />
      </div>
    </div>
  );
};

Search.Layout = MainLayout;

export async function getStaticProps({ locale }) {
  const { data } = await axios.get(
    `${process.env.NEXT_PUBLIC_API_URL}/events/categories/`
  );
  return {
    props: {
      messages: (await import(`@/messages/${locale}.json`)).default,
      categories: data,
    },
  };
}

export default Search;
