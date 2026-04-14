import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <>
    <View style={{flex:1}}> 
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <StatusBar style="auto" />
      </View>

      <View style={styles.container}>
        <Text>My first time working with react native !</Text>
      </View>

      <View style={styles.container}>
        <Text>I will be building a habit tracker app with it !!</Text>
      </View>
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
