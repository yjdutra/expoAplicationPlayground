import React from "react";
import { View, Text, Button } from "react-native";
import { Linking } from "expo";

export default function OpenTargetApp() {
  const openApp = () => {
    // Use o esquema personalizado definido na aplicação React Native
    const customScheme = "xxx";

    Linking.openURL(`${customScheme}://`);
  };

  return (
    <View style={styles.container}>
      <Button
        title="Open Control tablet smartek"
        onPress={openApp}
      />
    </View>
  );
}

// Estilos
const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
};
