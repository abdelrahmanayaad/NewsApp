import {Image, ImageProps} from 'react-native';

const CustomImage = ({source, ...props}: ImageProps) => {
  return <Image source={source} {...props} />;
};

export default CustomImage;
