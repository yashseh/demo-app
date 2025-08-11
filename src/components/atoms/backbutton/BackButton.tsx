import { showToast } from '@/src/components/molecules/toastMessage/ToastMessage';
import { CROSS_ICON } from '@/src/constants/exporter';
import { useRouter } from 'expo-router';
import React, { memo, useMemo } from 'react';
import { Pressable } from 'react-native';
import Svg, { Path } from 'react-native-svg';
import { useToast } from 'react-native-toast-notifications';
import { IBackButtonProps } from './BackButton.types';

const BackButton: React.FC<IBackButtonProps> = ({ isCross, onPressBack }) => {
    const router = useRouter();
    const toast = useToast();

    const handleBack = () => {
        const canGoBack = router.canDismiss();
        if (onPressBack) {
            onPressBack();
        } else {
            if (canGoBack) {
                router.back();
            } else {
                showToast(toast, 'Cannot go back from this screen', 'info');
            }
        }
    };

    const hitSlop = useMemo(() => ({ left: 20, right: 20, top: 20, bottom: 20 }), []);

    return (
        <Pressable hitSlop={hitSlop} onPress={handleBack}>
            {isCross && <CROSS_ICON width={20} height={20} />}
            {!isCross && (
                <Svg width="12" height="18" viewBox="0 0 12 18" fill="none">
                    <Path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.1844 16.1218C11.61 16.4832 11.6102 17.14 11.1849 17.5017C10.8469 17.789 10.3506 17.7892 10.0124 17.5022L0.896414 9.76303C0.426025 9.36369 0.425995 8.63781 0.89635 8.23843L10.0124 0.497917C10.3506 0.210751 10.847 0.210752 11.1852 0.49792C11.6113 0.859731 11.6113 1.51731 11.1852 1.87912L3.69581 8.2385C3.22549 8.63786 3.22548 9.36368 3.6958 9.76304L11.1844 16.1218Z"
                        fill="#121212"
                    />
                </Svg>
            )}
        </Pressable>
    );
};

export default memo(BackButton);
