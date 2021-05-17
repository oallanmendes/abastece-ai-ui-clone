import React from 'react';
import {
  StatusBar,
  View,
  FlatList,
  Alert,
} from 'react-native';

import {
  Logo,
  MenuButton,
  Header,
  Title,
  Card,
  CardHeader,
  CardDescription,
  CardImage,
  Icon,
  NotificationBadge,
} from './styles';

export default function Home() {
  const data = [
    {
      id: 1,
      name: 'Promoção!',
      description: 'Concorra a 10 Corollas híbridos e milhares de créditos nos Postos Ipiranga',
      active: true,
      color: '#3d9be9',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQESXQgORRUmEw/company-logo_200_200/0/1600193498075?e=1629331200&v=beta&t=Am3l3D9qEOcLid3nGf_AgpDaSTJojA7l3FDyRYbOXoU',
    },
    {
      id: 2,
      name: 'Pix',
      description: 'Realize transferências 24h e sem taxas',
      active: false,
      color: '#15588f',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQESXQgORRUmEw/company-logo_200_200/0/1600193498075?e=1629331200&v=beta&t=Am3l3D9qEOcLid3nGf_AgpDaSTJojA7l3FDyRYbOXoU',
    },
    {
      id: 3,
      name: 'Trocar KM',
      description: 'Troque seus Km por descontos exclusivos',
      active: false,
      color: '#15588f',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQESXQgORRUmEw/company-logo_200_200/0/1600193498075?e=1629331200&v=beta&t=Am3l3D9qEOcLid3nGf_AgpDaSTJojA7l3FDyRYbOXoU',
    },
    {
      id: 4,
      name: 'Pagar',
      description: 'Pague em estabelecimentos e ganhe cashback',
      active: false,
      color: '#15588f',
      image: 'https://media-exp1.licdn.com/dms/image/C4D0BAQESXQgORRUmEw/company-logo_200_200/0/1600193498075?e=1629331200&v=beta&t=Am3l3D9qEOcLid3nGf_AgpDaSTJojA7l3FDyRYbOXoU',
    },
  ]

  return (
    <>
    <StatusBar barStyle={'dark-content'}/>
      <View>
        <Header>
          <Logo source={require('../../assets/logo.png')}/>
          <MenuButton>
          <Icon
            name={'menu'}
            size={20}
          />
          <NotificationBadge />
          </MenuButton>
        </Header>
        <Title>O que você deseja fazer?</Title>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 80}}
          renderItem={({ item, index }) => (
              <Card
                index={index}
                length={data.length}
                color={item.color}
                active={item.active}
                onPress={() => {
                  Alert.alert('Mensagem', `"O card ${item.name}" foi clicado`)
                }}>
                  <CardImage source={{uri: item.image}}/>
                  <CardHeader>{item.name}</CardHeader>
                  <CardDescription
                    numberOfLines={3}
                    minimumFontScale={0.75}
                    adjustsFontSizeToFit={true}
                  >{item.description}</CardDescription>
              </Card>
          )}
        />
      </View>
    </>
  );
}
