import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={'Home'}/>
        </Stack.Navigator>
    </NavigationContainer>
}
export default App;