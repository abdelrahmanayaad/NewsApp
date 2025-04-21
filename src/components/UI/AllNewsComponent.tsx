import React from 'react';
import {FlatList, ImageProps, StyleSheet, View} from 'react-native';
import {_testNewsData} from '../../utils/data';
import NewsComponent from './NewsComponent';
import useGetAllNews from '../../hooks/useGetAllNews';
import Loader from './Loader';
import ErrorComponent from './ErrorComponent';
import {images} from '../../utils/images';

const AllNewsComponent = () => {
  const {data, isLoading, isError, error} = useGetAllNews();
  if (isLoading) return <Loader />;
  if (isError) return <ErrorComponent error={error.message} />;
  type _renderItemsProps = {
    item: {
      urlToImage: string;
      source: {
        name: string;
      };
      title: string;
      author: string;
      publishedAt: string;
    };
    index: number;
  };
  const _renderItems = ({item, index}: _renderItemsProps) => {
    return (
      <NewsComponent
        newImage={item.urlToImage ?? images.imagePlaceholder}
        category={item.source.name}
        newTitle={item.title}
        writer={item.author ?? 'Abdelrahman Ayad'}
        date={item.publishedAt.slice(0, 10)}
      />
    );
  };
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={data?.articles}
        renderItem={_renderItems}
      />
    </View>
  );
};

export default AllNewsComponent;

const styles = StyleSheet.create({});
