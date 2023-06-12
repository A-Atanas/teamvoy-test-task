import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type ArticleData = {
	source: {
		id: string;
		name: string;
	};
	author: string;
	title: string;
	description: string;
	url: string;
	urlToImage: string;
	publishedAt: string;
	content: string;
};

export type ApiResponse = {
	status: string;
	totalResults: number;
	articles: ArticleData[];
} & Response;

export type AppRoutesAndParams = {
	"Main menu": undefined;
	Article: { data: ArticleData };
};

export type ArticleScreenProps = NativeStackScreenProps<
	AppRoutesAndParams,
	"Article"
>;
export type MainMenuProps = NativeStackScreenProps<
	AppRoutesAndParams,
	"Main menu"
>;
