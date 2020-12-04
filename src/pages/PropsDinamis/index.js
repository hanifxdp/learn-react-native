import React from 'react';
import {Image, ScrollView, StyleSheet, Text, View} from 'react-native';

const Story = (props) => {
  return (
    <View style={{alignItems: 'center', marginRight: 20}}>
      <Image
        source={{
          uri: props.gambar,
        }}
        style={{width: 70, height: 70, borderRadius: 70 / 2}}
      />
      <Text style={{maxWidth: 50, textAlign: 'center'}}>{props.judul}</Text>
    </View>
  );
};

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component Dinamis dengan Props</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={{flexDirection: 'row'}}>
          <Story
            judul="youtube channel"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.2885-15/e35/c0.199.1080.1080a/s150x150/117170731_348282919898044_7797035319221662338_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=104&_nc_ohc=vvhLdxy7wvgAX_Xrys4&tp=1&oh=208bb36700206c6f9f77bf89f136ea66&oe=5FCC49D3"
          />
          <Story
            judul="Kelas online"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/60409652_322941411705992_1192251249462188862_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=JkXYz0Vo8bgAX_QMvcV&tp=1&oh=3790bde1f534933df191db4e20b0af44&oe=5FCBECE3"
          />
          <Story
            judul="Koding seru"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/54513726_314552725901700_5258194188975777802_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=100&_nc_ohc=O52Vv3YSPA0AX8gFye6&tp=1&oh=b8fbc7900b87db42d1637f0e67b7dbe0&oe=5FCC6147"
          />
          <Story
            judul="Food"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/52006380_2142878372436932_2939716574661060127_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=rXr788kuQDYAX84RKNN&tp=1&oh=2fc64b348ee1e2116a0af40b95265c48&oe=5FCC503C"
          />
          <Story
            judul="Cool"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/51683100_771068846605142_4940129680131709094_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=ADyJSkslxlEAX9mu8GM&tp=1&oh=c4b31c447d81926a81dd4e7d56a5eb0f&oe=5FCC3A51"
          />
          <Story
            judul="Off"
            gambar="https://instagram.fbdo9-1.fna.fbcdn.net/v/t51.12442-15/e35/c0.420.1080.1080a/s150x150/50061151_536782443508592_7356940132556602853_n.jpg?_nc_ht=instagram.fbdo9-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=TuGkZYU8RS0AX-W5Vcf&tp=1&oh=94ee5ccbcac592192c8061923881b09b&oe=5FCBF8DC"
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default PropsDinamis;

const styles = StyleSheet.create({});
