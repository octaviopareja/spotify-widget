import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import url from "../../config/endpoints_config";
import token from "../../config/token";
import Playlists from "../Playlists/Playlists";
import Tracklist from "../Tracklist/Tracklist";
import { View, Text } from "react-native";

const Main = () => {
  const [userData, setUserData] = useState({});
  const [playlistsData, setPlaylistsData] = useState({});
  const [selectedPlaylistData, setSelectedPlaylistData] = useState({});
  const [workoutPlaylistIsSelected, setWorkoutPlaylistIsSelected] =
    useState(false);
  const [loading, setLoading] = useState(true);
  const [playlistsLoaded, setPlaylistsLoaded] = useState(false);
  const [userDataLoaded, setUserDataLoaded] = useState(false);

  const getUserData = () => {
    axios
      .get(`${url.URL_BASE}/me`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.clear();
        setUserData(response.data);
        console.log(response.data);
        setLoading(false);
        setUserDataLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserPlaylists = (id) => {
    axios
      .get(`${url.URL_BASE}/users/${id}/playlists`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setPlaylistsData(response.data);
        console.log("checking", response.data);
        setPlaylistsLoaded(true);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const onSelectPlaylistPress = (id) => {
    console.log("hiciste click en ", id);
    setLoading(true);
    setWorkoutPlaylistIsSelected(true);
    axios
      .get(`${url.URL_BASE}/playlists/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.clear();
        setSelectedPlaylistData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log("ERROR", error);
      });
    // .finally(() => {
    // });
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    console.log("beforePlaylists", userData);
    if (userDataLoaded) {
      getUserPlaylists(userData.id);
    }
  }, [userDataLoaded]);

  return (
    <View>
      {loading ? (
        <Text>Loading</Text>
      ) : (
        <>
          {!workoutPlaylistIsSelected ? (
            <>
              {playlistsLoaded ? (
                <>
                  {playlistsData ? (
                    <Playlists
                      onSelectPlaylistPress={onSelectPlaylistPress}
                      playlistsData={playlistsData}
                    ></Playlists>
                  ) : (
                    <Text>Aun no hay playlists</Text>
                  )}
                </>
              ) : (
                <Text>Loading Playlists</Text>
              )}
            </>
          ) : (
            <>
              {selectedPlaylistData !== {} ? (
                <Tracklist
                  selectedPlaylistData={selectedPlaylistData}
                ></Tracklist>
              ) : (
                <Text>Loading Tracklist</Text>
              )}
            </>
          )}
        </>
      )}
    </View>
  );
};

export default Main;
