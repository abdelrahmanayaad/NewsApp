import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {
  AllNewsComponent,
  AllTrendingNewsComponent,
  HeaderComponent,
  TitleComponent,
} from '../components';
import CustomTextInput from '../components/UI/CustomTextInput';
import {responsiveSize} from '../utils/helper';
import {colors} from '../utils/Schema';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderComponent />
      <CustomTextInput />
      <TitleComponent title="Trending Now" />
      <AllTrendingNewsComponent />
      <TitleComponent title="All News" />
      <AllNewsComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: responsiveSize(15),
  },
});

export default HomeScreen;
