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
    <View style={styles.playlist}>
      <View style={styles.bgPlaylist}>
        {playlistsData.items.map((track) => (
          <View style={styles.mainPlaylist} key={track.id}>
            <TouchableHighlight
              activeOpacity={1}
              backgroundColor="#FFF"
              underlayColor="#AFCFC9"
              onPress={() => onSelectPlaylistPress(track.id)}
              style={styles.btnPlaylist}
            >
              <>
                <View style={styles.imgPlaylist}>
                  <Image
                    style={{
                      height: 25,
                      width: 25,
                      marginRight: 10,
                      borderRadius: 3,
                    }}
                    source={{
                      uri: track.images[0].url,
                    }}
                  />
                </View>
                <View>
                  <Text styles={styles.titlePlaylist}>{track.name}</Text>
                </View>
              </>
            </TouchableHighlight>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  playlist: {
    width: "100%",
    flexDirection: "column",
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    // height: "50%",
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
    //
  },
  bgPlaylist: {
    backgroundColor: "#AFCFD2",
    width: "100%",
    borderRadius: 8,
    padding: 20,
    flexDirection: "column",
  },
  headerPlaylist: {
    width: "100%",
    flexDirection: "row",
  },
  mainPlaylist: {
    width: "100%",
    flexDirection: "row",
  },

  titlePlaylist: { fontSize: 22, fontWeight: "bold", color: "#FFF" },

  btnPlaylist: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFF",
    width: "100%",
    flexDirection: "row",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
    paddingVertical: 10,
  },
});
