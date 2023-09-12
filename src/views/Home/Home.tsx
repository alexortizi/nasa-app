import { Image, StyleSheet, Text, View } from "react-native";
import fetchApi from "../../utils/fetch";
import { useEffect, useState } from "react";
import { PostImage } from "../../types";
import { format, sub } from "date-fns";
import TodaysImage from "../../components/TodaysImage";
import Last5DaysImages from "../../components/Last5DaysImages";
import Header from "../../components/Header";
export default function Home() {
  const [todaysImage, setTodaysImage] = useState<PostImage>({});
  const [lastFiveDaysImages, setLastFiveDaysImages] = useState<PostImage[]>([]);
  useEffect(() => {
    const loadTodaysImage = async () => {
      try {
        const todaysImageResponse = await fetchApi();
        setTodaysImage(todaysImageResponse);
      } catch (error) {
        setTodaysImage({});
      }
    };
    const loadLast5DaysImages = async () => {
      try {
        const date = new Date();
        const todaysDate = format(date, "yyyy-MM-dd");
        const fiveDaysAgoDate = format(sub(date, { days: 5 }), "yyyy-MM-dd");
        const todaysImageResponse = await fetchApi();
        const lastFiveDaysImagesResponse = await fetchApi(
          `&start_date=${fiveDaysAgoDate}&end_date=${todaysDate}`
        );
        setLastFiveDaysImages(lastFiveDaysImagesResponse);
      } catch (error) {
        setLastFiveDaysImages([]);
      }
    };
    loadTodaysImage().catch(null);
    loadLast5DaysImages().catch(null);
  }, []);
  return (
    <View style={styles.container}>
            <Header />
      <TodaysImage {...todaysImage} />
      <Last5DaysImages postImages={lastFiveDaysImages} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    backgroundColor: "rgba(7,26,93,255)",
  },
});
