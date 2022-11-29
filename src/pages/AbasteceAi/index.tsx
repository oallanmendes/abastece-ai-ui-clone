import React from 'react';
import {
  FlatList,
  Alert,
  Text,
  View,
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
  LastSupplies,
  Title,
  SupplieCard,
  SupplieCardCashback,
  SupplieCardCategory,
  SupplieCardDate,
  SupplieCardDescription,
  SupplieCardPrice,
  IconSupplie,
  IconPlacer,
} from './styles';

import MenuButton from '../../components/MenuButton';

export default function Home({ navigation }) {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <Header>
        <Logo source={require('../../assets/logo.png')} />
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
        <Icon name="local-gas-station" size={30} />
        <PumpUpButtonText>Abastecer</PumpUpButtonText>
      </PumpUpButton>

      <LastSupplies>
        <Title>{`Veja os postos mais\npróximos`}</Title>
        <Title>Últimos abastecimentos</Title>

        <SupplieCard>
          <IconPlacer>
            <IconSupplie name="local-gas-station" size={20} />
          </IconPlacer>
          <View>
            <SupplieCardCategory>Abastecimento</SupplieCardCategory>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <SupplieCardDescription>Flashcar Auto Posto Ltda</SupplieCardDescription>
              <SupplieCardPrice>R$ 145,62</SupplieCardPrice>
            </View>
            <SupplieCardDate>09/mai às 17h11</SupplieCardDate>
            <SupplieCardCashback>R$ 5,45 de cashback</SupplieCardCashback>
          </View>
        </SupplieCard>

        <SupplieCard>
          <IconPlacer>
            <IconSupplie name="local-gas-station" size={20} />
          </IconPlacer>
          <View>
            <SupplieCardCategory>Abastecimento</SupplieCardCategory>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
              <SupplieCardDescription>Flashcar Auto Posto Ltda</SupplieCardDescription>
              <SupplieCardPrice>R$ 145,62</SupplieCardPrice>
            </View>
            <SupplieCardDate>09/mai às 17h11</SupplieCardDate>
            <SupplieCardCashback>R$ 5,45 de cashback</SupplieCardCashback>
          </View>
        </SupplieCard>
      </LastSupplies>
    </ScrollView>
  );
}