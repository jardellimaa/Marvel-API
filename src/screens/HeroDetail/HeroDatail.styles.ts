import { StyleSheet } from 'react-native';
import styled from 'styled-components/native';

export const ComicConteiner = styled.ImageBackground`
  height: 100%;
  background-color: #341948;
  padding: 5%;
`;

export const ComicsCards = styled.View`
  background-color: rgba(52, 25, 72, 0.9);
  border-radius: 10px;
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 160px;
`;

export const ComicsInfos = styled.View`
  justify-content: center;
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

export const ComicCover = styled.Image`
  width: 30%;
  height: 100%;
  border-radius: 10px;
`;

export const ComicsInfoText = styled.Text`
  font-size: 14px;
  margin: 2px;
  color: #fff;
  font-weight: 400;
`;

export const CardInfo = styled.View`
  margin-top: 5%;
  margin-bottom: 5%;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  justify-content: center;
`;

export const HeroInfo = styled.Text`
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 4px;
  color: #341948;
  font-weight: 700;
  padding: 10px;
`;

export const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
});
