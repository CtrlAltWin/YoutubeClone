import React from "react";
import Head from "./components/Head";
import { Provider } from "react-redux";
import store from "./utils/store";
import Body from "./components/Body";

const App = () => {
  return (
    <Provider store={store}>
      <Head />
      <Body />
    </Provider>
  );
};

export default App;
