import React, { useEffect, useState } from "react";

import { StyleSheet, View } from "react-native";

import Playlist from "./src/components/Playlist/Playlist.js";

import axios from 'axios';

import url from './src/config/endpoints_config'

import token from './src/config/token'

export default function App() {

  const [userData, setUserData] = useState({});
  const [userPlaylists, setUserPlaylists] = useState({});

  useEffect(() => {
    axios
      .get(`${url.URL_BASE}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(function (response) {
        console.clear();
        console.log(response.data);
        setUserData(response.data);
      })
      .then(
        axios
          .get(`${url.URL_BASE}/users/${userData.id}/playlists`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then(function (response) {
            console.log(response.data);
            setUserPlaylists(response.data);
          })
          .catch(function (error) {
            console.log(error);
          })
      )
      .catch(function (error) {
        console.log(error);
      });
  }, []);


  
  return (
    <View style={styles.container}>
      <Playlist userData={userData} userPlaylists={userPlaylists} />
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
