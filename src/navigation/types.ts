import {NativeStackScreenProps} from '@react-navigation/native-stack';

type RootStackParamList = {
  HomeScreen?: undefined;
  NewsDetailsScreen?: {
    articleId?: string;
  };
};
export type ReactNavigationProps = NativeStackScreenProps<RootStackParamList>;
export default RootStackParamList;
