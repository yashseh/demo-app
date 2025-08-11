import { BaseBottomSheet } from '@/src/components/atoms/bottomsheet/Bottomsheet';
import { windowHeight } from '@/src/constants/metrics';
import { BottomSheetMethods } from '@gorhom/bottom-sheet/lib/typescript/types';
import React from 'react';
import { Text } from 'react-native';

const SubscribeBasketBottomSheet = React.forwardRef<BottomSheetMethods, any>(({}, ref) => {
    return (
        <BaseBottomSheet ref={ref} enableDynamicSizing={false} snapPoints={[0.1, windowHeight * 0.5]}>
            <Text>SubscribeBasketBottomSheet</Text>
        </BaseBottomSheet>
    );
});

SubscribeBasketBottomSheet.displayName = 'SubscribeBasketBottomSheet';

export default SubscribeBasketBottomSheet;
