import { StatusBar } from "react-native";
import { NativeBaseProvider } from "native-base";
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { AuthContext } from "@contexts/AuthContext";

import { Loading } from "@components/Loading";

import { THEME } from "./src/theme";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoader] = useFonts({ Roboto_400Regular });
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContext.Provider
        value={{
          id: "1",
          name: "Almir",
          email: "almirwebdev@gmail.com",
          avatar: "almir.png",
        }}
      >
        {fontsLoader ? <Routes /> : <Loading />}
      </AuthContext.Provider>
    </NativeBaseProvider>
  );
}
