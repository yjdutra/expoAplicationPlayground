import React from "react";
import { Button, Linking } from "react-native";

export default function OpenTargetApp() {
  const openApp = () => {
    // Use o esquema personalizado definido na aplicação React Native
    const customScheme = "controltabletsmartek";

    Linking.openURL(`${customScheme}://`);
  };

  return <Button title="Open Control tablet smartek diretly" onPress={openApp} />;
}

// Estilos
const styles = {
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
