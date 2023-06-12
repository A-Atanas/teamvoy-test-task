import { StyleSheet } from "react-native";

export const headerButtons = StyleSheet.create({
    buttonsView: {
        marginRight: 10,
        flexDirection: "row",
        rowGap: 10
    },
    button: {
        marginRight: 10,
        fontSize: 18
    }
})

export const articleStyles = StyleSheet.create({
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

export const articlePage = StyleSheet.create({
	page: {
		borderBottomWidth: 1,
		borderBottomColor: "#aaa",
		padding: 12,
	},
	title: {
		fontSize: 16,
		fontWeight: "bold",
		marginBottom: 12,
	},
	sourceLink: {
		color: "blue",
	},
	generalInfoAndImage: {
		marginBottom: 16,
	},
	image: {
		height: 200,
		width: "100%",
        marginBottom: 12
	}
});

export const mainMenuStyles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	modal: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		margin: 20,
	},
	modalTextInput: {
		width: "50%",
		borderBottomColor: "#ccc",
		borderBottomWidth: 1,
		marginVertical: 10
	},
    modalRadio: {
        alignItems: "flex-start"
    }
});