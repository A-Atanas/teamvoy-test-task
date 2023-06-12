import { Text } from "react-native";

const ArticleScreen = () => {
    return (
        <View>
            <Text style={articleStyles.articleTitle}>{data.title}</Text>
            <Text numberOfLines={3}>{data.description}</Text>
        </View>
    )
}

export default ArticleScreen;