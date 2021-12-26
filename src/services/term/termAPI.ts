import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Term } from './term';
import jsonUrl from './terms.json?url';

export const termApi = createApi({
  reducerPath: 'term',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getTerms: builder.query<Term, void>({
      query: () => jsonUrl,
    }),
  }),
});

export const { useGetTermsQuery, reducer } = termApi;
