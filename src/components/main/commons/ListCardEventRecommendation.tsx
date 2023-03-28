import React from 'react';
import { classNames } from '@/helpers';
import CardEventRecommendation, {
  props as CardEventRecommendationProps,
} from '@/components/main/commons/CardEventRecommendation';
import { props as PaginationProps } from '@/components/commons/Pagination';
import { Tab } from '@headlessui/react';
import { Icon } from '@/components/commons';

export type props = {
  className?: string;
  items: CardEventRecommendationProps[];
} & PaginationProps;

const ListCardEventRecommendation: React.FC<props> = ({
  className,
  items,
  setCurrentPage,
  setPageSize,
  totalDocs,
}) => {
  return (
    <div
      className={classNames('grid grid-cols-1 md:grid-cols-2 gap-5', className)}
    >
      <Tab.Group>
        <Tab.List>
          <Tab className="flex gap-2 items-center">
            {/* <Icon name='' /> */}
          </Tab>
        </Tab.List>
      </Tab.Group>
    </div>
  );
};

export default ListCardEventRecommendation;
