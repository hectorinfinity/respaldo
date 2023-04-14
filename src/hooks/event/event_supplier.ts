import { useQuery } from '@tanstack/react-query';
import {
  createEventSupplier,
  deleteEventSupplier,
  getEventsSuppliers,
  readEventSupplier,
  updateEventSupplier,
  deleteEventSupplier
  
} from '@/api/event/event_supplier';
import { EventSupplier } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_supplier';

export function useEventSuppliers() {
  
  return useQuery<EventSupplier[]>([key], getEventsSuppliers);
}

export function useEventSupplier(event_supplier_id: string) {
  return useQuery<EventSupplier>([key, event_supplier_id], () =>
    readEventSupplier(event_supplier_id)
  );
}


/*Create supplier*/

export function useCreateEventSubcategory() {
  
  const queryClient=useQueryClient();
    
  
  const {mutate, isLoading, isError, isSuccess}= useMutation(
    createEventSupplier,{onSuccess: (data)=>{
            queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
        }}
    )
  return {mutate, isLoading, isError, isSuccess};
}
/*Read supplier*/
export function useReadEventSubcategory(category_id: string) {
  return useQuery([key, category_id], () => readEventSupplier(category_id));
}

/*update supplier*/
export function useUpdateEventSupplier(  ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
        updateEventSupplier,{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}
/*delete supplier*/
export  function useDeleteEventSupplier( ) {

  const queryClient=useQueryClient();
  

  const {mutate, isLoading, isError, isSuccess}= useMutation(
    deleteEventSupplier,{onSuccess: (data)=>{
          queryClient.setQueryData([key], (prev:any)=>prev.concat(data))
      }}
  )
return {mutate, isLoading, isError, isSuccess};
}

