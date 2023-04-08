import axios from '@/lib/axios';
import { User } from '@/interfaces/user';

export const getMe = async () => {
    const { data } = await axios.get(`/users/me`);

    return data;
};

export const getUsers = async () => {
    const { data } = await axios.get(`/users/`);

    return data;
};

export const createUser = async (user: User) => {
    const { data } = await axios.post(`/users/`, user);

    return data;
}

export const readUser = async (id: string) => {
    const { data } = await axios.get(`/users/${id}`);

    return data;
}

export const updateUser = async (user: User) => {
    console.log("updateUser from mutation: user:", user)
    const { data } = await axios.put(`/users/${user.uid}`, user);

    return data;
}

export const deleteUser = async (id: string) => {
    const { data } = await axios.delete(`/users/${id}`);

    return data;
}

export const getUserStripeCustomerId = async (userId: string) => {
    const user = await readUser(userId);

    return user.payment_data.stripe;
};

