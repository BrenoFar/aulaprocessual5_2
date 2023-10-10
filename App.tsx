import React from 'react';
import { TouchableOpacity, View, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StatusBar } from 'expo-status-bar';
import FirstPage from './src/pages/FirstPage';
import SecondPage from './src/pages/SecondPage';
import CustomSidebarMenu from './src/components/CustomSidebarMenu';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

interface StackIconHeaderLeftProps {
  navigation: any;
}

const StackIconHeaderLeft: React.FC<StackIconHeaderLeftProps> = ({ navigation }) => {
  const toggleDrawer = () => {
    navigation.dispatch(DrawerActions.toggleDrawer());
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={require('./src/assets/icon.png')}
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

const firstScreenStack = () => (
  <Stack.Navigator initialRouteName="FirstPage">
    <Stack.Screen
      name="FirstPage"
      component={FirstPage}
      options={{
        title: 'Primeira tela',
        headerLeft: () => <StackIconHeaderLeft navigation={{dispatch: () => {}}} />,
        headerStyle: {
          backgroundColor: '#E37D00',
        },
        headerTintColor: '#FFFFFF',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    />
  </Stack.Navigator>
);

const secondScreenStack = () => (
  <SafeAreaView style={{ flex: 1, backgroundColor: '#FEF3B4' }}>
    <NavigationContainer>
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#730000',
          inactiveTintColor: '#730000',
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="FirstPage"
          options={{
            drawerLabel: 'Primeira tela',
          }}
          component={firstScreenStack}
        />
        <Drawer.Screen
          name="SecondPage"
          options={{
            drawerLabel: 'Segunda tela',
          }}
          component={secondScreenStack}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  </SafeAreaView>
);

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" component={secondScreenStack} />
        </Drawer.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
