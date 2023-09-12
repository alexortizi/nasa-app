import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParams } from "../../types";
import Header from "../../components/Header";
const Detail = () => {
  const {
    params: { title, url, explanation, date },
  } = useRoute<NativeStackScreenProps<RootStackParams, "Detail">["route"]>();
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Image source={{ uri: url }} style={styles.image} />
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.date}>{date}</Text>
        <ScrollView style={styles.explanationContainer}>
          <Text style={styles.subtitle}>{explanation}</Text>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
  content: {
    backgroundColor: "#2c449d",
    borderRadius: 32,
    marginVertical: 24,
    padding: 16,
  },
  image: {
    width: "100%",
    height: "30%",
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    color: "#fff",
    marginBottom: 16,
    fontWeight: "bold",
  },
  date: {
    fontSize: 16,
    color: "#fff",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "justify",
  },
  explanationContainer: {
    marginVertical: 16,
  },
});
export default Detail;
