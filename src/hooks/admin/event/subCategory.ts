import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { getEventsSubcategories, createEventSubcategory, readEventSubcategory,updateEventSubcategory,deleteEventSubcategory} from '@/api/event/event_subcategory'
import { EventSubcategory } from '@/interfaces/event';
import { useState } from 'react';

const key = "event_subcategory";

export function useSubCategories(itemsPerPage:number) {

 

    const{data,isLoading,isError}=useQuery([key], getEventsSubcategories)

    const [currentPage,setcurrentPage]=useState(1)
    const totalItems= data?.length;
    const totalPages =  Math.ceil( totalItems/ itemsPerPage); 

    const indexOfLast= currentPage * itemsPerPage;
    const indexOfFirst=indexOfLast-itemsPerPage;
    const currentPageItems=data?.slice(indexOfFirst, indexOfLast);
    return {
        
        currentPage,
        totalItems,
        totalPages,
        itemsPerPage,
        currentPageItems,
        isLoading,
        data
    }
 
}
/*Create subcategory*/

export function useCreateEventSubcategory() {
  
  const queryClient=useQueryClient();
    
  
  const {mutate, isLoading, isError, isSuccess}= useMutation(
        createEventSubcategory,{onSuccess: (data)=>{
            queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
        }}
    )
  return {mutate, isLoading, isError, isSuccess};
}
/*Read subcategory*/
export function useReadEventSubcategory(category_id: string) {
  return useQuery([key, category_id], () => readEventSubcategory(category_id));
}

/*update subcategory*/
export async function useUpdateEventCategory( updateCategory_id: string, eventCategory:EventSubcategory ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        await updateEventSubcategory(updateCategory_id, eventCategory),{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete subcategory*/
export async function useDeleteEventCategory( deleteCategory_id: string) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        await deleteEventSubcategory(deleteCategory_id),{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}

