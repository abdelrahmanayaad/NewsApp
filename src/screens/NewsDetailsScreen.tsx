import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Linking, StyleSheet, View} from 'react-native';
import {
  CustomButton,
  CustomImage,
  ErrorComponent,
  GlobalTextComponent,
  Loader,
} from '../components';
import useNewsDetails from '../hooks/useNewsDetails';
import RootStackParamList, {ReactNavigationProps} from '../navigation/types';
import {responsiveHeight, responsiveSize} from '../utils/helper';
import {icons, images} from '../utils/images';
import {colors, fontSizes} from '../utils/Schema';

const NewsDetailsScreen = ({
  route,
}: NativeStackScreenProps<RootStackParamList, 'NewsDetailsScreen'>) => {
  const {articleId}: any = route.params;
  const navigation = useNavigation<ReactNavigationProps['navigation']>();
  const {data, isError, isLoading, error}: any = useNewsDetails(articleId);

  const handleOnPress = () => {
    navigation.goBack();
  };

  if (isLoading) return <Loader />;
  if (isError) return <ErrorComponent error={error.message} />;

  const handleClickOnNewsImage = () => {
    Linking.openURL(data[0]?.url);
  };

  return (
    <View style={styles.container}>
      <CustomButton onPress={handleOnPress} style={styles.backIconViewStyle}>
        <CustomImage source={icons.arrowBack} style={styles.backIconStyle} />
      </CustomButton>
      <GlobalTextComponent text={data[0]?.title} style={styles.titleStyle} />
      <View style={styles.writerViewStyle}>
        <GlobalTextComponent
          style={styles.authorStyle}
          text={data[0]?.author ?? 'Abdelrahman Ayad'}
        />
        <GlobalTextComponent
          style={styles.dateStyle}
          text={new Date(data[0]?.publishedAt).toDateString()}
        />
      </View>
      <CustomButton onPress={handleClickOnNewsImage}>
        <CustomImage
          source={{uri: data[0]?.urlToImage ?? images.imagePlaceholder}}
          style={styles.newsDetailsImageStyle}
        />
      </CustomButton>
      <GlobalTextComponent
        style={styles.descriptionStyle}
        text={data[0]?.content ?? data[0]?.title}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    padding: 20,
  },
  backIconViewStyle: {
    width: responsiveSize(40),
    height: responsiveSize(40),
    borderRadius: responsiveSize(20),
    marginBottom: responsiveHeight(20),
    backgroundColor: colors.white2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIconStyle: {
    width: responsiveSize(20),
    height: responsiveSize(20),
  },
  newsDetailsImageStyle: {
    width: 'auto',
    height: responsiveHeight(300),
    borderRadius: 5,
    marginTop: responsiveHeight(10),
  },
  titleStyle: {
    fontSize: fontSizes.fs16,
    fontWeight: '500',
    color: colors.black,
  },
  writerViewStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    marginTop: responsiveHeight(20),
  },
  authorStyle: {
    fontSize: fontSizes.fs12,
    textDecorationLine: 'underline',
    color: colors.gray,
  },
  dateStyle: {
    fontSize: fontSizes.fs12,
    color: colors.gray,
  },
  descriptionStyle: {
    fontSize: fontSizes.fs15,
    color: colors.black,
    fontWeight: '500',
    marginTop: responsiveHeight(10),
  },
});
export default NewsDetailsScreen;
