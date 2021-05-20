import styled from 'styled-components/native';

export const View = styled.View`
  flex: 1;
  background-color: ${props => props.theme.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 30px;
  color: ${props => props.theme.primary};
`;