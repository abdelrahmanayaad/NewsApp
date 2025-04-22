import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import useGetAllNews from '../../hooks/useGetAllNews';
import {images} from '../../utils/images';
import GlobalTextComponent from '../GlobalTextComponent';
import ErrorComponent from './ErrorComponent';
import Loader from './Loader';
import NewsComponent from './NewsComponent';

const AllNewsComponent = () => {
  const {data, isLoading, isError, error} = useGetAllNews();
  const navigation: any = useNavigation();
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

  const handleOnPress = (title: string) => {
    navigation.navigate('NewsDetailsScreen', {articleId: title});
  };

  const _renderItems = ({item, index}: _renderItemsProps) => {
    return (
      <NewsComponent
        newImage={item.urlToImage ?? images.imagePlaceholder}
        category={item.source.name}
        newTitle={item.title}
        writer={item.author ?? 'Abdelrahman Ayad'}
        date={new Date(item.publishedAt).toDateString()}
        // date={item.publishedAt.slice(0, 10)}
        handleOnPress={() => handleOnPress(item.title)}
      />
    );
  };
  return (
    <View>
      {data?.articles.length ? (
        <FlatList
          scrollEnabled={false}
          data={data?.articles}
          renderItem={_renderItems}
        />
      ) : (
        <View style={styles.emptyView}>
          <GlobalTextComponent text="No articles available !" />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  emptyView: {
    width: '100%',
    height: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default AllNewsComponent;
