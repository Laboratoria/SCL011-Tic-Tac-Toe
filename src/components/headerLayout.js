import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Header() {
	return (
		<View style={styles.header}>
			<Text style={styles.title}>KittyCat</Text>
		</View>
	);
}
const styles = StyleSheet.create({
	header: {
		flex: 0.1,
		flexDirection: "column",
		marginTop: 20,
		alignContent: "center",
		alignItems: "center"
	},

	title: {
		fontSize: 50,
		fontWeight: "bold",
		color: "#FF4864",
		marginTop: 0
	}
});
export default Header;
