import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {colors, fontSizes, fontWeights} from '../../utils/Schema';
import {responsiveHeight, responsiveSize} from '../../utils/helper';
import {icons} from '../../utils/images';
import GlobalTextComponent from '../GlobalTextComponent';
import CustomImage from '../CustomImage';

type TitleComponentProps = {
  title?: string;
};

const TitleComponent = ({title}: TitleComponentProps) => {
  return (
    <View style={styles.titleHeaderContainer}>
      <GlobalTextComponent text={title} style={styles.titleStyle} />
      <CustomImage
        resizeMode="contain"
        source={icons.arrowRight}
        style={styles.notificationIconStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  titleHeaderContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: responsiveHeight(20),
  },
  titleStyle: {
    fontSize: fontSizes.fs16,
    fontWeight: fontWeights.regular,
  },
  notificationIconStyle: {
    width: responsiveSize(25),
    height: responsiveSize(25),
  },
});

export default TitleComponent;
