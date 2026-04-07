import { StatusBar } from "expo-status-bar";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
    <View> 
     
      <Pressable>
        <View style={styles.container}>
        <Text>My first time working with react native !</Text>
      </View>

      <View style={styles.container}>
        <Text>I will be building a habit tracker app with it !!</Text>
      </View>
      </Pressable>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
