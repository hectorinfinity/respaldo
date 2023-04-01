import 'swiper/css';
import 'swiper/css/navigation';
import React from 'react';
import { classNames } from '@/helpers';
import CardCategory, {
  props as CardCategoryProps,
} from '@/components/main/commons/CardCategory';
import { props as PaginationProps } from '@/components/commons/Pagination';
import { useTranslations } from 'next-intl';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import { Button, Icon } from '@/components/commons';

export type props = {
  className?: string;
  layout: 'grid' | 'swiper';
  size: 'small' | 'large';
  items: Omit<CardCategoryProps, 'size'>[];
  totalDocs: number;
} & PaginationProps;

const ListCardCategory: React.FC<props> = ({
  className,
  items,
  layout = 'grid',
  setCurrentPage,
  setPageSize,
  size = 'large',
  totalDocs,
}) => {
  const t = useTranslations('List_Card_Category');
  return (
    <div className={classNames('flex flex-col ', className)}>
      <span className="inline-block font-bold mx-auto text-3xl">
        {t('title')}
      </span>
      <div className="mt-7 px-16 relative">
        {layout == 'swiper' && (
          <>
            <Button
              weight="ghost"
              shape="pill"
              className="absolute z-10 left-3 top-20 swiper-custom-prev-button"
              iconLeft={<Icon name="chevron-left" className="fill-none" />}
            />
            <Button
              weight="ghost"
              shape="pill"
              className="absolute z-10 right-3 top-20 swiper-custom-next-button"
              iconLeft={<Icon name="chevron-right" className="fill-none" />}
            />
          </>
        )}
        {layout == 'grid' ? (
          <div className="grid grid-cols-4 gap-5">
            {items.map((item, idx) => (
              <CardCategory key={idx} size={size} {...item} />
            ))}
          </div>
        ) : (
          <Swiper
            navigation={{
              nextEl: '.swiper-custom-next-button',
              prevEl: '.swiper-custom-prev-button',
            }}
            slidesPerView={4}
            breakpoints={{
              1024: {
                slidesPerView: 6,
              },
            }}
            modules={[Navigation]}
          >
            {items.map((item, idx) => (
              <SwiperSlide className="py-8 pr-5" key={idx}>
                <CardCategory size={size} {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};

export default ListCardCategory;
