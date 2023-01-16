import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useEffect, useLayoutEffect } from 'react';
import { useRoute } from '@react-navigation/native';
import {
  ArrowLeftIcon,
  ChevronDownIcon,
  locationMarkerIcon,
  StartIcon,
} from 'react-native-heroicons/outline';
import DishRow from '../components/DishRow';
import { setResturant } from '../features/resturantSlice';

const ResturantScreen = () => {
  // destructuring to useRoute to get params and then destructure params too
  const {
    params: {
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lng,
      lat,
    },
  } = useRoute();
  const dispatch = useDispatch();
  //hide header
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  useEffect(() => {
    setResturant({
      id,
      title,
      imgUrl,
      rating,
      genre,
      address,
      short_description,
      dishes,
      lng,
      lat,
    });
  }, []);

  return (
    <>
      <ScrollView>
        <View>
          <Image
            source={{ uri: urlFor(imgUrl).url() }}
            className="w-full h-50 bg-gray-300 p-4"
          />

          <TouchableOpacity
            className="absolute top-14 left-5 p-2 bg-gray-100 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon size={20} color="#00ccbbb" />
          </TouchableOpacity>
        </View>

        <View className="bg-white">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>

            <View className="flex-row space-x-2 my-1">
              <StartIcon color="green" opacity={0.5} size={22} />

              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">{rating}</Text>. {genre}
              </Text>
            </View>

            <View className="flex-row space-x-2 my-1">
              <LocationMarkerIcon color="gray" opacity={0.4} size={22} />

              <Text className="text-xs text-gray-500">
                <Text className="text-gray-500">Nearby . {address}</Text>
              </Text>
            </View>

            <Text className="text-gray-500 mt-2 pb-4">{short_description}</Text>

            <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
              <QuestionMarkCircleIcon color="gray" opacity={20} />
              <Text className="pl-2 flex-1 text-md font-bold">
                Have a food allergy
              </Text>
              <ChevronDownIcon color="#00ccbb" />
            </TouchableOpacity>
          </View>

          <View className="pb-36">
            <Text className="px-4 pt-6 mb-3 font-bold text-xl"> Menu Item</Text>
            {/* dish rows */}
            {dishes.map((dish) => (
              <DishRow
                key={dish._id}
                id={dish._id}
                name={dish.name}
                description={dish.short_description}
                price={dish.price}
                image={dish.image}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ResturantScreen;
