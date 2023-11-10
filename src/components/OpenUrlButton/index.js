import React, {useCallback} from 'react';
import {Alert, Button, Linking} from 'react-native';

const OpenURLButton = ({url, children}) => {
  const handlePress = useCallback(async () => {
    try {
      // Checking if the link is supported for links with a custom URL scheme.
      const supported = await Linking.canOpenURL(url);

      if (supported) {
        // Opening the link with some app; if the URL scheme is "http," the web link should be opened
        // by some browser on the mobile device.
        await Linking.openURL(url);
      } else {
        Alert.alert(`Don't know how to open this URL: ${url}`);
      }
    } catch (error) {
      // Capturing any error that might occur when trying to open the URL.
      Alert.alert(`Error: ${error.message}`);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} />;
};

export default OpenURLButton;
