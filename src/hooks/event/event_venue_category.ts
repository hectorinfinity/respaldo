import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
        getEventsVenuesCategories,
        createEventVenueCategory,
        readEventVenueCategory,
        updateEventVenueCategory,
        deleteEventVenueCategory
} from '@/api/event/event_venue_category';
import { WithDocs } from '@/interfaces/serializers/commons';
import { EventVenueCategory  } from '@/interfaces/event';


const key = 'event_venue_category';

export function useEventVenueCategory() {
  return useQuery([key], getEventsVenuesCategories);
}

export function useCreateEventVenueCategory() {
  const queryClient = useQueryClient();

  return useMutation(createEventVenueCategory, {
    onSuccess: (event_venue_category) => {
      queryClient.setQueryData([key], (prevEventCategory: any) =>
        prevEventCategory.concat(event_venue_category)
      );
      queryClient.invalidateQueries([key]);
    },
  });
}


export function useDeleteEventVenueCategory(EventVenue_id: string) {
  return useQuery<EventVenueCategory>([key, EventVenue_id], () =>
  deleteEventVenueCategory(EventVenue_id)
  );
}
