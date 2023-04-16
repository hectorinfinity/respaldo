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
const{data,isLoading,isError}=useQuery([key], getEventsVenuesCategories)
  return {isError,isLoading,data}
}

export async function useUpdateEventVenueCategory( updateCategory_id: string, eventCategory:EventVenueCategory ) {

    const queryClient=useQueryClient();
    
  
    const {mutate, isLoading, isError, isSuccess}= useMutation(
          await updateEventVenueCategory(updateCategory_id,eventCategory),{onSuccess: ()=>{
            queryClient.invalidateQueries([key])
        }})
  return {mutate, isLoading, isError, isSuccess};
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
export function useReadEventVenueCategory(EventVenue_id: string){
  return useQuery([key, EventVenue_id], () => readEventVenueCategory(EventVenue_id));
  
}


export function useDeleteEventVenueCategory(EventVenue_id: string) {
  return useQuery<EventVenueCategory>([key, EventVenue_id], () =>
  deleteEventVenueCategory(EventVenue_id)
  );
}
