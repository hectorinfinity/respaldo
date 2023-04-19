import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createEventSpecialCategory,
  deleteEventSpecialCategory,
  getEventsSpecialsCategories,
  readEventSpecialCategory,
  updateEventSpecialCategory,
} from '@/api/event/event_special_category';
import { EventSpecialCategory } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_special_category';

export function useEventsSpecialsCategories(searchkey:string , searchword:string,sortby:string) {
  return useQuery<WithDocs<EventSpecialCategory>>([key], ()=> getEventsSpecialsCategories(searchkey, searchword, sortby));
}

export function useEventSpecialCategory(event_special_category_id: string) {
  return useQuery<EventSpecialCategory>([key, event_special_category_id], () =>
    readEventSpecialCategory(event_special_category_id as any)
  );
}

export function useCreateEventSpecialCategory() {
  const queryClient = useQueryClient();

 const {mutate, isLoading, isError, isSuccess}= useMutation(async (category:EventSpecialCategory)=> await createEventSpecialCategory(category), {
    onSuccess: (data, event_category) => {
      console.log(data)
      queryClient.setQueryData([key], (prevEventSpecialCategory: any) =>{
        return [...prevEventSpecialCategory, event_category]}
      );
      queryClient.invalidateQueries([key]);
    },
  }); 
  return {mutate, isLoading, isError, isSuccess}
}

      

/*Read category*/
export  function useReadEventSpecialCategory(especialCategory_id: string) {
  const {data,isLoading,isError}=useQuery([key], async () =>await readEventSpecialCategory(especialCategory_id));
 
  return data
}

/*update category*/
export function useUpdateEventSpecialCategory(  ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(async (values:{id:string,category:EventSpecialCategory})=>{
        
         
      return await updateEventSpecialCategory(values.id, values.category )},{onSuccess: (data,value)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.map((item)=>{
             return item._id===value.id? value.category:item
          }))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete category*/
export function useDeleteEventSpecialCategory( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(async (id:string)=>{
        return await deleteEventSpecialCategory(id)} ,{onSuccess: (data,categoryDel)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.filter((dat:any)=>dat._id !== categoryDel))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}


