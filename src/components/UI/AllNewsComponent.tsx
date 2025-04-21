import React from 'react';
import {FlatList, ImageProps, StyleSheet, View} from 'react-native';
import {_testNewsData} from '../../utils/data';
import NewsComponent from './NewsComponent';

const AllNewsComponent = () => {
  type _renderItemsProps = {
    item: {
      image: ImageProps;
      category: string;
      title: string;
      writer: string;
      date: string;
    };
    index: number;
  };
  const _renderItems = ({item, index}: _renderItemsProps) => {
    return (
      <NewsComponent
        newImage={item.image}
        category={item.category}
        newTitle={item.title}
        writer={item.writer}
        date={item.date}
      />
    );
  };
  return (
    <View>
      <FlatList
        scrollEnabled={false}
        data={_testNewsData}
        renderItem={_renderItems}
      />
    </View>
  );
};

export default AllNewsComponent;

const styles = StyleSheet.create({});
