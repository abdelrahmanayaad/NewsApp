import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, View} from 'react-native';
import useGetTopHeadline from '../../hooks/useGetTopHeadlines';
import {images} from '../../utils/images';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import TrendingNewsComponent from './TrendingNewsComponent';
import {ReactNavigationProps} from '../../navigation/types';

const AllTrendingNewsComponent = () => {
  const {data, error, isError, isLoading} = useGetTopHeadline();
  const navigation = useNavigation<ReactNavigationProps['navigation']>();
  if (isLoading) {
    return <Loader />;
  }
  if (isError) {
    return <ErrorComponent error={error.message} />;
  }
  type _renderItemsProps = {
    item: {
      urlToImage: string;
      title: string;
      author: string;
      publishedAt: string;
    };
    index: number;
  };
  const handleOnPress = (title: string) => {
    navigation.navigate('NewsDetailsScreen', {articleId: title});
  };
  const _renderArticles = ({item, index}: _renderItemsProps) => {
    return (
      <TrendingNewsComponent
        newImage={item.urlToImage ?? images.imagePlaceholder}
        newTitle={item.title}
        writer={item.author}
        date={new Date(item.publishedAt).toDateString()}
        // date={item.publishedAt}
        handleOnPress={() => handleOnPress(item.title)}
      />
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data?.articles}
        renderItem={_renderArticles}
      />
    </View>
  );
};

export default AllTrendingNewsComponent;
