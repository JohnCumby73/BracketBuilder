import * as React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';

// Create a Stack Navigator
const Stack = createNativeStackNavigator();


function LoginScreen({ navigation }) { // Add navigation prop
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Bracket Master</Text>
      </View>
      <View style={styles.buttonContainer} id="buttonContainer">
        <Pressable style={styles.pressable}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>
        <Pressable style={styles.pressable}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Sign In With Google</Text>
          </Pressable>
        <Pressable style={styles.pressable}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Continue As Guest</Text>
        </Pressable>
        <Pressable style={styles.pressable}
          onPress={() => {}}>
          <Text style={styles.buttonText}>Create An Account</Text>
          </Pressable>
      </View>
    </View>
  );
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 50,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  buttonsWithPadding: {
    padding: 20,
  },
  space: {
    height: 20,
  },
  title: {
    fontSize: 40
  },
  biggerButton: {
    fontSize: 20
  },
  pressable: {
    backgroundColor: 'red',
    margin: 20,
  },
});
