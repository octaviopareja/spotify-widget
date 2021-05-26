import { authorize, refresh } from "react-native-app-auth";
import client from "../config/client_data";

class AuthenticationHandler {
  constructor() {
    this.spotifyAuthConfig = {
      clientId: client.CLIENT_ID,
      clientSecret: client.CLIENT_SECRET,
      redirectUrl: "com.fittly-dev://oauthredirect",
      scopes: [
        "playlist-read-private",
        "playlist-modify-public",
        "playlist-modify-private",
        "user-library-read",
        "user-library-modify",
        "user-top-read",
      ],
      serviceConfiguration: {
        authorizationEndpoint: "https://accounts.spotify.com/authorize",
        tokenEndpoint: "https://accounts.spotify.com/api/token",
      },
    };
  }

  async onLogin() {
    try {
      console.log(this.spotifyAuthConfig);
      const result = await authorize(this.spotifyAuthConfig);
      alert(JSON.stringify(result));
      return result;
    } catch (error) {
      console.log("error ", error);
    }
  }

  async refreshLogin(refreshToken) {
    const result = await refresh(this.spotifyAuthConfig, {
      refreshToken: refreshToken,
    });
    return result;
  }
}

const authHandler = new AuthenticationHandler();

export default authHandler;
