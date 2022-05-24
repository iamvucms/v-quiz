import {FlatList, Image, Pressable, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {BgScreen, BounceButton, Padding, VText} from '../../components/';
import {Colors} from '../../constants';
import {ArrowLeftSvg} from '../../assets/svg';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Categories, clickSound} from '../../constants/data';
import Animated, {
  BounceIn,
  FadeIn,
  FadeInDown,
  FadeInLeft,
  FadeInRight,
  FadeInUp,
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import RNSound from 'react-native-sound';
const ChooseCategory = ({navigation}) => {
  const {top, bottom} = useSafeAreaInsets();
  const renderCategoryItem = ({item, index}) => {
    const onPress = () => {
      navigation.navigate('GamePlay', {
        category: item,
      });
    };
    const isLeft = index % 2 === 0;
    return (
      <Animated.View
        entering={(isLeft ? FadeInLeft : FadeInRight).delay(100 * index)}
        style={[
          styles.categoryItemContainer,
          isLeft
            ? {
                marginLeft: 10,
              }
            : {
                marginRight: 10,
              },
        ]}>
        <CategoryCard onPress={onPress} index={index} data={item} />
      </Animated.View>
    );
  };
  const onBackPress = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <Padding paddingTop={top} />
      <BgScreen />
      <View style={styles.header}>
        <BounceButton onPress={onBackPress} style={styles.btnBack}>
          <ArrowLeftSvg size={32} color={Colors.white} />
        </BounceButton>
        <VText fontSize="h5" fontWeight={700} color={Colors.secondary}>
          Choose a Category
        </VText>
      </View>
      <View style={styles.categoriesContainer}>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={Categories}
          renderItem={renderCategoryItem}
          keyExtractor={item => `${item.id}`}
          ListFooterComponent={<Padding paddingBottom={bottom} />}
        />
      </View>
    </View>
  );
};
export default ChooseCategory;
const CategoryCard = ({data, onPress, index}) => {
  const anim = useSharedValue(0);
  const onCardPressIn = () => {
    anim.value = 0;
    anim.value = withTiming(1);
  };
  const onCardPressOut = () => {
    anim.value = withSpring(0);
  };
  const onCardPress = () => {
    if (clickSound) {
      clickSound.play();
    }
    onPress && onPress();
  };
  const containerStyle = useAnimatedStyle(() => ({
    transform: [{scale: interpolate(anim.value, [0, 1], [1, 0.9])}],
  }));
  return (
    <Animated.View style={[containerStyle, {width: '90%'}]}>
      <Pressable
        onPressIn={onCardPressIn}
        onPress={onCardPress}
        onPressOut={onCardPressOut}
        style={styles.categoryItem}>
        <Animated.Image
          entering={FadeInUp.delay(index * 150)}
          style={styles.categoryImage}
          source={data.image}
        />
        <Animated.View entering={FadeInDown.delay(index * 150)}>
          <VText
            align="right"
            fontWeight={700}
            color={Colors.primary}
            style={styles.categoryName}>
            {data.name}
          </VText>
        </Animated.View>
      </Pressable>
    </Animated.View>
  );
};
