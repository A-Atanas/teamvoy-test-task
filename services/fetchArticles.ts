import { ApiResponse } from "../types/types";

const API_URL =
	"https://newsapi.org/v2/everything?apiKey=1a80f1f835df42febfdc54d7a9e54505";

const fetchArticles = async (searchQuery: string, sortBy: string): Promise<ApiResponse> => {
    const result = await fetch(`${API_URL}&q=${searchQuery}&sortBy=${sortBy}`)
			.then((result) => result.json())
			.then(json => json);

    return result;
}

export default fetchArticles;