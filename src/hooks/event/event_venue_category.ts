import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import {
  createEventVenueCategory,
  deleteEventVenueCategory,
  getEventsVenuesCategories,
  readEventVenueCategory,
  updateEventVenueCategory,
} from '@/api/event/event_venue_category';
import { EventVenueCategory } from '@/interfaces/event';

const key = 'event_venue_category';

export function useEventVenueCategories() {
  return useQuery<EventVenueCategory[]>([key], getEventsVenuesCategories);
}

export function useEventVenueCategory(event_venue_category_id: string) {
  return useQuery<EventVenueCategory>([key, event_venue_category_id], () =>
    readEventVenueCategory(event_venue_category_id as any)
  );
}
