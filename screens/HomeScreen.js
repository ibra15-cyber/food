import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  TextInput,
  Image,
} from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  UserIcon,
  ChevronDownIcon,
  SearchIcon,
  AdjustmentIcon,
} from 'react-native-heroicons/outline';
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

function HomeScreen() {
  const navigation = useNavigation(); //useNavigate in reactjs

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">

      {/* header  */}
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        
        <Image
          source={{
            uri: 'https://links.paparect.com/wru',
          }}
          className="h-7 w-7 bg-gray-300 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={20} color="#00ccbb" />
      </View>

      {/**search box */}
      <View className="flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <SearchIcon color="gray" size={20} />
          <TextInput
            placeholder="Resturant and cuissines"
            KeyboardType="default"
          />
        </View>
        <AdjustmentIcon color="#00ccbb" />
      </View>

      {/***body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        {/* categories */}
        <Categories />

        {/* featured rows */}
        <FeaturedRow
          id="123"
          title="Featured"
          description="paid placement from our partners"
        />
        <FeaturedRow
          id="124"
          title="Featured"
          description="paid placement from our partners"
        />
        <FeaturedRow
          id="125"
          title="Featured"
          description="paid placement from our partners"
        />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
