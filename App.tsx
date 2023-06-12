import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MainMenu from './components/MainMenu';
import ArticleScreen from './components/ArticleScreen';
import { StackNavigatorRoutes } from './types/types';

const Stack = createNativeStackNavigator<StackNavigatorRoutes>();

const App = () => {

	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen 
					name="Main menu"
					component={MainMenu}
				/>
				<Stack.Screen 
					name="Article"
					component={ArticleScreen}
				/>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
