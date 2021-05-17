import styled, { css } from 'styled-components/native';
import FeatherIcons from '@expo/vector-icons/Feather';

interface CardProps {
  active: boolean;
  color: string;
  index: number;
  length: number;
}

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 25px;
  margin-top: 25px;
`;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 5px;
`;

export const MenuButton = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  border-color: #A5B2BB;
  border-width: 2px;
  margin-right: 15px;
`;

export const Icon = styled(FeatherIcons)`
  color: #A5B2BB;
`;

export const NotificationBadge = styled.View`
  width: 16px;
  height: 16px;
  background-color: #FF0042;
  position: absolute;
  right: -2px;
  top: -2px;
  border-radius: 10px;
`;

export const Title = styled.Text`
    font-size: 24px;
    margin-left: 25px;
    margin-top: 25px;
    color: #03386E;
  `

export const Card = styled.TouchableOpacity<CardProps> `
  flex: 1%;     
  margin-left: 15px;
  height: 300px;
  width: 200px;
  border-radius: 20px;
  padding-left: 30px;
  padding-top: 30px;
  padding-right: 10px;
  background-color: #013765;

  ${props =>
    props.index === 0 &&
    css`
      margin-left: 25px;
      background-color: #266BAC;
  `}
  ${props =>
    props.index === props.length - 1 &&
    css`
      margin-right: 25px;
  `}
`;

export const CardImage = styled.Image`
  width: 60px;
  height: 60px;
  border-radius: 15px;
`;

export const CardHeader = styled.Text`
  margin-top: 40px;
  font-size: 18px;
  color: #EECE46;
  font-weight: bold;
`

export const CardDescription = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
`