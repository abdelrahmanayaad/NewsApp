import {useQuery, UseQueryResult} from '@tanstack/react-query';
import apiRequest from '../services/api/apiRequest';
import {topHeadlineType} from '../types';

const getTopHeadline = async (): Promise<topHeadlineType> => {
  const response = await apiRequest({
    method: 'GET',
    url: 'top-headlines',
    params: {
      country: 'us',
    },
  });
  return response.data;
};

const useGetTopHeadline = (): UseQueryResult<topHeadlineType> => {
  return useQuery({
    queryKey: ['topHeadline'],
    queryFn: getTopHeadline,
  });
};

export default useGetTopHeadline;
