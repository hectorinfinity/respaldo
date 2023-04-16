import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import { useSubSubcategories,
  createSubSubcategory,
  readSubSubcategory,
  updateSubSubcategory,
  deleteSubSubcategory } from '@/api/event/event_sub_subcategory'
import { EventSubsubcategory} from '@/interfaces/event';
import { useState } from 'react';

const key = "event_sub_subcategory";

export function useSubsubCategories() {
    const{data,isLoading,isError}=useQuery([key], useSubSubcategories)

   
    return{    
        isError,
        isLoading,
        data
    }
 
}
//Create sub_subcategory

export function useCreateEventSubSubcategory() {
  
  const queryClient=useQueryClient();
    
  
  const {mutate, isLoading, isError, isSuccess}= useMutation(
    createSubSubcategory,{onSuccess: (data)=>{
            queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
        }}
    )
  return {mutate, isLoading, isError, isSuccess};
}
//Read sub_subcategory
export function readEventSubSubcategory(category_id: string) {
  return useQuery([key, category_id], () => readSubSubcategory(category_id));
}

//update sub_subcategory
export async function useUpdateEventCategory( updateCategory_id: string, eventSubSubCategory:EventSubsubcategory ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        await updateSubSubcategory(updateCategory_id, eventSubSubCategory),{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
//delete sub_subcategory
export  function useDeleteEventCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
    deleteSubSubcategory,{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.filter(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}

