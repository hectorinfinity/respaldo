import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import {
  createEventScheduleTimetable,
  deleteEventScheduleTimetable,
  getEventsSchedulesTimetables,
  getFilterEventsSchedulesTimetables,
  readEventScheduleTimetable,
  updateEventScheduleTimetable,
} from '@/api/event/event_schedule_timetable';
import { EventScheduleTimetable } from '@/interfaces/event';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'event_schedules_timetables';

export function useEventScheduleTimetables() {
  return useQuery<WithDocs<EventScheduleTimetable>>(
    [key],
    getEventsSchedulesTimetables
  );
}

export function useInfinteEventSchedulesTimetables(
  pagination: { [key: string]: any } = {}
) {
  return useInfiniteQuery<WithDocs<EventScheduleTimetable>>(
    [key, pagination?.page],
    {
      queryFn: () => getFilterEventsSchedulesTimetables(pagination),
      keepPreviousData: true,
    }
  );
}

export function useEventScheduleTimetable(event_schedule_timetable_id: string) {
  console.log('schedule id ', event_schedule_timetable_id);
  return useQuery<EventScheduleTimetable>(
    [key, event_schedule_timetable_id],
    () => readEventScheduleTimetable(event_schedule_timetable_id)
  );
}
