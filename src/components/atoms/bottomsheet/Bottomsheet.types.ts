import { BottomSheetProps } from '@gorhom/bottom-sheet';
import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';

export interface BaseBottomSheetComponentProps extends BottomSheetProps {
    snapPoints: number[];
    children: ReactNode;
    ref: React.RefObject<BottomSheetProps>;
    onClose?: () => void;
    onOpen?: () => void;
    headerTitle?: string;
    headerRight?: ReactNode;
    shouldInitiateInClosedState?: boolean;
    gestureEnabled?: boolean;
    onBackDropPress?: () => void;
    backgroundColor?: string;
    withoutBackDrop?: boolean;
    headerBackgroundColor?: string;
    modalStyles?: StyleProp<ViewStyle>;
}
