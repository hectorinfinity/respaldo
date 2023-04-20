import axios from '@/lib/axios';
import { EventSpecialCategory } from '@/interfaces/event';

export const getEventsSpecialsCategories = async () => {
  const { data } = await axios.get(`/events/specials/categories/`);
  return data;
export const getEventsSpecialsCategories = async (searchkey:string , searchword:string,sortby:string ) => {
    const { data } = await axios.get(`/events/specials/categories/?page=1&size=100&${searchkey}&${searchword}&${sortby}&descending=true`);
    return data;
};

export const createEventSpecialCategory = async (
  special_category: EventSpecialCategory
) => {
  const { data } = await axios.post(
    `/events/specials/categories/`,
    special_category
  );
export const createEventSpecialCategory = async (
  special_category: EventSpecialCategory
) => {
  const { data } = await axios.post(
    `/events/specials/categories/`,
    special_category
  );

  return data;
};

export const readEventSpecialCategory = async (id: string) => {
  const { data } = await axios.get(`/events/specials/categories/${id}`);

  return data;
};

export const updateEventSpecialCategory = async (
  id: string,
  special_category: EventSpecialCategory
) => {
  const { data } = await axios.put(
    `/events/specials/categories/${id}`,
    special_category
  );

  return data;
};

export const deleteEventSpecialCategory = async (id: string) => {
  const { data } = await axios.delete(`/events/specials/categories/${id}`);

  return data;
};

export const readEventSpecialCategoryDateRange = async (id: string) => {
  const { data } = await axios.get(
    `/events/specials/categories/${id}/daterange`
  );

  return data;
};
