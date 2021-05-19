import React from 'react';
import {
  FlatList,
  Alert,
  Text,
  ScrollView,
} from 'react-native';

import {
  Logo,
  Header,
  Title,
  Card,
  CardHeader,
  CardDescription,
  CardImage,
  News,
  NewsHeader,
  NewsImage,
} from './styles';

// import { Icon, NotificationBadge, MenuButtonContainer, NotificationBadgeNumber } from '../../components/MenuButton/styles';
import MenuButton from '../../components/MenuButton';

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

  const news = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1597578753991-f032f5cf859e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1621095058332-3c71ce927ee5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1611095790444-1dfa35e37b52?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80',
    },
  ]

  const partners = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1621036971881-8021a10b05e0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1595909336425-5bf541155dec?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1621177555452-bedbe4c28879?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=632&q=80',
    },
  ]

  return (
    <>
    <ScrollView>
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
        <Title>O que você deseja fazer?</Title>
        <FlatList
          data={data}
          keyExtractor={(item) => String(item.id)}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 80, marginBottom: 50}}
          renderItem={({ item, index }) => (
              <Card
                index={index}
                length={data.length}
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
        <News>
          <NewsHeader>{`Descubra onde\nganhar cashback`}</NewsHeader>
          <FlatList
            data={news}
            keyExtractor={(item) => String(item.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <NewsImage
                  index={index}
                  length={news.length}
                  source={{uri: item.image}}
                />
            )}
          />
        </News>

        <News style={{backgroundColor: '#002D64'}}>
          <NewsHeader style={{color: '#fff'}}>{`Aqui tem cashback\npra você aproveitar!`}</NewsHeader>
          <Text 
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginLeft: 25,
              color: '#fff',
              maxWidth: 320,
              marginTop: 20,
            }}
          >Conheça os nossos parceiros e troque seus Km de vantagens por cashback de verdade!</Text>
          <FlatList
            data={partners}
            keyExtractor={(item) => String(item.id)}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) => (
                <NewsImage
                  index={index}
                  length={partners.length}
                  source={{uri: item.image}}
                />
            )}
          />
        </News>
    </ScrollView>
    </>
  );
}