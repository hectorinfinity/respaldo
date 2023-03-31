import React, { useEffect, useState, useRef } from 'react';
import { classNames } from '@/helpers';
import { UseFormReturn } from 'react-hook-form';
import { WrapperLoader, SwiperControls } from '@/components/commons';
import CardEvent, {
  props as CardEventProps,
} from '@/components/main/commons/CardEvent';
import Pagination, {
  props as PaginationProps,
} from '@/components/commons/Pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination as SwiperPagination } from 'swiper';
import 'swiper/css/bundle';

export type props = {
  className?: string;
  layout?: 'grid' | 'columns' | 'swiper';
  items?: CardEventProps[];
  loading: boolean;
  totalDocs: number;
} & PaginationProps &
  UseFormReturn<any>;

const ListCardEvent: React.FC<props> = ({
  className,
  layout = 'grid',
  items,
  loading,
  totalDocs,
  setPageSize,
  setCurrentPage,
}) => {
  const swiperRef = useRef(null);
  const [cols, setCols] = useState(4);
  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width > 992) {
        setCols(4);
      } else if (width > 640) {
        setCols(2);
      } else {
        setCols(1);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);

    // cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={classNames('', className)}>
      <WrapperLoader loading={loading} totalDocs={totalDocs}>
        <div>
          {layout == 'swiper' ? (
            <div className="relative">
              <Swiper ref={swiperRef} slidesPerView={cols} spaceBetween={50}>
                {items.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <CardEvent layout="grid" {...item} />
                  </SwiperSlide>
                ))}
              </Swiper>
              <SwiperControls swiperRef={swiperRef} />
            </div>
          ) : layout == 'grid' ? (
            <div className="grid grid-cols-1  sm:grid-cols-2 gap-5 md:grid-cols-4">
              {items.map((item, idx) => (
                <CardEvent key={idx} layout="grid" {...item} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              {items.map((item, idx) => (
                <CardEvent key={idx} layout="column" {...item} />
              ))}
            </div>
          )}
        </div>
        <div>Loading...</div>
        <div>Not found</div>
      </WrapperLoader>
      {layout !== 'swiper' && (
        <Pagination
          className="mt-5"
          totalDocs={totalDocs}
          setPageSize={setPageSize}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
};

export default ListCardEvent;
