import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  createUserFavorite,
  deleteUserFavorite,
  getUsersFavorites,
  readUserFavorite,
  updateUserFavorite,
} from '@/api/user/user_favorite';
import { UserFavorite } from '@/interfaces/user';
import { WithDocs } from '@/interfaces/serializers/commons';

const key = 'user_favorite';

export function useUserFavorites() {
  return useQuery<UserFavorite[]>([key], getUsersFavorites);
}

export function useUserFavorite(id: string) {
  return useQuery<UserFavorite>([key, id], () => readUserFavorite(id as any));
}

export function useMutationCreateFavorite() {
  return useMutation(createUserFavorite);
}
