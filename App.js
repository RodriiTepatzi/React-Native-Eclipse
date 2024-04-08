import { useRef, useEffect } from 'react';
import { StyleSheet, Text, View, Animated, Pressable, SafeAreaView } from 'react-native';

export default function App() {
  const moonAnimation = useRef(new Animated.Value(0)).current;
  const backgroundColorAnimation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();

    Animated.timing(backgroundColorAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }, [moonAnimation, backgroundColorAnimation]);

  const moonLeft = moonAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['-45%', '20%'],
  });

  const backgroundColor = backgroundColorAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: ['#fff', '#fff'],
  });

  var resetAnimation = () => {
    moonAnimation.setValue(0);
    backgroundColorAnimation.setValue(0);

    Animated.timing(moonAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();

    Animated.timing(backgroundColorAnimation, {
      toValue: 1,
      duration: 10000,
      useNativeDriver: false,
    }).start();
  }

  return (
    <SafeAreaView style={styles.container}>
    <Animated.View style={{ backgroundColor }}/>
      <Text>Eclipse 2024 🌒</Text>
      <Pressable style={styles.button} onPress={resetAnimation}>
        <Text style={styles.text}>Ver animación</Text>
      </Pressable>
      <View style={styles.container}>
        <View style={{
          position: 'absolute',
          top: 50,
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#FCF24C',
        }} />
        <Animated.View style={{
          position: 'absolute',
          left: moonLeft,
          top: 50,
          width: 100,
          height: 100,
          borderRadius: 50,
          backgroundColor: '#C2C1B4',
        }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },  
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
