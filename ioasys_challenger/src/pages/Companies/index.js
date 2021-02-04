import React, {useEffect, useState} from 'react';
import {CommonActions} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {AuthReset} from '~/store/modules/auth/actions';
import {UserReset} from '~/store/modules/user/actions';
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

import api from '~/services/api';

const Companies = ({navigation}) => {
  const dispatch = useDispatch();

  const {token, client, uid} = useSelector((state) => state.auth);

  const [companies, setCompanies] = useState([]);
  const [loading, setLoading] = useState(true);

  async function getcompanies() {
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

    getcompanies();
  }, []);

  function renderFlatListItem({item}) {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('CompanyDetailed', {id: item.id})}
        style={styles.ContentBox}>
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
      <Header
        title="Enterprises"
        leftButtonAction={() => {}}
        showRightButton
        rightButtonAction={() => {
          dispatch(UserReset());
          dispatch(AuthReset());
          navigation.dispatch(
            CommonActions.reset({
              index: 0,
              routes: [{name: 'Login'}],
            }),
          );
        }}
      />
      <View style={styles.Container}>
        {loading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            style={{width: '100%'}}
            showsVerticalScrollIndicator={false}
            data={companies}
            keyExtractor={(company) => String(company.id)}
            renderItem={renderFlatListItem}
            ItemSeparatorComponent={renderSeparator}
          />
        )}
      </View>
    </>
  );
};

export default Companies;
