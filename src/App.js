import React from 'react';
import {View, ScrollView} from 'react-native';
import FlexBox from './pages/FlexBox';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import Position from './pages/Position';
import PropsDinamis from './pages/PropsDinamis';

const App = () => {
  // const [isShow, SetIsShow] = useState(true);
  // useEffect(() => {
  //   setTimeour(() => {
  //     SetIsShow(false);
  //   }, 6000);
  // }, []);

  return (
    <View>
      <ScrollView>
        {/* <SampleComponent />
        <StylingComponent /> */}
        {/* <FlexBox /> */}
        {/* <Position /> */}
        <PropsDinamis />
      </ScrollView>
    </View>
  );
};

export default App;
