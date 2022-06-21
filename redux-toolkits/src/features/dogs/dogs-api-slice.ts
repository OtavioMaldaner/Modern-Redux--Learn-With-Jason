import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const DOG_API_KEY = '01558750-f117-4821-a7fb-8f8ec0797af8';

interface Breed {
    id: string,
    name: string,
    image: {
        url: string
    }
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.thedogapi.com/v1',
        prepareHeaders(headers) {
            headers.set('x-api-key', DOG_API_KEY);
            return headers;
        }
    }),

    endpoints (builder) {
        return {
            fetchBreeds: builder.query<Breed[], number|void>({ 
                query(limit = 10) {
                    return `/breeds?limit=${limit}`;
                },
            })
        }
    }
});

export const { useFetchBreedsQuery } = apiSlice;