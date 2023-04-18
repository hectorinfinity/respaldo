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
    onSuccess: (data, event_category) => {
      console.log(data)
      queryClient.setQueryData([key], (prevEventCategory: any) =>{
        return [...prevEventCategory, event_category]}
      );
      queryClient.invalidateQueries([key]);
    },
  }); 
  return {mutate, isLoading, isError, isSuccess}
}

      

/*Read category*/
export function useReadEventCategory(category_id: string) {
  const {data,isLoading,isError}=useQuery([key], () => readEventCategory(category_id));
 
  return data
}

/*update category*/
export function useUpdateEventCategory(  ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation((values:{id:string,category:EventCategory})=>{
        
         
      return updateEventCategory(values.id, values.category )},{onSuccess: (data,value)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.map((item)=>{
             return item._id===value.id? value.category:item
          }))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete category*/
export function useDeleteEventCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
          deleteEventCategory,{onSuccess: (data,categoryDel)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.filter((dat:any)=>dat._id !== categoryDel))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}


