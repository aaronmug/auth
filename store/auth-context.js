import { createContext, useState } from "react";
import { Alert } from "react-native";

export const AuthContext = createContext({
  token: "",
  isAuthenticated: false,
  authenticate: (token) => {},
  logout: () => {},
});

function AuthContentProvider({ children }) {
  const [authToken, setAuthToken] = useState();

  function authenticate(token) {
    setAuthToken(token);
  }

  function logout() {
    Alert.alert("Logout", "Are you sure you want to logout?", [
      { text: "OK", onPress: () => setAuthToken(null) },
    ]);
    // setAuthToken(null);
  }

  const value = {
    token: authToken,
    isAuthenticated: !!authToken, // convert to a boolean
    authenticate: authenticate,
    logout: logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContentProvider;
