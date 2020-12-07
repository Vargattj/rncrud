import React, {useContext, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import UsersContext from '../context/UsersContext';

export default ({route, navigation}) => {
  const [user, setUser] = useState(route.params ? route.params : {});
  const {dispatch} = useContext(UsersContext);
  return (
    <View style={style.form}>
      <View>
        <Text>Nome</Text>
        <TextInput
          style={style.input}
          onChangeText={(name) => setUser({...user, fullName: name})}
          placeholder="Informe o Nome"
          value={user.fullName}
        />
        <Text>Decrição</Text>
        <TextInput
          style={style.input}
          onChangeText={(desc) => setUser({...user, words: desc})}
          placeholder="Informe a Decrição"
          value={user.words}
        />
        <Text>URL Do Avatar</Text>
        <TextInput
          style={style.input}
          onChangeText={(avatar) => setUser({...user, avatar})}
          placeholder="Informe a URL do avatar"
          value={user.avatar}
        />
      </View>
      <Button
        style={style.button}
        title="Salvar"
        onPress={() => {
          dispatch({
            type: user.id ? 'updateUser' : 'createUser',
            payload: user,
          });
          navigation.goBack();
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    justifyContent: 'space-between',
    flex: 1,
    padding: 12,
  },
  input: {
    height: 50,
    borderColor: '#c1c1c1',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    marginTop: 5,
  },
});
