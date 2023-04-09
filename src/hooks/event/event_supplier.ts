import { useQuery } from '@tanstack/react-query';
import {
  createEventSupplier,
  deleteEventSupplier,
  getEventsSuppliers,
  readEventSupplier,
  updateEventSupplier,
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
