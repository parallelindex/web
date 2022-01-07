import useSWR from 'swr';

import { fetcher } from '../lib';

export function useUser(uuid: string) {
  const { data, error } = useSWR(`/api/user/${uuid}`, fetcher);

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  };
}
