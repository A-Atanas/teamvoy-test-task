import {
	Button,
	FlatList,
	Modal,
	TextInput,
	TouchableOpacity,
	View,
	Text,
	KeyboardAvoidingView,
} from "react-native";
import RadioGroup from "react-native-radio-buttons-group";
import React, { useState, useEffect } from "react";
import moment from "moment";
import { ArticleData, MainMenuProps } from "../types/types";
import { mainMenuStyles, headerButtons } from "../styles/styles";
import ArticleCard from "./ArticleCard";
import { useNavigation } from "@react-navigation/native";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faMagnifyingGlass,
	faArrowDownAZ,
} from "@fortawesome/free-solid-svg-icons";
import fetchArticles from "../services/fetchArticles";

const sortOptions = [
	{
		id: "1",
		label: "Relevancy",
		value: "relevancy",
	},
	{
		id: "2",
		label: "Popularity",
		value: "popularity",
	},
	{
		id: "3",
		label: "Publication date",
		value: "publishedAt",
	},
];

const MainMenu = () => {
	const navigation = useNavigation<MainMenuProps["navigation"]>();

	let [articles, setArticles] = useState<ArticleData[]>([]);
	const [searchVisible, setSearchVisible] = useState(false);
	const [sortVisible, setSortVisible] = useState(false);
	const [searchQuery, setSearchQuery] = useState("bitcoin");
	const [sortBy, setSortBy] = useState("1");

	const updateArticles = () => {
		fetchArticles(
			searchQuery,
			sortOptions.find((option) => option.id === sortBy).value
		).then(({ articles }) => setArticles(articles));
	};

	const boundHeader = (
		<View style={headerButtons.buttonsView}>
			<TouchableOpacity
				style={headerButtons.button}
				onPress={() => setSortVisible(true)}
			>
				<FontAwesomeIcon icon={faArrowDownAZ} />
			</TouchableOpacity>
			<TouchableOpacity
				style={headerButtons.button}
				onPress={() => setSearchVisible(true)}
			>
				<FontAwesomeIcon icon={faMagnifyingGlass} />
			</TouchableOpacity>
		</View>
	);

	useEffect(() => {
		updateArticles();

		navigation.setOptions({
			headerRight: () => boundHeader,
		});
	}, []);

	return (
		<View style={mainMenuStyles.container}>
			<FlatList
				data={articles}
				renderItem={({ item }) => <ArticleCard data={item} />}
				keyExtractor={(item) => moment(item.publishedAt).format("x")}
			/>
			<Modal
				animationType="slide"
				visible={searchVisible}
				onRequestClose={() => setSearchVisible(false)}
			>
				<KeyboardAvoidingView style={mainMenuStyles.modal}>
					<Text>What articles are you looking for?</Text>
					<TextInput
						style={mainMenuStyles.modalTextInput}
						onChangeText={setSearchQuery}
						value={searchQuery}
					/>
					<Button
						onPress={() => {
							updateArticles();
							setSearchVisible(false);
						}}
						title="Search"
					/>
				</KeyboardAvoidingView>
			</Modal>
			<Modal
				animationType="slide"
				visible={sortVisible}
				onRequestClose={() => setSortVisible(false)}
			>
				<View style={mainMenuStyles.modal}>
					<Text>How to sort articles?</Text>
					<RadioGroup
						containerStyle={mainMenuStyles.modalRadio}
						radioButtons={sortOptions}
						onPress={setSortBy}
						selectedId={sortBy}
					/>
					<Button
						onPress={() => {
							updateArticles();
							setSortVisible(false);
						}}
						title="Sort"
					/>
				</View>
			</Modal>
		</View>
	);
};

export default MainMenu;
