import React, { useEffect, useState } from "react";

import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  TouchableHighlight,
} from "react-native";

export default Playlists = ({ playlistsData, onSelectPlaylistPress }) => {
  console.log("desde playlists", playlistsData);
  const { name, tracks, id } = playlistsData;

  return (
    <>
      {playlistsData.items.map((track) => (
        <View key={track.id} style={styles.itemPlaylist}>
          <Text>{track.name}</Text>
          <Text>{track.tracks.length}</Text>
          <TouchableHighlight onPress={() => onSelectPlaylistPress(track.id)}>
            <Text>Select</Text>
          </TouchableHighlight>
        </View>
        // <Text>{track.id}</Text>
      ))}
    </>
  );
};

const styles = StyleSheet.create({
  playlist: { width: "100%", flexDirection: "column" },
  bgPlaylist: {
    backgroundColor: "#AFCFD2",
    width: "100%",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    padding: 20,
  },
  bgMoreInfo: {
    backgroundColor: "#EBF3F3",
    width: "100%",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: 15,
    justifyContent: "space-between",
  },
  iconNext: {
    width: 25,
    height: 25,
  },
  headerPlaylist: {
    width: "100%",
    flexDirection: "row",
  },
  mainPlaylist: {
    width: "100%",
    flexDirection: "row",
  },
  imgPlaylist: { paddingRight: 15 },
  titlePlaylist: { fontSize: 22, fontWeight: "bold", color: "white" },
  textPlaylist: {
    flexDirection: "column",
    alignContent: "center",
    justifyContent: "center",
  },
  dataPlaylist: { color: "white", fontSize: 14 },
  itemPlaylist: {
    width: "100%",
    flexDirection: "row",
    paddingVertical: 13,
  },
  columnTitles: {
    width: "100%",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingBottom: 10,
    paddingTop: 20,
  },
  columnSource: { width: "15%" },
  columnTitle: { width: "45%" },
  columnArtist: { width: "25%" },
  columnTime: { width: "15%" },
  albumCover: { width: 25, height: 25 },
  songTitle: { fontSize: 16, fontWeight: "bold", color: "white" },
  artistName: { fontSize: 16, fontWeight: "normal", color: "white" },
  songDuration: { fontSize: 16, fontWeight: "normal", color: "white" },
  seeMore: { color: "#658487", fontWeight: "bold" },
});
