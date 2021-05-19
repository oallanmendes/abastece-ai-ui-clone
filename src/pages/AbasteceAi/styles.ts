import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: #000;
`;

export const Button = styled.TouchableOpacity`
  background-color: #3d9be9;
  padding: 20px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 30px;
`;