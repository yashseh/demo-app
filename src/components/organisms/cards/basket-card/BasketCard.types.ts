import { IUserBasket } from '@/src/state/slices/user/User.types';
import { ViewStyle } from 'react-native';

export interface IBasketCardProps {
    basket: IUserBasket;
    onPress?: () => void;
    containerStyle?: ViewStyle;
}
