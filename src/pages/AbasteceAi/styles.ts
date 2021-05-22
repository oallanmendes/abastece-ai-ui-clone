import styled from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface CardProps {
  index: number;
  length: number;
}

interface ImageProps {
  index: number;
  length: number;
}

export const ScrollView = styled.ScrollView`
  background-color: #3d9be9;
`;

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 25px;
  margin-top: 25px;
`;

export const Logo = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const BalanceContainer = styled.View`
  margin-left: 25px;
  margin-top: 100px;
`;
export const BalanceDescription = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight: 600;
`;
export const BalanceNumber = styled.Text`
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 20px;
`;

export const PumpUpButton = styled.TouchableOpacity`
  background-color: ${props => props.theme.secondary};
  flex-direction: row;
  padding: 20px;
  justify-content: center;
  border-radius: 20px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${props => props.theme.primary};
`;

export const PumpUpButtonText = styled.Text`
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

export const Story = styled.View`
  background-color: ${props => props.theme.background};
  margin-top: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-left: 25px;
  margin-top: 50px;
  color: ${props => props.theme.primary};
  font-weight: bold;
  margin-bottom: 50px;
`