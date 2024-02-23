import { View, Text } from 'react-native'
// import 'react-native-gesture-handler';
import StackNaviation from './src/Navigations/StackNaviation'
import { NavigationContainer } from '@react-navigation/native';


const App = () => {
  return (
    <NavigationContainer>
      <StackNaviation />
    </NavigationContainer>
  )
}

export default App