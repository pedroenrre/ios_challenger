import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {
  View,
  Text,
  FlatList,
  Alert,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import Header from '~/components/Header';

import styles from './styles';
// {
//   "id": 1,
//   "email_enterprise": null,
//   "facebook": null,
//   "twitter": null,
//   "linkedin": null,
//   "phone": null,
//   "own_enterprise": false,
//   "enterprise_name": "Fluoretiq Limited",
//   "photo": "/uploads/enterprise/photo/1/240.jpeg",
//   "description": "FluoretiQ is a Bristol based medtech start-up developing diagnostic technology to enable bacteria identification within the average consultation window, so that patients can get the right anti-biotics from the start.  ",
//   "city": "Bristol",
//   "country": "UK",
//   "value": 0,
//   "share_price": 5000.0,
//   "enterprise_type": {
//       "id": 3,
//       "enterprise_type_name": "Health"
//   }
// },

import api from '~/services/api';

const Companies = () => {
  const {token, client, uid} = useSelector((state) => state.auth);

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getCompanies() {
    try {
      const response = await api.get('api/v1/enterprises');

      setCompanies(response.data.enterprises);
      console.log(response.data.enterprises);
    } catch (error) {
      const {status} = error.response;
      if (status === 500) {
        Alert.alert(
          'Atenção!',
          'Não foi possível listar as empresas',
          [
            {
              text: 'OK',
            },
          ],
          {cancelable: false},
        );
      } else {
        Alert.alert(
          'Atenção!',
          error.response.data.errors[0],
          [
            {
              text: 'OK',
            },
          ],
          {cancelable: false},
        );
      }
      console.log(error);
    }
    setLoading(false);
  }
  useEffect(() => {
    api.defaults.headers.common['access-token'] = token;
    api.defaults.headers.common.client = client;
    api.defaults.headers.common.uid = uid;

    getCompanies();
  }, []);

  function renderFlatListItem({item}) {
    return (
      <TouchableOpacity style={styles.ContentBox}>
        <View style={styles.LogoNameRow}>
          <View style={styles.LogoContainer}>
            <Image
              source={{uri: `https://empresas.ioasys.com.br${item.photo}`}}
              style={styles.Logo}
              resizeMode="contain"
            />
          </View>
          <View style={{flex: 1}}>
            <Text style={styles.CompanyName}>{item.enterprise_name}</Text>
            <Text style={styles.CompanyLocation}>
              {item.city} - {item.country}
            </Text>
          </View>
        </View>
        <Text style={styles.CompanyLocation}>
          Enterprise type: {item.enterprise_type.enterprise_type_name}
        </Text>
      </TouchableOpacity>
    );
  }

  const renderSeparator = () => <View style={{width: '100%', height: 2}} />;

  return (
    <>
      <Header title="Enterprises" leftButtonAction={() => {}} />
      <View style={styles.Container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={companies}
            keyExtractor={(companies) => String(companies.id)}
            renderItem={renderFlatListItem}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>
    </>
  );
};

export default Companies;
