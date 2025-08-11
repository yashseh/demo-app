/* eslint-disable react/display-name */
import { horizontalScale, verticalScale } from '@/src/constants/metrics';
import { useScreenInsets } from '@/src/hooks/useScreenInsets';
import { Theme, useThemeAwareObject } from '@/src/theme';
import BottomSheet, { BottomSheetBackdrop } from '@gorhom/bottom-sheet';
import { Portal } from '@gorhom/portal';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Heading from '../heading/Heading';
import { IHeadingTypes } from '../heading/Heading.types';
import { BaseBottomSheetComponentProps } from './Bottomsheet.types';

export const BaseBottomSheet = React.forwardRef<BottomSheet, BaseBottomSheetComponentProps>(
    (
        {
            children,
            headerTitle,
            headerRight,
            shouldInitiateInClosedState = false,
            onClose,
            onOpen,
            snapPoints,
            modalStyles,
            headerBackgroundColor,
            gestureEnabled,
            ...props
        },
        ref
    ) => {
        const styles = useThemeAwareObject(createStyles);

        const { insetsBottom } = useScreenInsets();

        return (
            <Portal>
                <BottomSheet
                    ref={ref}
                    index={shouldInitiateInClosedState ? -1 : 0}
                    snapPoints={snapPoints}
                    handleComponent={() => <></>}
                    backdropComponent={(backdropProps) => (
                        <BottomSheetBackdrop {...backdropProps} pressBehavior="none" />
                    )}
                    enableContentPanningGesture={gestureEnabled}
                    enableHandlePanningGesture={gestureEnabled}
                    enablePanDownToClose={true}
                    backgroundStyle={styles.bottomSheet}
                    {...props}
                >
                    <View
                        style={[
                            styles.container,
                            {
                                marginHorizontal: headerTitle && headerTitle?.length > 0 ? 0 : verticalScale(24)
                            },
                            Boolean(headerBackgroundColor) && {
                                backgroundColor: headerBackgroundColor
                            },
                            {
                                marginBottom: insetsBottom
                            },
                            modalStyles
                        ]}
                    >
                        <View style={styles.line} />

                        {headerTitle && headerTitle?.length > 0 ? (
                            <View style={styles.header}>
                                <View style={styles.headerContent}>
                                    <Heading type={IHeadingTypes.h20} content={headerTitle} />
                                    {headerRight && <View style={styles.headerRight}>{headerRight}</View>}
                                </View>
                            </View>
                        ) : (
                            <View className="h-9" />
                        )}
                        {children}
                    </View>
                </BottomSheet>
            </Portal>
        );
    }
);

const createStyles = (theme: Theme) =>
    StyleSheet.create({
        line: {
            width: verticalScale(64),
            height: verticalScale(4),
            backgroundColor: '#000',
            borderRadius: 4,
            alignSelf: 'center',
            marginTop: horizontalScale(16)
            // marginBottom: verticalScale(25.5),
        },
        header: {
            marginTop: horizontalScale(32),
            paddingBottom: 12,
            marginHorizontal: horizontalScale(24),
            borderBottomWidth: 1,
            borderColor: theme.color.lightGrey
        },
        headerContent: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start'
        },
        headerRight: {
            marginLeft: 16
        },
        container: {
            borderTopRightRadius: 32,
            borderTopLeftRadius: 32,
            marginHorizontal: 24,
            flex: 1
        },
        bottomSheet: {
            backgroundColor: '#fff',
            borderTopLeftRadius: 32,
            borderTopRightRadius: 32
        }
    });
