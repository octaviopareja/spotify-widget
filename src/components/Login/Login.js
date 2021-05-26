import React, { useEffect } from "react";
import * as WebBrowser from "expo-web-browser";
import { makeRedirectUri, useAuthRequest } from "expo-auth-session";
import { View, Button } from "react-native";
import client_data from "../../config/client_data";

WebBrowser.maybeCompleteAuthSession();

const discovery = {
  authorizationEndpoint: "https://accounts.spotify.com/authorize",
  tokenEndpoint: "https://accounts.spotify.com/api/token",
};

export default Login = () => {
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: client_data.CLIENT_ID,
      clientSecret: client.CLIENT_SECRET,
      scopes: [
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private",
        "user-library-read",
        "user-library-modify",
        "user-top-read",
      ],
      // In order to follow the "Authorization Code Flow" to fetch token after authorizationEndpoint
      // this must be set to false
      usePKCE: false,
      redirectUri: "exp://localhost:19000/",
    },
    discovery
  );

  useEffect(() => {
    if (response?.type === "success") {
      const { code } = response.params;
    }
  }, [response]);

  return (
    <View>
      <Button disabled={!request} title="Login" onPress={() => promptAsync()} />
    </View>
  );
};
