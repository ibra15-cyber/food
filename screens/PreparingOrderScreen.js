import { View, Text, SafeAreaView } from 'react-native';
import React, { useEffect } from 'react';
import * as Animatable from 'react-native-animatable';

const PreparingOrderScreen = () => {
  const navigation = useNavigation();

  //switch screen after 4 seconds
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Delivery');
    }, 4000);
  }, []);

  return (
    <SafeAreaView className="bg-[#00ccbb] flex-1 justify-center items-center">
      <Animatable.Image
        source={require('../assets/adaptive-icon.png')}
        aniamtion="sliceUp"
        iterationCount={1}
        className="h-96 w-96"
      >
        Waiting for Resturant to accept your order!
        <ProgressEvent.Circle size={60} indeterminate={true} color="white" />
      </Animatable.Image>
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
