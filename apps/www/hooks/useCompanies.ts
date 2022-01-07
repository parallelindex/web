import useSWR from 'swr';

import { fetcher } from '../lib';

export function useCompanies(userId: number) {
  const { data, error } = useSWR(
    `/api/user/companies?userId=${userId}`,
    fetcher,
  );

  return {
    companies: data,
    isLoading: !error && !data,
    isError: error,
  };
}
