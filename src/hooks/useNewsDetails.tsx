import {useQuery, UseQueryResult} from '@tanstack/react-query';
import apiRequest from '../services/api/apiRequest';
import {getTopHeadlineNewsDetailsType} from './../types/index';

const getTopHeadlineNewsDetails = async (
  articleId: string,
): Promise<getTopHeadlineNewsDetailsType> => {
  const response = await apiRequest({
    method: 'GET',
    url: 'top-headlines',
    params: {
      country: 'us',
    },
  });
  const article = response.data.articles.filter(
    (article: any) => article?.title === articleId,
  );
  return article;
};

const useNewsDetails = (
  articleId: string,
): UseQueryResult<getTopHeadlineNewsDetailsType> => {
  return useQuery({
    //! without articleId here ,react query still caching the old data and display it a few seconds and change the content
    queryKey: ['newsDetails', articleId],
    queryFn: () => getTopHeadlineNewsDetails(articleId),
    // ! the data still in the cache 20 sec
    staleTime: 1000 * 20,
  });
};
export default useNewsDetails;
