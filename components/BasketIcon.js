import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { selectBasketItems, selectBasketTotal } from '../features/basketSlice';
import { useNavigation } from '@react-navigation/native';
import Currency from 'react-currency-formatter';
import { useSelector } from 'react-redux';

const BasketIcon = () => {
  const items = useSelector(selectBasketItems);
  const navigation = useNavigation();
  const basketTotal = useSelector(selectBasketItems);

  if (items.length == 0) return null;

  return (
    <View className="absolute bottom-10 w-full z-50">
      <TouchableOpacity
        className="bg-[#00ccbb] mx-5 p-4 rounded-lg flex-row items-center space-x-1"
        onPress={navigation.navigate('Basket')}
      >
        <Text>{items.length}</Text>
        <Text className="flex-1 text-white font-extrabold">View Basket</Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={basketTotal} currency="GBP" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BasketIcon;
