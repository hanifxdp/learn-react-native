import React from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import PositionReactNative from './pages/Position';

const App = () => {
  return (
    <View>
      <ScrollView>
        <SampleComponent />
        <StylingComponent />
        <FlexBox />
        <PositionReactNative />
      </ScrollView>
    </View>
  );
};

export default App;
