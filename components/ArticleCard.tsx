import { ArticleData, StackNavigatorRoutesAndParams } from "../types/types";
import { StyleSheet, Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

type ArticleScreenProps = NativeStackScreenProps<StackNavigatorRoutesAndParams, "Article">;

const ArticleCard = ({ data }: { data: ArticleData }) => {
	const navigation = useNavigation<ArticleScreenProps["navigation"]>();

	return (
		<TouchableHighlight
			style={articleStyles.articleCard}
			onPress={() => navigation.navigate("Article")}
		>
			<View>
				<Text style={articleStyles.articleTitle}>{data.title}</Text>
				<Text numberOfLines={3}>{data.description}</Text>
			</View>
		</TouchableHighlight>
	);
};

const articleStyles = StyleSheet.create({
	articleCard: {
		borderBottomWidth: 1,
		borderBottomColor: "#aaa",
		padding: 12,
	},
	articleTitle: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 12,
	},
});

export default ArticleCard;
