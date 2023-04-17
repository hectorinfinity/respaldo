import {
  useInfiniteQuery,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query';
import {
  getEventsSchedules,
  createEventSchedule,
  readEventSchedule,
  updateEventSchedule,
  deleteEventSchedule,
} from '@/api/event/event_schedule';
import { EventSchedule } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_schedule';



export function useInfiniteQueryEventSchedules(
  pagination: { [key: string]: any } = {}
) {
  return useInfiniteQuery<WithDocs<EventSchedule>>([key, pagination?.page], {
    queryFn: () => getEventsSchedules(pagination),
    keepPreviousData: true,
  });
}

export function useEventSchedule(event_schedule_id: string) {
  return useQuery<EventSchedule>([key, event_schedule_id], () =>
    readEventSchedule(event_schedule_id as any)
  );
}
export function useCreateEventSchedule() {
  
  const queryClient=useQueryClient();
    
  
  const {mutate, isLoading, isError, isSuccess}= useMutation(
        createEventSchedule,{onSuccess: (data)=>{
            queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
        }}
    )
  return {mutate, isLoading, isError, isSuccess};
}


/*update EventSchedule*/
export async function useUpdateEventSchedule( updateSchedule_id: string, Schedule:EventSchedule ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        await updateEventSchedule(updateSchedule_id,Schedule),{onSuccess: (data)=>{
          queryClient.setQueryData([key, updateSchedule_id ], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete EventSchedule*/
export function useDeleteEventSchedule(Schedule_id:string ) {

  const queryClient=useQueryClient();
  
return useQuery<EventSchedule>([key, Schedule_id], () =>
   deleteEventSchedule(Schedule_id))
    

}


