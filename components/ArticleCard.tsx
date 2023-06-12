import { ArticleData, ArticleScreenProps } from "../types/types";
import { articleStyles } from "../styles/styles";
import { Text, TouchableHighlight, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ArticleCard = ({ data }: { data: ArticleData }) => {
	const navigation = useNavigation<ArticleScreenProps["navigation"]>();

	return (
		<TouchableHighlight
			style={articleStyles.articleCard}
			onPress={() => navigation.navigate("Article", {data})}
		>
			<View>
				<Text style={articleStyles.articleTitle}>{data.title}</Text>
				<Text numberOfLines={3}>{data.description}</Text>
			</View>
		</TouchableHighlight>
	);
};

export default ArticleCard;
