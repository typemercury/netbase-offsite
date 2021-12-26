import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { TermData } from './term';
import jsonUrl from './terms.json?url';

export const termApi = createApi({
  reducerPath: 'term',
  baseQuery: fetchBaseQuery({ baseUrl: '/' }),
  endpoints: (builder) => ({
    getTerms: builder.query<TermData[], void>({
      query: () => jsonUrl,
    }),
  }),
});

export const { useGetTermsQuery, reducer } = termApi;
