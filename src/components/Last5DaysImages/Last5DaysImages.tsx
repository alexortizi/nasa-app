import { FC } from "react";
import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { PostImage as PostImageTypes } from "../../types";
import PostImage from "../PostImage";

const LastFiveDaysImages: FC<{ postImages: PostImageTypes[] }> = ({
  postImages,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last 5 Days</Text>
      <ScrollView style={styles.content}>
        {postImages?.map((postImage) => (
          <PostImage key={`post-image-${postImage.title}`} {...postImage} />
        ))}
      </ScrollView>
    </View>
  );
};

export default LastFiveDaysImages;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginVertical: 16,
  },
  title: {
    fontSize: 16,
    color: "#fff",
    marginBottom: 18,
  },
  content: {
    paddingHorizontal: 24,
  },
});
