import React from "react";
import Main from "./main";
import { AppProvider } from "./context";
const Index = () => {
  return (
    <AppProvider>
      <Main />
    </AppProvider>
  );
};

export default Index;
