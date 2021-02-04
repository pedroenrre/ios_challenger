import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  ActivityIndicator,
  Alert,
  Image,
  ScrollView,
  BackHandler,
} from 'react-native';
import Header from '~/components/Header';

import styles from './styles';

import api from '~/services/api';

const CompanyDetailed = ({navigation, route}) => {
  const {id} = route.params;

  const [company, setcompany] = useState(null);
  const [loading, setLoading] = useState(true);

  const comeBack = () => {
    navigation.pop();
    return true;
  };
  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', comeBack);
    return () => {
      BackHandler.removeEventListener('hardwareBackPress', comeBack);
    };
  }, []);

  async function showcompany() {
    try {
      const response = await api.get(`api/v1/enterprises/${id}`);
      setcompany(response.data.enterprise);
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
    showcompany();
  }, []);
  return (
    <>
      <Header
        title="Enterprise details"
        showLeftButton
        leftButtonAction={() => {
          navigation.pop();
        }}
      />
      <View style={styles.Container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <ScrollView
            contentContainerStyle={{width: '100%'}}
            showsVerticalScrollIndicator={false}>
            <View style={{flex: 1}}>
              <View style={styles.LogoContainer}>
                <Image
                  source={{
                    uri: `https://empresas.ioasys.com.br${company.photo}`,
                  }}
                  style={styles.Logo}
                  resizeMode="cover"
                />
              </View>

              <View style={styles.companyNameView}>
                <Text style={styles.CompanyName}>
                  {company.enterprise_name}
                </Text>
                <Text style={styles.CompanyLocation}>
                  {company.city} - {company.country}
                </Text>
              </View>
              <Text style={styles.DescriptionLabel}>Description:</Text>
              <View style={styles.ContentBox}>
                <Text style={styles.CompanyDescription}>
                  {company.description}
                </Text>
              </View>
              <Text style={styles.DescriptionLabel}>Shares:</Text>
              <View style={styles.ContentBox}>
                <Text style={styles.CompanyDescription}>
                  Shares: {company.shares}
                </Text>
                <Text style={styles.CompanyDescription}>
                  Shares Price:{' '}
                  <Text style={{color: '#27AE60'}}>
                    US$ {company.share_price}
                  </Text>
                </Text>
              </View>
            </View>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default CompanyDetailed;
