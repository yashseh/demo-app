import HomeHeader from '@/src/components/molecules/home-header/HomeHeader';
import BasketCard from '@/src/components/organisms/cards/basket-card/BasketCard';
import { useGetBasketsQuery } from '@/src/state/slices/user/UserApi';
import { useThemeAwareObject } from '@/src/theme';
import { useTheme } from '@/src/theme/Theme.context';
import CustomSafeArea from '@/src/wrappers/customSafeArea/CustomSafeArea';
import { useRouter } from 'expo-router';
import React from 'react';
import { ScrollView, View } from 'react-native';
import { getStyles } from './HomePage.styles';

const HomePage = () => {
    // const { data: investments } = useGetInvestmentsQuery();
    const { data: baskets } = useGetBasketsQuery();
    const router = useRouter();

    const onPressBasket = (id: string) => {
        router.push(`/basket-detail?id=${id}`);
    };

    const { theme } = useTheme();
    const styles = useThemeAwareObject(getStyles);

    console.log(baskets, 'baskets');
    return (
        <CustomSafeArea hideBottom customStyles={{ backgroundColor: theme.color.primary }}>
            <HomeHeader />
            <View style={styles.container}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    {baskets?.data.map((basket) => (
                        <BasketCard basket={basket} onPress={() => onPressBasket(basket.id)} key={basket.id} />
                    ))}
                </ScrollView>
            </View>
        </CustomSafeArea>
    );
};

export default HomePage;
