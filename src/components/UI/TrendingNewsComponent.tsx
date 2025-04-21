import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveSize,
  responsiveWidth,
} from '../../utils/helper';
import {icons} from '../../utils/images';
import {colors, fontSizes, fontWeights} from '../../utils/Schema';
import CustomButton from '../CustomButton';
import CustomImage from '../CustomImage';
import GlobalTextComponent from '../GlobalTextComponent';

type TrendingNewsComponentProps = {
  newImage: string;
  newTitle: string;
  writer: string;
  date: string;
  handleOnPress?: () => void;
};

const TrendingNewsComponent = ({
  newImage,
  newTitle,
  writer,
  date,
  handleOnPress,
}: TrendingNewsComponentProps) => {
  return (
    <View style={styles.container}>
      <CustomImage source={{uri: newImage}} style={styles.imageStyle} />
      <GlobalTextComponent
        style={styles.newTitleStyle}
        text={newTitle}
        numberOfLines={2}
      />
      <View style={styles.writerContainer}>
        <GlobalTextComponent
          style={styles.writerNameDateStyle}
          text={writer ?? 'Abdelrahman Ayad'}
        />
        <GlobalTextComponent
          style={styles.writerNameDateStyle}
          text={`• ${date.slice(0, 10)}`}
        />
      </View>
      <CustomButton
        onPress={handleOnPress}
        style={styles.buttonStyle}
        text="Read Now"
        textStyle={styles.textStyle}
        renderRight={() => (
          <CustomImage style={styles.iconStyle} source={icons.arrowRight} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: responsiveWidth(300),
    height: responsiveHeight(360),
    marginEnd: responsiveSize(10),
  },
  imageStyle: {
    width: responsiveWidth(300),
    height: responsiveHeight(230),
    borderRadius: 5,
  },
  newTitleStyle: {
    fontSize: fontSizes.fs15,
    fontWeight: fontWeights.regular,
    color: colors.black,
    marginTop: responsiveHeight(5),
  },
  writerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: responsiveSize(20),
    marginTop: responsiveHeight(5),
  },
  writerNameDateStyle: {
    fontSize: fontSizes.fs10,
    color: colors.black,
  },
  iconStyle: {
    width: responsiveSize(20),
    height: responsiveSize(20),
    marginTop: responsiveHeight(5),
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
    marginTop: responsiveHeight(5),
  },
  textStyle: {
    fontSize: fontSizes.fs12,
    textDecorationLine: 'underline',
    color: colors.black,
  },
});

export default TrendingNewsComponent;
