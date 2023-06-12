import { FlatList, StyleSheet, View } from "react-native";
import { useState, useEffect } from "react";
import moment from "moment";
import { ArticleData, ApiResponse } from "../types/types";
import ArticleCard from "./ArticleCard";

const API_URL =
	"https://newsapi.org/v2/everything?apiKey=840b827d1e1d4dd6b6dcf68025c8cad0&q=bitcoin";

const MainMenu = ({navigation}) => {
	let [articles, setArticles] = useState<ArticleData[]>([]);

	useEffect(() => {
		fetch(API_URL)
			.then((result) => result.json())
			.then((json: ApiResponse) => setArticles(json.articles))
			.catch((error) => console.log(error));
	});

	return (
		<View style={styles.container}>
			<FlatList
				data={articles}
				renderItem={({ item }) => <ArticleCard data={item}/>}
				keyExtractor={(item) => moment(item.publishedAt).format("x")}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default MainMenu;
