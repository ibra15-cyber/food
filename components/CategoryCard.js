import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';

// const CategoryCard = (props) => {
//     return (
//       <View>
//         <Text>{props.title}</Text>
//       </View>
//     )
//   }
const CategoryCard = ({ imgUrl, title }) => {
  return (
    <TouchableOpacity>
      <Image source={{ uri: imgUrl }} className="h-20 w-20 rounded font-bold" />
      <Text className="absolute bottom-1 left-1 text-white font-bold">
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryCard;
