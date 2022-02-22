import * as React from 'react';
import {
  CardWelcome,
  HomeText,
  HomeInfo,
  ImageCoverHome,
  ButtonHome,
  HomeInfoBottom,
} from './Home.styles';
import HomeStrings from './Home.strings';

const imageCover = require('../../../assets/images/covermarvel.png');

export default function HomeScreen({ navigation }: any) {
  return (
    <ImageCoverHome source={imageCover}>
      <CardWelcome>
        <HomeText>{HomeStrings.welcome}</HomeText>
        <HomeText>{HomeStrings.heros}</HomeText>
        <HomeInfo>{HomeStrings.textInfo}</HomeInfo>
      </CardWelcome>
      <ButtonHome onPress={() => navigation.navigate('Hero')}>
        <HomeInfoBottom>{HomeStrings.btnHeros}</HomeInfoBottom>
      </ButtonHome>
    </ImageCoverHome>
  );
}
