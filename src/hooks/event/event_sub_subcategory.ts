/* import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getEventsSubcategories,
     createEventSubcategory,
      readEventSubcategory,
      updateEventSubcategory,
      deleteEventSubcategory} from '@/api/event/event_sub_subcategory'
import { EventSubsubcategory} from '@/interfaces/event';
import { useState } from 'react';

const key = "event_sub_subcategory";

export function useSubCategories(itemsPerPage:number) {
    const{data,isLoading,isError}=useQuery([key], getEventsSubcategories)

   
        isError,
        isLoading,
        data
    }
 
}
//Create sub_subcategory

export function useCreateEventSubcategory() {
  
  const queryClient=useQueryClient();
    
  
  const {mutate, isLoading, isError, isSuccess}= useMutation(
        createEventSubcategory,{onSuccess: (data)=>{
            queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
        }}
    )
  return {mutate, isLoading, isError, isSuccess};
}
//Read sub_subcategory
export function useReadEventSubcategory(category_id: string) {
  return useQuery([key, category_id], () => readEventSubcategory(category_id));
}

//update sub_subcategory
export async function useUpdateEventCategory( updateCategory_id: string, eventCategory:EventSubcategory ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        await updateEventSubcategory(updateCategory_id, eventCategory),{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
//delete sub_subcategory
export  function useDeleteEventCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        deleteEventSubcategory,{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.filter(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}

*/