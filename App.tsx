import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainMenu from "./components/MainMenu";
import ArticleScreen from "./components/ArticleScreen";
import { AppRoutesAndParams } from "./types/types";
import { TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";
import { headerButtons } from "./styles/styles";

const Stack = createNativeStackNavigator<AppRoutesAndParams>();

const App = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					name="Main menu"
					component={MainMenu}
					options={{
						headerRight: () => (
							<View style={headerButtons.buttonsView}>
								<TouchableOpacity>
									<FontAwesomeIcon icon={faArrowDownAZ} />
								</TouchableOpacity>
								<TouchableOpacity>
									<FontAwesomeIcon icon={faMagnifyingGlass} />
								</TouchableOpacity>
							</View>
						),
					}}
				/>
				<Stack.Screen name="Article" component={ArticleScreen} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default App;
