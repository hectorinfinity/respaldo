import axios from '@/lib/axios';
import { EventSubsubcategory } from '@/interfaces/event';

export const useSubSubcategories = async () => {
    const { data } = await axios.get(`/api/events/subsubcategories`);
    return data;
};

export const createSubSubcategory = async (sub_subcategory:EventSubsubcategory) => {
    const { data } = await axios.post('/api/events/subsubcategories', sub_subcategory);

    return data;
}

export const readSubSubcategory = async (id: string) => {
    const { data } = await axios.get(`/api/events/subsubcategories/${id}`);

    return data;
}

export const updateSubSubcategory = async (id: string, sub_subcategory:EventSubsubcategory ) => {
    const { data } = await axios.put(`/api/events/subsubcategories/${id}`, sub_subcategory);

    return data;
}

export const deleteSubSubcategory = async (id: string) => {
    const { data } = await axios.delete(`/api/events/subsubcategories/${id}`);

    return data;
}