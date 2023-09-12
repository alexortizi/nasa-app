import { FC } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PostImage, RootStackParams } from "../../types";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

type PostImageNavigationProps = NativeStackNavigationProp<
  RootStackParams,
  "Detail"
>;
const TodaysImage: FC<PostImage> = ({ date, title, url, explanation }) => {
  const { navigate } = useNavigation<PostImageNavigationProps>();
  const handleViewPress = () => {
    navigate("Detail", { title, date, url, explanation });
  };
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: url }} style={styles.image} />
      </View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{date}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleViewPress}>
          <Text style={styles.subtitle}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TodaysImage;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2c449d",
    marginVertical: 16,
    borderRadius: 32,
    marginHorizontal: 24,
    padding: 16,
  },
  imageContainer: {
    borderWidth: 2,
    borderRadius: 32,
  },
  image: {
    width: "100%",
    height: 190,
    borderWidth: 2,
    borderColor: "#fff",
    borderRadius: 32,
  },
  title: {
    fontSize: 20,
    color: "#fff",
    marginVertical: 12,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
  },
  buttonContainer: {
    alignItems: "flex-end",
  },
});
