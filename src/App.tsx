import React from 'react';
import {Button, Text, View} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackScreenProps} from '@react-navigation/native-stack';
import HomePage from './page/Home';
import HelloWorldPage from './page/t/HelloWorld';
import CatCafePage from './page/t/CatCafe';
import ProfilePage from './page/Profile';

const styles = {
  container: {
    flex: 1,
    //paddingTop: 22,
    //paddingBottom: 22,
    backgroundColor: 'honeydew',
  },
  sectionTitle: {
    padding: 1,
    fontSize: 14,
    color: 'snow',
    backgroundColor: 'purple',
  },
};

type StackScreenParamList = {
  Home: undefined;
  HelloWorld: undefined;
  CatCafe: undefined;
  Profile: { name: string };
};

const ScreenStack = createNativeStackNavigator<StackScreenParamList>();

type HomeScreenProps = NativeStackScreenProps<StackScreenParamList, "Home">;
const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>section: Home</Text>
      <HomePage />
      <Text style={styles.sectionTitle}>section: test</Text>
      <Button
        title="'Hello World' page"
        onPress={() => props.navigation.navigate('HelloWorld')}
      />
      <Button
        title="'Cat Cafe' page"
        onPress={() => props.navigation.navigate('CatCafe')}
      />
      <Text style={styles.sectionTitle}>section: Profile</Text>
      <Button
        title="Gwen's profile page"
        onPress={() => props.navigation.navigate('Profile', { name: 'Gwen' })}
      />
    </View>
  );
};

const HelloWorldScreen = () => {
  return <HelloWorldPage />
};

const CatCafeScreen = () => {
  return <CatCafePage />
};

type ProfileScreenProps = NativeStackScreenProps<StackScreenParamList, "Profile">;
const ProfileScreen: React.FC<ProfileScreenProps> = (props) => {
  return <ProfilePage name={props.route.params.name} />;
};

const App = () => {
  return (
    <NavigationContainer>
      <ScreenStack.Navigator>
        <ScreenStack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Welcome'}}
        />
        <ScreenStack.Screen
          name="HelloWorld"
          component={HelloWorldScreen}
          options={{title: 'Hello World'}}
        />
        <ScreenStack.Screen
          name="CatCafe"
          component={CatCafeScreen}
          options={{title: 'Cat Cafe'}}
        />
        <ScreenStack.Screen
          name="Profile"
          component={ProfileScreen}
        />
      </ScreenStack.Navigator>
    </NavigationContainer>
  );
}

export default App;

