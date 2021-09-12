import styled, { css } from 'styled-components/native';

interface CardProps {
  index: number;
  length: number;
}

interface ImageProps {
  index: number;
  length: number;
}

export const ScrollView = styled.ScrollView`
  background-color: ${props => props.theme.background};
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

export const Title = styled.Text`
    font-size: 24px;
    margin-left: 25px;
    margin-top: 25px;
    color: ${props => props.theme.primary};
    font-weight: bold;
  `

export const Card = styled.TouchableOpacity<CardProps> `
  flex: 1;     
  margin-left: 15px;
  height: 310px;
  /* width: 200px; */
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
  color: ${props => props.theme.secondary};
  font-weight: bold;
`

export const CardDescription = styled.Text`
  margin-top: 20px;
  font-size: 14px;
  color: ${props => props.theme.tertiary};
  font-weight: bold;
`

export const News = styled.View`
  background-color: ${props => props.theme.secondary};
  flex: 1;
  padding-bottom: 50px;
`;

export const NewsHeader = styled.Text`
  font-size: 22px;
  font-weight: bold;
  margin-top: 40px;
  margin-left: 25px;
  line-height: 30px;
`;

export const NewsImage = styled.Image<ImageProps>`
  border-radius: 15px;
  margin-left: 15px;
  margin-top: 40px;

  ${props =>
    props.index === 0 &&
    css`
      margin-left: 25px;
  `}
  ${props =>
    props.index === props.length - 1 &&
    css`
      margin-right: 25px;
  `}
`;