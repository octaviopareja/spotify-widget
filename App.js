import React from "react";

import { StyleSheet, View } from "react-native";

import Playlist from "./src/components/Playlist/Playlist.js";

export default function App() {
  return (
    <View style={styles.container}>
      <Playlist />
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
