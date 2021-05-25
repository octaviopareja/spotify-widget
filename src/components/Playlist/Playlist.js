import React from "react";

import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const spotify = require("../../../assets/spotify.jpg");

const info = [
  {
    id: "1",
    title: "First Item",
    artist: "Bellah",
    time: "2:55",
  },
  {
    id: "2",
    title: "Second Item",
    artist: "Bellah",
    time: "2:55",
  },
  {
    id: "3",
    title: "Third Item",
    artist: "Bellah",
    time: "2:55",
  },
  {
    id: "4",
    title: "Third Item",
    artist: "Bellah",
    time: "2:55",
  },
];

const Item = ({ source, title, artist, time }) => (
  <View style={styles.itemPlaylist}>
    <View style={styles.columnSource}>
      <Image
        source={require("../../../assets/albumImage.jpg")}
        style={styles.albumCover}
      />
    </View>
    <View style={styles.columnTitle}>
      <Text style={styles.songTitle}>{title}</Text>
    </View>
    <View style={styles.columnArtist}>
      <Text style={styles.artistName}>{artist}</Text>
    </View>
    <View style={styles.columnTime}>
      <Text style={styles.songDuration}>{time}</Text>
    </View>
  </View>
);

const renderItem = ({ item }) => (
  <Item title={item.title} artist={item.artist} time={item.time} />
);

export default function Playlist() {
  return (
    <View style={styles.playlist}>
      <View style={styles.bgPlaylist}>
        <View style={styles.headerPlaylist}>
          <View style={styles.imgPlaylist}>
            <Image source={spotify} />
          </View>
          <View style={styles.textPlaylist}>
            <Text style={styles.titlePlaylist}>Workout Hits</Text>
            <View style={styles.textPlaylist}>
              <Text style={styles.dataPlaylist}>25 Songs - 1h 21 Minutes</Text>
            </View>
          </View>
        </View>
        <View style={styles.columnTitles}>
          <View style={styles.columnSource}></View>
          <View style={styles.columnTitle}>
            <Text style={styles.songTitle}>TITLE</Text>
          </View>
          <View style={styles.columnArtist}>
            <Text style={styles.artistName}>ARTIST</Text>
          </View>
          <View style={styles.columnTime}>
            <Text style={styles.songDuration}>TIME</Text>
          </View>
        </View>
        <View style={styles.mainPlaylist}>
          <FlatList
            data={info}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>

      <View style={styles.bgMoreInfo}>
        <Text style={styles.seeMore}>See More</Text>
        <Image
          style={styles.iconNext}
          source={require("../../../assets/arrowNext.jpg")}
        />
      </View>
    </View>
  );
}

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
