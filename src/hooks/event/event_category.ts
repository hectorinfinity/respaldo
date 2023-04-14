import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getEventsCategories,
  createEventCategory,
  readEventCategory,
  updateEventCategory,
  deleteEventCategory,
} from '@/api/event/event_category';
import { WithDocs } from '@/interfaces/serializers/commons';
import { EventCategory } from '@/interfaces/event';

const key = 'event_category';

export function useCategories() {
  return useQuery([key], getEventsCategories);
}

export function useMutationCreateEventCategory() {
  const queryClient = useQueryClient();

 const {mutate, isLoading, isError, isSuccess}= useMutation(createEventCategory, {
    onSuccess: (event_category) => {
      queryClient.setQueryData([key], (prevEventCategory: any) =>
        prevEventCategory.concat(event_category)
      );
      queryClient.invalidateQueries([key]);
    },
  }); 
  return {mutate, isLoading, isError, isSuccess}
}

      

/*Read subsubcategory*/
export function useReadEventCategory(category_id: string) {
  return useQuery([key, category_id], () => readEventSubcategory(category_id));
}

/*update subsubcategory*/
export  function useUpdateEventCategory( id:number ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
          updateEventCategory,{onSuccess: (data)=>{
          queryClient.setQueryData([key, id], (prev:any)=>(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete subsubcategory*/
export function useDeleteEventCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
          deleteEventCategory,{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev)
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}


