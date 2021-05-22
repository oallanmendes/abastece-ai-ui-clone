import React from 'react';
import {
  FlatList,
  Alert,
  Text,
} from 'react-native';

import {
  ScrollView,
  Logo,
  Header,
  BalanceContainer,
  BalanceDescription,
  BalanceNumber,
  Icon,
  PumpUpButton,
  PumpUpButtonText,
  Story,
  Title,
} from './styles';

import MenuButton from '../../components/MenuButton';

export default function Home({navigation}) {  
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
        <Header>
          <Logo source={require('../../assets/logo.png')}/>
          <MenuButton
            icon={'menu'}
            iconSize={20}
            notificationNumber={3}
            onPress={() => {
              Alert.alert('Mensagem', 'Teste')
            }}
          />
        </Header>
        <BalanceContainer>
            <BalanceDescription>Saldo em conta</BalanceDescription>
            <BalanceNumber>R$ 10,19</BalanceNumber>
            <BalanceDescription>{`Você já economizou R$ 415,77\nusando o abastece aí para abastecimento`}</BalanceDescription>
        </BalanceContainer> 

        <PumpUpButton>
          {/* TODO */}
          <Icon key={''}/>
          <PumpUpButtonText>Abastecer</PumpUpButtonText>
        </PumpUpButton>

        <Story>
            <Title>{`Veja os postos mais\npróximos`}</Title>
        </Story>
    </ScrollView>
  );
}