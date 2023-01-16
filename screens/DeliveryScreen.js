import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { XIcon } from 'react-native-heroicons/solid';
import { selectResturant } from '../features/resturantSlice';
import * as Progress from 'react-native-progress';
import MapView, { Marker } from 'react-native-maps';

const DeliveryScreen = () => {
  const navigation = useNavigation();
  const resturant = useSelector(selectResturant);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <XIcon color="white" size={30} />
          </TouchableOpacity>

          <Text className="font-light text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md ">
          <View className="flex-row justify-between">
            <View>
              <Text>Estimated Arrival</Text>
              <Text>45-55 Minutes</Text>
            </View>

            <Image
              source={{ uri: 'https://links.papareact.com/fls' }}
              className="h-20 w-20"
            />

            <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />

            <Text className="mt-3 text-gray-500">
              Your order at {resturant.title} is being prepared
            </Text>
          </View>
        </View>
      </SafeAreaView>

      <MapView
        initialRegion={{
          latitude: resturant.lat,
          longitude: resturant.lng,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
        maptype="mutedStandard"
        className="flex-1 mt-10 z-0"
      >
        <Marker
          coordinate={{ latitude: resturant.lat, longitude: resturant.lng }}
          title={resturant.title}
          description={resturant.short_description}
          identifiers="origin"
          pinColors="#00ccbb"
        />
      </MapView>

      <SafeAreaView>
        <Image
          source={{ uri: 'https://links.papareact.com/wru' }}
          className="h-12 bg-gray-300 p-4 rounded-full ml-5"
        />
        <Text className="text-lg">Sony Sangha</Text>
        <Text className="text-gray-400">Your rider</Text>

        <Text className="text-[#00ccbb] text-lg mr-5 font-bold">Call</Text>
      </SafeAreaView>
    </View>
  );
};

export default DeliveryScreen;
