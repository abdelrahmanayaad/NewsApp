import React from 'react';
import {FlatList, ImageProps, View} from 'react-native';
import {_testNewsData} from '../../utils/data';
import TrendingNewsComponent from './TrendingNewsComponent';

const AllTrendingNewsComponent = () => {
  type _renderItemsProps = {
    item: {
      image: ImageProps;
      title: string;
      writer: string;
      date: string;
    };
    index: number;
  };
  const _renderItems = ({item, index}: _renderItemsProps) => {
    return (
      <TrendingNewsComponent
        newImage={item.image}
        newTitle={item.title}
        writer={item.writer}
        date={item.date}
      />
    );
  };
  return (
    <View>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={_testNewsData}
        renderItem={_renderItems}
      />
    </View>
  );
};

export default AllTrendingNewsComponent;
