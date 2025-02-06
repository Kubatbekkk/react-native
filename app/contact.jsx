import { StyleSheet, Text, View, Appearance, SafeAreaView } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Colors } from "@/constants/Colors";
import { Link } from "expo-router";

const explore = () => {
  const colorScheme = Appearance.getColorScheme();
  const theme = colorScheme === "dark" ? Colors.dark : Colors.light;
  const imgColor = colorScheme === "dark" ? "papayawhip" : "#333";
  const styles = createStyles(theme, colorScheme);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Fontisto name="coffeescript" size={250} color={imgColor} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.title}>Coffee Shop</Text>

        <View style={styles.textView}>
          <Text style={styles.text}>
            <Text>555 Coffee Lane</Text>
            {"\n"}
            <Text>Kansas City, KS 55555-1234</Text>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Phone:{"\n"}
            <Link href="tel:5555555555" style={styles.link}>
              555-555-5555
            </Link>
            {"\n"}
            or{" "}
            <Link href="sms:5555555555" style={styles.link}>
              Click Here to Text!
            </Link>
          </Text>
        </View>

        <View style={styles.textView}>
          <Text style={styles.text}>
            Hours:{"\n"}
            <Text>Open 6am to 4pm daily.</Text>
            {"\n"}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default explore;

function createStyles(theme, colorScheme) {
  return StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: theme.background,
    },
    imageContainer: {
      backgroundColor: colorScheme === "dark" ? "#353636" : "#D0D0D0",
      height: 250,
    },
    textContainer: {
      backgroundColor: theme.background,
      padding: 15,
    },
    textView: {
      marginTop: 10,
      marginBottom: 10,
    },
    text: {
      color: theme.text,
      fontSize: 16,
      lineHeight: 24,
    },
    title: {
      fontWeight: "bold",
      fontSize: 24,
      backgroundColor: "rgba(0, 0, 0, 0.4)",
      color: theme.text,
    },
    link: {
      textDecorationLine: "underline",
    },
  });
}
