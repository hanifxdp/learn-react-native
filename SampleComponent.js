import React from 'react';
import {Image, Text, View, TextInput} from 'react-native';

const SampleComponent = () => {
return (
    <View>
    <View style={{width: 80, height: 80, backgroundColor: '#0abde3'}} />
    <Text>Asyu</Text>
    <Dew />
    <Text>Kuda</Text>
    <Text>Liar</Text>
    <Photo />
    <TextInput style={{borderWidth: 1}} />
    </View>
);
};

const Dew = () => {
return <Text>dewmeister</Text>;
};

const Photo = () => {
return (
    <Image
    source={{uri: 'https://placeimg.com/100/100/tech'}}
    style={{width: 100, height: 100}}
    />
);
};

export default SampleComponent;
