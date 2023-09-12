import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View, Platform } from "react-native";
import Routes from "./src/routes";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          flex: 1,
          paddingHorizontal: 15,
          paddingTop: Platform.OS === "android" && 30,
        }}
      >
        <Routes />
      </View>
      <StatusBar style="light"></StatusBar>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
