import { View, Text, ScrollView } from 'react-native';
import React from 'react';
import ResturantCard from './ResturantCard';
import { ArrowRightIcon } from 'react-native-heroicons/outline';

const FeaturedRow = ({ id, title, description }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        {/* stationary header  */}
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />

        <Text className="text-xs text-gray-500 px-4">{description}</Text>

        {/* scrolled items or resturant cards */}
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
          className="pt-4"
        >
          <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="yo! sushi"
            genre="japanese"
            address="123 main st"
            short_description="this is a test description"
            dishes={[]}
            lng={20}
            lat={0}
          />
          <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="yo! sushi"
            genre="japanese"
            address="123 main st"
            short_description="this is a test description"
            dishes={[]}
            lng={20}
            lat={0}
          />
          <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="yo! sushi"
            genre="japanese"
            address="123 main st"
            short_description="this is a test description"
            dishes={[]}
            lng={20}
            lat={0}
          />
          <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="yo! sushi"
            genre="japanese"
            address="123 main st"
            short_description="this is a test description"
            dishes={[]}
            lng={20}
            lat={0}
          />
          <ResturantCard
            id={123}
            imgUrl="https://links.papareact.com/gn7"
            title="yo! sushi"
            genre="japanese"
            address="123 main st"
            short_description="this is a test description"
            dishes={[]}
            lng={20}
            lat={0}
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default FeaturedRow;
