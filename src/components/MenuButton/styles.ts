import styled from 'styled-components/native';
import FeatherIcons from '@expo/vector-icons/Feather';

export const MenuButtonContainer = styled.TouchableOpacity`
  width: 35px;
  height: 35px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-color: #A5B2BB;
  border-width: 1px;
  margin-right: 15px;
`;

export const Icon = styled(FeatherIcons)`
  color: #A5B2BB;
`;

export const NotificationBadge = styled.View`
  width: 20px;
  height: 20px;
  background-color: #FF0042;
  position: absolute;
  right: -6px;
  top: -6px;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
`;

export const NotificationBadgeNumber = styled.Text`
  font-weight: bold;
  color: #ffffff;
  font-size: 10px;
`;