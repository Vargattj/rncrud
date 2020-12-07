import React from 'react';
import {Text, View, FlatList, Alert} from 'react-native';
import {ListItem, Button, Icon} from 'react-native-elements';
import users from '../data/users';

export default (props) => {
  const handleUserDeletion = (user) => {
    Alert.alert('Excluir Usuário', 'Deseja excluir o usuário?', [
      {
        text: 'Sim',
        onPress() {
          console.warn('delete' + user.id);
        },
      },
      {text: 'Não'},
    ]);
  };
  const getActions = (user) => {
    return (
      <>
        <Button
          onPress={() => props.navigation.navigate('UserForm', user)}
          type="clear"
          icon={<Icon name="edit" size={25} color="orange" />}
        />
        <Button
          onPress={() => handleUserDeletion(user)}
          type="clear"
          icon={<Icon name="delete" size={25} color="red" />}
        />
      </>
    );
  };
  const getUserItem = ({item: user}) => {
    return (
      <ListItem
        leftAvatar={{source: {uri: user.avatar}}}
        key={user.id}
        title={user.fullName}
        subtitle={user.words}
        bottomDivider
        rightElement={getActions(user)}
        onPress={() => props.navigation.navigate('UserForm')}
      />
    );
  };
  return (
    <View>
      <FlatList
        data={users}
        keyExtractor={(user) => user.id.toString()}
        renderItem={getUserItem}
      />
    </View>
  );
};
