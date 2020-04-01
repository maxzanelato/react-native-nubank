import React from "react";
import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";

import { StatusBar, View } from "react-native";

import Routes from "./src/routes";

const App = () => (
  <>
    <StatusBar barStyle="light-content" backgroundColor="#8B10AE" />
    <Routes />
  </>
);

AppRegistry.registerComponent(appName, () => App);

export default App;
