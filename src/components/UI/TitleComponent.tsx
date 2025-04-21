import React from 'react';
import {StyleSheet, View} from 'react-native';
import {fontSizes, fontWeights} from '../../utils/Schema';
import {responsiveHeight, responsiveSize} from '../../utils/helper';
import {icons} from '../../utils/images';
import CustomImage from '../CustomImage';
import GlobalTextComponent from '../GlobalTextComponent';

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
