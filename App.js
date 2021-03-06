import 'react-native-gesture-handler';
import React, { Provider } from 'react';
import Navigator from "./Routes/HomeStack";
import { ContextProvider } from "./context";
import { Text } from "react-native";
import SwitchThemeBtn from './components/SwitchThemeBtn';

export default function App() {

  return (
    <ContextProvider>
      <Navigator/>
      <SwitchThemeBtn/>
    </ContextProvider>
  );
}


/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

})
 */