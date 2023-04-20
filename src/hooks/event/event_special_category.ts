import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createEventSpecialCategory,
  deleteEventSpecialCategory,
  getEventsSpecialsCategories,
  readEventSpecialCategory,
  readEventSpecialCategoryDateRange,
  updateEventSpecialCategory,
} from '@/api/event/event_special_category';
import { EventSpecialCategory } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_special_category';

export function useEventsSpecialsCategories() {
  return useQuery<WithDocs<EventSpecialCategory>>(
    [key],
    getEventsSpecialsCategories
  );
}

export function useEventSpecialCategory(event_special_category_id: string) {
  return useQuery<EventSpecialCategory>([key, event_special_category_id], () =>
    readEventSpecialCategory(event_special_category_id as any)
  );
}

export function useEventSpecialCategoryDateRange(
  event_special_category_id: string
) {
  return useQuery(
    ['event_special_category_daterange', event_special_category_id],
    () => readEventSpecialCategoryDateRange(event_special_category_id)
  );
}
