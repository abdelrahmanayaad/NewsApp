import {useQuery, UseQueryResult} from '@tanstack/react-query';
import apiRequest from '../services/api/apiRequest';
import {allNewsType} from '../types';

const getAllNews = async (): Promise<allNewsType> => {
  const response = apiRequest({
    method: 'GET',
    url: 'top-headlines',
    params: {
      q: 'bitcoin',
      country: 'us',
      from: '2025-04-21',
      to: '2025-04-21',
    },
  });
  return (await response).data;
};

const useGetAllNews = (): UseQueryResult<allNewsType> => {
  return useQuery({
    queryKey: ['AllNews'],
    queryFn: getAllNews,
  });
};

export default useGetAllNews;
