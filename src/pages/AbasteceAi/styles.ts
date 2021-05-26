import styled, {css} from 'styled-components/native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

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
  padding: 10px;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  margin-left: 25px;
  margin-right: 25px;
  margin-top: 20px;
`;

export const Icon = styled(MaterialIcons)`
  margin-right: 10px;
`;

export const PumpUpButtonText = styled.Text`
  color: ${props => props.theme.primary};
  font-weight: bold;
`;

export const LastSupplies = styled.View`
  background-color: ${props => props.theme.background};
  margin-top: 20px;
  padding-right: 20px;
  padding-left: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  flex: 1;
`;

export const Title = styled.Text`
  font-size: 24px;
  margin-top: 50px;
  color: ${props => props.theme.primary};
  font-weight: bold;
  margin-bottom: 50px;
`

export const SupplieCard = styled.View`
  flex-direction: row;
  align-items: flex-start;
  margin-bottom: 50px;
`;

export const IconPlacer = styled.View`
  background-color: ${props => props.theme.primary};
  align-items: center;
  padding: 8px;
  margin-right: 10px;
  border-radius: 100px;
`;

export const IconSupplie = styled(MaterialIcons)`
  color: #fff;
`;

export const SupplieCardCategory = styled.Text``;
export const SupplieCardDescription = styled.Text`
  font-weight: bold;
`;
export const SupplieCardPrice = styled.Text`
  font-weight: bold;
`;
export const SupplieCardDate = styled.Text`
  font-size: 10px;
`;
export const SupplieCardCashback = styled.Text`
  margin-top: 8px;
  color: green;
`;
