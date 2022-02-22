import styled from 'styled-components/native';

export const ImageCoverHome = styled.ImageBackground`
  height: 100%;
  width: 100%;
  padding: 8%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CardWelcome = styled.View`
  height: auto;
  background-color: rgba(255,255,255,0.9);
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  padding-top: 20px;
  padding-bottom: 10px;
`;

export const HomeText = styled.Text`
  font-size: 18px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #341948;
  font-weight: 700;
`;

export const HomeInfo = styled.Text`
  font-size: 14px;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 4px;
  color: #000;
  font-weight: 400;
  padding: 10px;
`;

export const ButtonHome = styled.TouchableOpacity`
  background-color: #341948;
  height: auto;
  width: 100%;
  padding: 10px;
  color: #fff;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
`;

export const HomeInfoBottom = styled.Text`
  font-size: 16px;
  text-align: center;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: 700;
  padding: 10px;
`;
