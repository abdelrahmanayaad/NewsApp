import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  responsiveHeight,
  responsiveSize,
  responsiveWidth,
} from '../../utils/helper';
import {colors, fontSizes} from '../../utils/Schema';
import {CustomButton, CustomImage, GlobalTextComponent} from '../index';
type NewsComponentProps = {
  newImage: string;
  category: string;
  newTitle: string;
  writer: string;
  date: string;
  handleOnPress?: () => void;
};
const NewsComponent = ({
  newImage,
  category,
  newTitle,
  writer,
  date,
  handleOnPress,
}: NewsComponentProps) => {
  return (
    <CustomButton style={styles.container} onPress={handleOnPress}>
      <CustomImage source={{uri: newImage}} style={styles.imageStyle} />
      <View style={styles.leftSideContainerStyle}>
        <GlobalTextComponent text={category} style={styles.newCategoryStyle} />
        <GlobalTextComponent
          text={newTitle}
          style={styles.newsDescriptionStyle}
          numberOfLines={3}
        />
        <View style={styles.writerContainerStyle}>
          <GlobalTextComponent style={styles.writerTextStyle} text={writer} />
          <GlobalTextComponent
            style={styles.writerTextStyle}
            text={`• ${date}`}
          />
        </View>
      </View>
    </CustomButton>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginBottom: responsiveHeight(10),
  },
  imageStyle: {
    width: responsiveWidth(130),
    height: responsiveHeight(140),
    borderRadius: 5,
  },
  leftSideContainerStyle: {
    justifyContent: 'space-between',
    marginStart: responsiveSize(15),
  },
  newCategoryStyle: {
    textDecorationLine: 'underline',
    color: colors.gray,
  },
  newsDescriptionStyle: {
    fontSize: fontSizes.fs16,
    color: colors.black,
    width: responsiveWidth(220),
    lineHeight: 22,
  },
  writerContainerStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  writerTextStyle: {
    fontSize: fontSizes.fs12,
    color: colors.gray,
  },
});

export default NewsComponent;
