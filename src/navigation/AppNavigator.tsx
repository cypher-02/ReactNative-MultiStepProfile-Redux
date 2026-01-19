import { createNativeStackNavigator } from '@react-navigation/native-stack';
import type { RootStackParamList } from './types';

import HomeScreen from '../screens/HomeScreen';
import StepOne from '../screens/StepOne';
import StepTwo from '../screens/StepTwo';
import SummaryScreen from '../screens/SummaryScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="StepOne" component={StepOne} />
      <Stack.Screen name="StepTwo" component={StepTwo} />
      <Stack.Screen name="Summary" component={SummaryScreen} />
    </Stack.Navigator>
  );
}
