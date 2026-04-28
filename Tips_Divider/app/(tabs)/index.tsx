import { Text, StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text} >Home screen</Text>
      <Link href="/moneyCount" style={styles.button}>
      Count money
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#25292e",
        alignItems: "center",
        justifyContent: "center",
        },
    text: {
        color: "#fff"
        },
    button: {
        fontSize: 20,
        textDecorationLine: "underline",
        color: "#fff",
    },
});