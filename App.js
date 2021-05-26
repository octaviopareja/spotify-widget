import React from "react";

import { StyleSheet, View } from "react-native";
import Login from "./src/components/Login/Login";
import Main from "./src/components/Main/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
      {/* <Login /> */}
    </View>
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
