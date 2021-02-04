import React, {useState, useRef} from 'react';
import {
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from 'react-native';
import Input from '~/components/InputForm';
import * as Yup from 'yup';

import Logo from '~/assets/logo_ioasys.png';

import styles from './styles';
import {FontsColors} from '~/helpers/palette';

import api from '~/services/api';

const Login = () => {
  const passwordRef = useRef();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const schema = Yup.object().shape({
    email: Yup.string()
      .required('E-mail obrigatório')
      .email('Digite um e-mail válido'),
    password: Yup.string().required('Senha obrigatória'),
  });

  function errorMessage(error) {
    switch (error.toString()) {
      case 'ValidationError: Senha obrigatória':
        return 'Senha obrigatória';
      case 'ValidationError: E-mail obrigatório':
        return 'E-mail obrigatório';
      case 'ValidationError: Digite um e-mail válido':
        return 'Digite um e-mail válido';
      default:
        return 'Não foi possível realizar o login. Tente novamente';
    }
  }

  async function tryLogin() {
    try {
      const data = {email, password};
      const res = await api.post('api/v1/users/auth/sign_in', data);
      console.log(res);
    } catch (error) {}
    setLoading(false);
  }

  async function handleSubmit() {
    setLoading(true);
    try {
      await schema.validate({email, password});
      tryLogin();
    } catch (error) {
      console.log(error);
      Alert.alert(
        'Atenção!',
        errorMessage(error),
        [
          {
            text: 'OK',
          },
        ],
        {cancelable: false},
      );
      setLoading(false);
    }
  }

  return (
    <KeyboardAvoidingView
      style={{flex: 1}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      enabled>
      <ScrollView
        contentContainerStyle={{flex: 1}}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <View style={styles.Container}>
          <Image style={styles.Logo} source={Logo} resizeMode="contain" />
          <Text style={styles.LoginMessage}>FAÇA SEU LOGIN</Text>
          <Input
            label="USUÁRIO:"
            placeholder="DIGITE SEU USUÁRIO"
            placeholderTextColor={FontsColors.Ligth}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            returnKeyType="next"
            value={email}
            onChangeText={setEmail}
            onSubmitEditing={() => passwordRef.current.focus()}
          />
          <Input
            label="SENHA:"
            placeholder="DIGITE SUA SENHA"
            placeholderTextColor={FontsColors.Ligth}
            autoCorrect={false}
            secureTextEntry
            returnKeyType="send"
            forwardRef={passwordRef}
            value={password}
            onChangeText={setPassword}
            onSubmitEditing={() => handleSubmit()}
          />
          <TouchableOpacity
            onPress={() => handleSubmit()}
            disabled={loading}
            style={styles.Button}>
            {loading ? (
              <ActivityIndicator color="#fff" size="large" />
            ) : (
              <Text style={styles.TextButton}>LOGIN</Text>
            )}
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Login;
