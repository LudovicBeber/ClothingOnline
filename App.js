import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ClothesListScreen from './screens/clothes/ClothesListScreen';
import ClothesDetailsScreen from './screens/clothes/ClothesDetailsScreen';
import ClothesFormScreen from './screens/clothes/ClothesFormScreen';

export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name='ClothesList'
          component={ClothesListScreen}
        />

        <Stack.Screen 
          name='ClothesDetails'
          component={ClothesDetailsScreen}
        />

        <Stack.Screen 
          name='ClothesForm'
          component={ClothesFormScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
