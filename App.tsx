/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {DevSettings, NativeModules, SafeAreaView} from 'react-native';

import RootNavigation from './src/navigation';

function App(): React.JSX.Element {
  useEffect(() => {
    if (__DEV__) {
      DevSettings.addMenuItem('Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(true);
      });
      DevSettings.addMenuItem('Stop Debugging With debugger', () => {
        NativeModules.DevSettings.setIsDebuggingRemotely(false);
      });
    }
  }, []);
  console.log('Hello devtools!');
  return (
    <SafeAreaView style={{flex: 1}}>
      <RootNavigation/>
    </SafeAreaView>
  );
}

export default App;
