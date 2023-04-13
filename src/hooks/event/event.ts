import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import {
  getEvents,
  createEvent,
  readEvent,
  updateEvent,
  deleteEvent,
} from '@/api/event/event';
import { Event } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event';

export function useEvents() {
  return useQuery<WithDocs<Event>>([key], getEvents);
}

export function useInfinteEvents(pagination: { [key: string]: any } = {}) {
  return useInfiniteQuery<WithDocs<Event>>([key, pagination?.page], {
    queryFn: () => getEvents(pagination),
    keepPreviousData: true,
  });
}

export function useEvent(event_id: string) {
  return useQuery<Event>([key, event_id], () => readEvent(event_id as any));
}
