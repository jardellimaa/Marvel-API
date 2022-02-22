import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const SearchContainer = styled.ImageBackground`
  background-color: #341948;
  height: 100%;
  padding: 15px;
`;

export const ButtonHero = styled.TouchableOpacity`
  background-color: rgba(rgba(52, 25, 72, 1), 0.9);
  color: #fff;
  border-radius: 10px;
  width: 40%;
  height: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonHeroOne = styled.TouchableOpacity`
  background-color: rgba(rgba(52, 25, 72, 1), 0.5);
  color: #fff;
  border-radius: 10px;
  width: 90%;
  height: 300px;
  margin-bottom: 20px;
  margin-left: auto;
  margin-right: auto;
`;

export const ButtonHeroSearch = styled.TouchableOpacity`
  width: 37px;
  height: 37px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  background-color: #fff;
`;

export const ImageHeroCover = styled.Image`
  height: 80%;
  padding: 5%;
  border-radius: 10px;
`;

export const ImageHeroCoverOne = styled.Image`
  height: 80%;
  padding: 5%;
  border-radius: 10px;
`;

export const HeroTextContent = styled.View`
  height: 20%;
  justify-content: center;
  align-items: center;
`;

export const HeroName = styled.Text`
  font-size: 14px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  padding: 10px;
`;

export const SearchInput = styled.TextInput`
  width: 80%;
  height: 40px;
  margin: 10px;
  border-width: 1px;
  border-radius: 10px;
  border-color: #fff;
  padding: 8px;
  color: #fff;
`;

export const SearchInputContainer = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const SearchFlatList = styled.FlatList`
  margin-top: 10px;
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
